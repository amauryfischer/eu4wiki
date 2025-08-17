# EU4 Wiki Package

Un package indépendant pour le Wiki d'Empire Universe 4.

## 🚀 Installation

```bash
npm install
```

## 📦 Build

```bash
npm run build
```

Cela créera les fichiers de distribution dans le dossier `dist/`.

## 🔧 Développement

```bash
npm run dev
```

Lance le build en mode watch pour le développement.

## 📝 Structure

```
wiki/
├── src/
│   ├── index.tsx           # Point d'entrée principal
│   ├── WikiComponent.tsx   # Composant principal
│   ├── WikiProvider.tsx    # Provider de configuration
│   ├── WikiDataManager.ts  # Gestionnaire de données
│   ├── types.ts            # Types TypeScript
│   ├── config.ts           # Configuration par défaut
│   ├── translations.ts     # Traductions
│   ├── styles.css          # Styles CSS
│   └── data/
│       └── wikiData.ts     # Données du wiki
├── package.json
├── tsconfig.json
├── rollup.config.js
└── README.md
```

## 🎨 Personnalisation

### Ajouter/Modifier des entrées

Éditez le fichier `src/data/wikiData.ts` :

```typescript
export const wikiData: Record<WikiLang, WikiEntry[]> = {
  fr: [
    {
      title: "Nouveau terme",
      body: "Description du terme",
      category: "catégorie",
      tags: ["tag1", "tag2"]
    },
    // ...
  ],
  // ...
}
```

### Modifier les traductions

Éditez le fichier `src/translations.ts` pour ajouter ou modifier les textes de l'interface.

### Personnaliser le thème

Le thème peut être personnalisé via la configuration lors de l'intégration :

```typescript
const config = {
  theme: {
    primaryColor: "#ffd700",
    secondaryColor: "#ff8c00",
    backgroundColor: "#0a0a0f",
    // ...
  }
}
```

## 📊 Gestion des données

Le `WikiDataManager` offre plusieurs méthodes pour gérer les données :

- `getData(lang)` : Récupère toutes les entrées pour une langue
- `addEntry(lang, entry)` : Ajoute une nouvelle entrée
- `updateEntry(lang, title, updates)` : Met à jour une entrée existante
- `removeEntry(lang, title)` : Supprime une entrée
- `search(query, lang)` : Recherche dans les entrées
- `exportData()` : Exporte toutes les données en JSON
- `importData(json)` : Importe des données depuis JSON

## 🔄 Mise à jour

Pour mettre à jour le wiki :

1. Modifiez les fichiers nécessaires dans `src/`
2. Lancez `npm run build`
3. Committez et pushez vos changements
4. L'application principale pourra ensuite pull la dernière version

## 📌 Notes importantes

- Le package est conçu pour être autonome et ne dépend pas du code principal d'EU4
- Les icônes utilisent `@phosphor-icons/react` avec le style `duotone`
- Le système d'analytics utilise localStorage (configurable)
- Support multilingue : FR, EN, DE, ES (ES à compléter)

## 🤝 Contribution

Pour contribuer :

1. Modifiez les données dans `src/data/wikiData.ts`
2. Testez avec `npm run dev`
3. Build avec `npm run build`
4. Créez une PR avec vos changements

## 📄 Licence

MIT