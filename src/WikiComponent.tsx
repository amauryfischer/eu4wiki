import React, { useState, useEffect, useMemo } from "react"
import { BookOpen, MagnifyingGlass, ChartBar, X, Globe } from "@phosphor-icons/react"
import { WikiDataManager } from "./WikiDataManager"
import { useWikiConfig } from "./WikiProvider"
import type { WikiProps, WikiEntry, WikiLang, SearchEvent } from "./types"
import { translations } from "./translations"
import "./styles.css"

export const WikiComponent: React.FC<WikiProps> = ({
  onSearch,
  onLanguageChange,
  className = "",
  style
}) => {
  const config = useWikiConfig()
  const [currentLang, setCurrentLang] = useState<WikiLang>(config.defaultLanguage || "fr")
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<WikiEntry[]>([])
  const [activeTab, setActiveTab] = useState("search")
  const [showResults, setShowResults] = useState(false)
  
  const dataManager = useMemo(() => WikiDataManager.getInstance(), [])
  const t = translations[currentLang] || translations.fr

  // Analytics functions
  const loadEvents = (): SearchEvent[] => {
    if (!config.enableAnalytics) return []
    try {
      const raw = localStorage.getItem(config.storageKey || "eu4_wiki_analytics")
      if (raw) return JSON.parse(raw)
    } catch {}
    return []
  }

  const saveEvents = (list: SearchEvent[]) => {
    if (!config.enableAnalytics) return
    localStorage.setItem(config.storageKey || "eu4_wiki_analytics", JSON.stringify(list))
  }

  const logEvent = (ev: SearchEvent) => {
    if (!config.enableAnalytics) return
    const list = loadEvents()
    list.push(ev)
    saveEvents(list)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      setResults([])
      setShowResults(false)
      return
    }
    
    const found = dataManager.search(searchQuery, currentLang)
    setResults(found)
    setShowResults(true)
    
    logEvent({
      ts: Date.now(),
      lang: currentLang,
      q: searchQuery,
      hits: found.length,
      top: found[0]?.title
    })
    
    onSearch?.(searchQuery, found)
  }
  
  const clearSearch = () => {
    setSearchQuery("")
    setResults([])
    setShowResults(false)
  }
  
  const handleLanguageChange = (lang: WikiLang) => {
    setCurrentLang(lang)
    onLanguageChange?.(lang)
    // Re-search with new language
    if (searchQuery) {
      const found = dataManager.search(searchQuery, lang)
      setResults(found)
    }
  }
  
  // Analytics data
  const events = useMemo(() => loadEvents(), [activeTab])
  const stats = useMemo(() => {
    const total = events.length
    const byLang: Record<string, number> = { fr: 0, en: 0, de: 0, es: 0 }
    const topSearches: Record<string, number> = {}
    
    events.forEach((e) => {
      if (e.lang in byLang) byLang[e.lang]++
      if (e.top) topSearches[e.top] = (topSearches[e.top] || 0) + 1
    })
    
    const topItems = Object.entries(topSearches)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
    
    return { total, byLang, topItems }
  }, [events])
  
  const allEntries = useMemo(() => dataManager.getData(currentLang), [currentLang, dataManager])
  
  return (
    <div className={`eu4-wiki-container ${className}`} style={style}>
      <div className="eu4-wiki-header">
        <h1 className="eu4-wiki-title">
          <BookOpen size={32} weight="duotone" />
          {t.title}
        </h1>
        <div className="eu4-wiki-lang-selector">
          <Globe size={20} weight="duotone" />
          <select 
            value={currentLang} 
            onChange={(e) => handleLanguageChange(e.target.value as WikiLang)}
            className="eu4-wiki-select"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </div>
      
      <div className="eu4-wiki-tabs">
        <button
          className={`eu4-wiki-tab ${activeTab === "search" ? "active" : ""}`}
          onClick={() => setActiveTab("search")}
        >
          <MagnifyingGlass size={18} weight="duotone" />
          {t.search}
        </button>
        
        {config.enableStats && (
          <button
            className={`eu4-wiki-tab ${activeTab === "stats" ? "active" : ""}`}
            onClick={() => setActiveTab("stats")}
          >
            <ChartBar size={18} weight="duotone" />
            {t.stats}
            {stats.total > 0 && <span className="eu4-wiki-badge">{stats.total}</span>}
          </button>
        )}
        
        {config.enableGlossary && (
          <button
            className={`eu4-wiki-tab ${activeTab === "glossary" ? "active" : ""}`}
            onClick={() => setActiveTab("glossary")}
          >
            <BookOpen size={18} weight="duotone" />
            {t.glossary}
          </button>
        )}
      </div>
      
      <div className="eu4-wiki-content">
        {activeTab === "search" && (
          <div className="eu4-wiki-search-section">
            <form onSubmit={handleSearch} className="eu4-wiki-search-form">
              <div className="eu4-wiki-search-input-wrapper">
                <MagnifyingGlass size={20} weight="duotone" className="eu4-wiki-search-icon" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="eu4-wiki-search-input"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="eu4-wiki-clear-btn"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              <button type="submit" className="eu4-wiki-search-btn">
                {t.searchButton}
              </button>
            </form>
            
            {showResults && (
              <div className="eu4-wiki-results">
                <h2 className="eu4-wiki-results-title">
                  {results.length > 0 
                    ? t.resultsFound.replace("{{count}}", results.length.toString())
                    : t.noResults}
                </h2>
                <div className="eu4-wiki-results-grid">
                  {results.map((entry, index) => (
                    <div key={index} className="eu4-wiki-card">
                      <h3 className="eu4-wiki-card-title">
                        <BookOpen size={16} weight="duotone" />
                        {entry.title}
                      </h3>
                      <div className="eu4-wiki-card-body">{entry.body}</div>
                      {entry.tags && (
                        <div className="eu4-wiki-card-tags">
                          {entry.tags.map((tag, i) => (
                            <span key={i} className="eu4-wiki-tag">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {!showResults && (
              <div className="eu4-wiki-hint">{t.hint}</div>
            )}
          </div>
        )}
        
        {activeTab === "stats" && config.enableStats && (
          <div className="eu4-wiki-stats-section">
            <div className="eu4-wiki-stats-grid">
              <div className="eu4-wiki-stat-card">
                <div className="eu4-wiki-stat-value">{stats.total}</div>
                <div className="eu4-wiki-stat-label">{t.totalSearches}</div>
              </div>
              
              <div className="eu4-wiki-stat-card">
                <div className="eu4-wiki-stat-lang-list">
                  <div>Français: <span>{stats.byLang.fr}</span></div>
                  <div>English: <span>{stats.byLang.en}</span></div>
                  <div>Deutsch: <span>{stats.byLang.de}</span></div>
                </div>
                <div className="eu4-wiki-stat-label">{t.byLanguage}</div>
              </div>
              
              <div className="eu4-wiki-stat-card">
                {stats.topItems.length > 0 ? (
                  <div className="eu4-wiki-stat-top-list">
                    {stats.topItems.map(([term, count], i) => (
                      <div key={term}>
                        {i + 1}. {term} <span>{count}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="eu4-wiki-no-data">{t.noData}</div>
                )}
                <div className="eu4-wiki-stat-label">{t.topSearches}</div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "glossary" && config.enableGlossary && (
          <div className="eu4-wiki-glossary-section">
            <div className="eu4-wiki-results-grid">
              {allEntries.map((entry, index) => (
                <div key={index} className="eu4-wiki-card">
                  <h3 className="eu4-wiki-card-title">
                    <BookOpen size={16} weight="duotone" />
                    {entry.title}
                  </h3>
                  <div className="eu4-wiki-card-body">{entry.body}</div>
                  {entry.tags && (
                    <div className="eu4-wiki-card-tags">
                      {entry.tags.map((tag, i) => (
                        <span key={i} className="eu4-wiki-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}