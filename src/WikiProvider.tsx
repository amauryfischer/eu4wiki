import React, { createContext, useContext, useMemo } from "react"
import type { WikiConfig } from "./types"
import { defaultConfig } from "./config"

interface WikiContextValue {
  config: Required<WikiConfig>
}

const WikiContext = createContext<WikiContextValue | undefined>(undefined)

export const useWikiConfig = () => {
  const context = useContext(WikiContext)
  if (!context) {
    throw new Error("useWikiConfig must be used within WikiProvider")
  }
  return context.config
}

interface WikiProviderProps {
  config?: WikiConfig
  children: React.ReactNode
}

export const WikiProvider: React.FC<WikiProviderProps> = ({ config, children }) => {
  const mergedConfig = useMemo(() => ({
    ...defaultConfig,
    ...config,
    theme: {
      ...defaultConfig.theme,
      ...config?.theme
    }
  }), [config]) as Required<WikiConfig>

  return (
    <WikiContext.Provider value={{ config: mergedConfig }}>
      {children}
    </WikiContext.Provider>
  )
}