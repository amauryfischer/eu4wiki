import React from "react"
import { WikiComponent } from "./WikiComponent"
import { WikiProvider } from "./WikiProvider"
import type { WikiProps, WikiEntry, WikiLang, WikiConfig } from "./types"

// Export the main component
export const Wiki: React.FC<WikiProps> = (props) => {
  return (
    <WikiProvider config={props.config}>
      <WikiComponent {...props} />
    </WikiProvider>
  )
}

// Export types for external use
export type { WikiProps, WikiEntry, WikiLang, WikiConfig }

// Export default configuration
export { defaultConfig } from "./config"

// Export data management utilities
export { WikiDataManager } from "./WikiDataManager"

// Default export
export default Wiki