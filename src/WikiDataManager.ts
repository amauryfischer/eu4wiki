import type { WikiEntry, WikiLang } from "./types"
import { wikiData } from "./data/wikiData"

export class WikiDataManager {
  private static instance: WikiDataManager
  private data: Record<WikiLang, WikiEntry[]>

  private constructor() {
    this.data = wikiData
  }

  public static getInstance(): WikiDataManager {
    if (!WikiDataManager.instance) {
      WikiDataManager.instance = new WikiDataManager()
    }
    return WikiDataManager.instance
  }

  public getData(lang: WikiLang): WikiEntry[] {
    return this.data[lang] || this.data.fr
  }

  public setData(lang: WikiLang, entries: WikiEntry[]): void {
    this.data[lang] = entries
  }

  public addEntry(lang: WikiLang, entry: WikiEntry): void {
    if (!this.data[lang]) {
      this.data[lang] = []
    }
    this.data[lang].push(entry)
  }

  public updateEntry(lang: WikiLang, title: string, updates: Partial<WikiEntry>): boolean {
    const entries = this.data[lang]
    if (!entries) return false
    
    const index = entries.findIndex(e => e.title === title)
    if (index === -1) return false
    
    entries[index] = { ...entries[index], ...updates }
    return true
  }

  public removeEntry(lang: WikiLang, title: string): boolean {
    const entries = this.data[lang]
    if (!entries) return false
    
    const index = entries.findIndex(e => e.title === title)
    if (index === -1) return false
    
    entries.splice(index, 1)
    return true
  }

  public search(query: string, lang: WikiLang): WikiEntry[] {
    const entries = this.getData(lang)
    const normalizedQuery = this.normalize(query)
    
    if (!normalizedQuery) return []
    
    const tokens = normalizedQuery.split(" ").filter(t => t.length > 1)
    const results: Array<WikiEntry & { score: number }> = []
    
    for (const entry of entries) {
      const text = this.normalize(`${entry.title} ${entry.body}`)
      let score = 0
      
      tokens.forEach(token => {
        if (text.includes(token)) {
          score += text.startsWith(token) ? 3 : 1
          if (this.normalize(entry.title).includes(token)) score += 2
        }
      })
      
      if (score > 0) {
        results.push({ ...entry, score })
      }
    }
    
    return results
      .sort((a, b) => b.score - a.score)
      .map(({ score, ...entry }) => entry)
  }

  private normalize(text: string): string {
    return (text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  }

  public exportData(): string {
    return JSON.stringify(this.data, null, 2)
  }

  public importData(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString)
      if (typeof data === "object" && data !== null) {
        this.data = data
        return true
      }
      return false
    } catch {
      return false
    }
  }
}