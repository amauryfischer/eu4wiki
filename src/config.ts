import type { WikiConfig } from "./types"

export const defaultConfig: WikiConfig = {
  defaultLanguage: "fr",
  enableAnalytics: true,
  enableStats: true,
  enableGlossary: true,
  storageKey: "eu4_wiki_analytics",
  theme: {
    primaryColor: "#ffd700",
    secondaryColor: "#ff8c00",
    backgroundColor: "#0a0a0f",
    textColor: "#ffffff",
    borderColor: "rgba(255, 215, 0, 0.2)",
    cardBackground: "rgba(20, 20, 30, 0.8)",
    hoverColor: "rgba(255, 215, 0, 0.3)"
  }
}