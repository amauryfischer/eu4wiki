# Guide d'intégration du Wiki

## 🎯 Comment utiliser le package Wiki

### Option 1 : Package NPM local (Recommandé)

1. **Dans le package.json principal** (`/home/ange/eu4/package.json`) :
```json
"dependencies": {
  "@eu4/wiki": "file:./wiki",
  // ... autres dépendances
}
```

2. **Installer le package** :
```bash
yarn install
# ou
npm install
```

3. **Importer dans votre code** :
```typescript
import Wiki from "@eu4/wiki"
```

### Option 2 : Import direct (développement)

```typescript
// Dans /src/app/wiki/page.tsx
import Wiki from "../../../wiki/src"
```

## 📁 Structure des fichiers

```
eu4/
├── package.json           # Votre package.json principal
├── src/
│   └── app/
│       └── wiki/
│           └── page.tsx   # Page qui importe le Wiki
└── wiki/                  # Package Wiki indépendant
    ├── package.json       # Package.json du Wiki
    ├── src/
    │   ├── index.tsx      # Point d'entrée (ce que vous importez)
    │   └── ...
    └── dist/              # Fichiers buildés (après npm run build)
```

## 🔧 Workflow de développement

### Pour le développeur principal (vous) :

1. **Installation initiale** :
```bash
cd wiki
npm install
npm run build
cd ..
yarn install  # Installe le package local
```

2. **Utilisation** :
```typescript
// src/app/wiki/page.tsx
import Wiki from "@eu4/wiki"

// Utiliser le composant
<Wiki 
  config={{
    defaultLanguage: "fr",
    enableAnalytics: true,
    // ...
  }}
/>
```

### Pour le développeur externe (Wiki) :

1. **Cloner uniquement le dossier wiki** :
```bash
git clone [url-du-repo-wiki] wiki
cd wiki
npm install
```

2. **Développer** :
```bash
npm run dev  # Mode watch
```

3. **Modifier les données** :
- Éditer `src/data/wikiData.ts`
- Éditer `src/translations.ts`

4. **Build et commit** :
```bash
npm run build
git add .
git commit -m "Update wiki"
git push
```

### Pour vous (pull des mises à jour) :

```bash
cd wiki
git pull
npm run build
cd ..
yarn install  # Réinstalle le package mis à jour
```

## 🚀 Déploiement en production

### Option A : Build local
```bash
cd wiki
npm run build
cd ..
yarn build
```

### Option B : Package NPM privé

1. Publier le wiki sur un registre NPM privé
2. Modifier package.json :
```json
"dependencies": {
  "@eu4/wiki": "^1.0.0",
}
```

## ⚙️ API du composant Wiki

```typescript
interface WikiProps {
  config?: {
    defaultLanguage?: "fr" | "en" | "de" | "es"
    enableAnalytics?: boolean
    enableStats?: boolean
    enableGlossary?: boolean
    storageKey?: string
    theme?: {
      primaryColor?: string
      secondaryColor?: string
      backgroundColor?: string
      textColor?: string
      borderColor?: string
      cardBackground?: string
      hoverColor?: string
    }
  }
  onSearch?: (query: string, results: WikiEntry[]) => void
  onLanguageChange?: (lang: string) => void
  className?: string
  style?: React.CSSProperties
}
```

## 🔄 Synchronisation Git

### Structure recommandée avec submodule :

```bash
# Ajouter le wiki comme submodule
git submodule add https://github.com/[user]/eu4-wiki.git wiki

# Pull les mises à jour du wiki
git submodule update --remote wiki

# Commit les changements
git add wiki
git commit -m "Update wiki submodule"
```

## ❌ Ce qu'il ne faut PAS faire

- Ne PAS importer `Wiki.tsx` directement (utilisez l'index)
- Ne PAS modifier les fichiers dans `wiki/dist/`
- Ne PAS oublier de rebuild après les mises à jour

## ✅ Checklist d'intégration

- [ ] Package.json modifié avec `"@eu4/wiki": "file:./wiki"`
- [ ] Wiki buildé (`cd wiki && npm run build`)
- [ ] Import correct dans la page (`import Wiki from "@eu4/wiki"`)
- [ ] Configuration du thème pour matcher l'app
- [ ] Test de la recherche
- [ ] Test du changement de langue
- [ ] Vérification des styles