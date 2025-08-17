export type WikiLang = "fr" | "en" | "de" | "es"

export interface WikiEntry {
  title: string
  body: string
  img?: string
  tags?: string[]
  category?: string
}

export interface WikiTranslations {
  title: string
  subtitle: string
  search: string
  searchPlaceholder: string
  searchButton: string
  resultsFound: string
  noResults: string
  hint: string
  stats: string
  totalSearches: string
  byLanguage: string
  topSearches: string
  noData: string
  searchTrends: string
  chartPlaceholder: string
  glossary: string
  clearSearch: string
  language: string
}

export interface WikiTheme {
  primaryColor?: string
  secondaryColor?: string
  backgroundColor?: string
  textColor?: string
  borderColor?: string
  cardBackground?: string
  hoverColor?: string
}

export interface WikiConfig {
  defaultLanguage?: WikiLang
  enableAnalytics?: boolean
  enableStats?: boolean
  enableGlossary?: boolean
  storageKey?: string
  theme?: WikiTheme
}

export interface WikiProps {
  config?: WikiConfig
  onSearch?: (query: string, results: WikiEntry[]) => void
  onLanguageChange?: (lang: WikiLang) => void
  className?: string
  style?: React.CSSProperties
}

export interface SearchEvent {
  ts: number
  lang: WikiLang
  q: string
  hits: number
  top?: string
}