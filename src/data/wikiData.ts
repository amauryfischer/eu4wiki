import type { WikiEntry, WikiLang } from "../types"

export const wikiData: Record<WikiLang, WikiEntry[]> = {
  fr: [
    {
      title: "AE / UA",
      body: "Unité de mesure à l'intérieur d'un système solaire (AE : Unité astronomique).",
      category: "navigation",
      tags: ["mesure", "système", "distance"]
    },
    {
      title: "Allié",
      body: "Alliance conclue entre deux empires permettant de coordonner des attaques contre des ennemis communs sans risquer de se tirer dessus.",
      category: "diplomatie",
      tags: ["alliance", "empire", "combat"]
    },
    {
      title: "Astéroïdes",
      body: "Cailloux dans l'espace contenant des ressources pouvant être collectées.",
      category: "ressources",
      tags: ["mining", "ressources", "espace"]
    },
    {
      title: "Barge",
      body: "Vaisseaux de transport de troupes.",
      category: "vaisseaux",
      tags: ["transport", "troupes", "militaire"]
    },
    {
      title: "Bunker",
      body: "Le bunker permet de protéger les ressources et les modules en cas d'attaque de votre planète. La capacité de stockage est en fonction de son niveau (le niveau maximum du bunker est de 10). Il est possible d'avoir un bunker par planète.",
      category: "bâtiments",
      tags: ["défense", "stockage", "protection"]
    },
    {
      title: "Camouflage",
      body: `Rend votre flotte indétectable visuellement et au scanner. La distance à laquelle votre flotte devient visible (PC) varie selon le type de camouflage utilisé.

• Camouflage 1 : Rend votre flotte invisible à faible distance de PC.
• Camouflage 2 : Rend votre flotte invisible à moyenne distance de PC.
• Camouflage 3 : Rend votre flotte invisible à grande distance de PC.

Pour que le camouflage soit optimum sur votre flotte il doit y avoir un module par vaisseaux`,
      category: "technologie",
      tags: ["stealth", "flotte", "module"]
    },
    {
      title: "Centre de recherche",
      body: "Le centre de recherche permet d'effectuer des recherches dans différents domaines. Ces recherches sont accessibles selon le niveau du centre de recherche ainsi que les recherches effectuées précédemment. On peut assigner des scientifiques selon le niveau de recherche (1 à 5 maximum) pour diminuer le temps de recherche.",
      category: "bâtiments",
      tags: ["recherche", "scientifique", "technologie"]
    },
    {
      title: "Classe de vaisseaux",
      body: "Les vaisseaux sont généralement divisés en plusieurs classes (A, B, C, D) qui correspondent à leur rôle, taille et puissance. Chaque classe a un usage stratégique particulier. La classe A sont les vaisseaux légers et la classe D les vaisseaux lourds.",
      category: "vaisseaux",
      tags: ["classification", "stratégie", "combat"]
    },
    {
      title: "Colonisation",
      body: `Action de prendre possession d'une nouvelle planète vierge pour étendre son empire.

Pour coloniser vos futures planètes (1 planète mère et 3 planètes secondaires max), il y a plusieurs étapes :

• Première colonisation : 
  - Effectuer les recherches : Spying Station et Moon Base
  - Puis effectuer la recherche Technologie de Colonisation
  - Produire un module de colonisation dans Ship Factory

• Deuxième colonisation : Effectuer la recherche Mars Colonization
• Troisième colonisation : Effectuer la recherche A World Beyond`,
      category: "expansion",
      tags: ["planète", "empire", "recherche"]
    },
    {
      title: "Débris",
      body: "Ressources pouvant être collectées provenant de la destruction d'un ou plusieurs vaisseaux.",
      category: "ressources",
      tags: ["combat", "recyclage", "ressources"]
    },
    {
      title: "Dock bombing",
      body: "Décollage automatique de la flotte en cas d'attaque terrestre d'un ennemi ou pirate.",
      category: "défense",
      tags: ["flotte", "protection", "automatique"]
    },
    {
      title: "Empire",
      body: "Groupement de plusieurs joueurs réunis sous une même bannière, qui partagent entraide et objectifs communs.",
      category: "social",
      tags: ["alliance", "groupe", "coopération"]
    },
    {
      title: "FA",
      body: "Flotte d'Attaque.",
      category: "militaire",
      tags: ["flotte", "combat", "abréviation"]
    },
    {
      title: "Factory",
      body: "Cette usine permet de produire des modules qui peuvent ensuite être utilisés pour concevoir des vaisseaux ou être vendus. Le nombre de modules que vous pouvez fabriquer dépend du niveau de l'usine.",
      category: "bâtiments",
      tags: ["production", "modules", "industrie"]
    },
    {
      title: "Ghost",
      body: "Faire voyager un ou des vaisseaux sur une longue période temps.",
      category: "stratégie",
      tags: ["voyage", "tactique", "longue durée"]
    },
    {
      title: "Impulsion",
      body: "L'impulsion permet à vos vaisseaux de naviguer à l'intérieur d'un système solaire. L'impulsion est obligatoire sur tous les vaisseaux.",
      category: "propulsion",
      tags: ["mouvement", "système", "obligatoire"]
    },
    {
      title: "Mines",
      body: "Les mines servent à générer des ressources sur les planètes. Selon les planètes, le % de production diffère.",
      category: "bâtiments",
      tags: ["production", "ressources", "économie"]
    },
    {
      title: "Noob",
      body: "Jeune joueur novice.",
      category: "jargon",
      tags: ["débutant", "nouveau", "argot"]
    },
    {
      title: "PA",
      body: "Point d'Attention qui définie la taille de la flotte. Max 7 500. Pour augmenter, agrandir le Ship Factory.",
      category: "gameplay",
      tags: ["flotte", "limite", "capacité"]
    },
    {
      title: "PC ou SS",
      body: "Unité de mesure représentant un système solaire (PC : Parsec / SS : Système solaire).",
      category: "navigation",
      tags: ["distance", "mesure", "système"]
    },
    {
      title: "Pillage",
      body: "Spoliation d'un joueur (ressources ou modules) sans nécessité d'être en guerre.",
      category: "combat",
      tags: ["attaque", "ressources", "tactique"]
    },
    {
      title: "Pirate",
      body: "Flotte PNJ. Chaque destruction rapporte des crédits.",
      category: "pve",
      tags: ["ennemi", "crédits", "combat"]
    },
    {
      title: "Plot",
      body: "≥ 5 flottes sur une même coordonnée (orbite ou système).",
      category: "stratégie",
      tags: ["flotte", "concentration", "tactique"]
    },
    {
      title: "PNJ",
      body: "Personnage Non Joueur. Ennemis pirates IA (rouge dans le système). Chaque PNJ détruit rapporte des crédits.",
      category: "pve",
      tags: ["ia", "ennemi", "crédits"]
    },
    {
      title: "Optimisateur de minage",
      body: "Optimise le rendement des récoltes d'astéroïdes. Optimal : 1 module par vaisseau.",
      category: "modules",
      tags: ["mining", "efficacité", "astéroïdes"]
    },
    {
      title: "Recherches",
      body: "Améliorent puissance, vitesse de construction, efficacité des scans…",
      category: "technologie",
      tags: ["amélioration", "progression", "science"]
    },
    {
      title: "Reset ou piéton",
      body: "Flotte/troupes entièrement détruites.",
      category: "jargon",
      tags: ["défaite", "destruction", "argot"]
    },
    {
      title: "Scan",
      body: "Sonde ou vaisseau pour obtenir des infos : stocks, débris/astéroïdes, compositions, statuts, tailles…",
      category: "reconnaissance",
      tags: ["information", "espionnage", "exploration"]
    },
    {
      title: "Scientifique",
      body: "Formés via l'Université. Spécialisations (armes, châssis, boucliers, équipements, propulsion, économie, autres/général). Accélèrent les recherches.",
      category: "personnel",
      tags: ["recherche", "spécialisation", "université"]
    },
    {
      title: "Ship Factory",
      body: "Chantier naval (série ou individuel). Designs sauvegardables/chargeables/supprimables.",
      category: "bâtiments",
      tags: ["construction", "vaisseaux", "production"]
    },
    {
      title: "Slot",
      body: "Taille maximum de module supportée par le vaisseau.",
      category: "vaisseaux",
      tags: ["module", "capacité", "limite"]
    },
    {
      title: "Spaceport",
      body: "Accueil, maintenance, réparation, départ/arrivée.",
      category: "bâtiments",
      tags: ["infrastructure", "maintenance", "base"]
    },
    {
      title: "Système solaire",
      body: "Planètes + débris/astéroïdes + soleil. Bornes (-52,-52,-52) à (52,52,52). Soleil au centre.",
      category: "navigation",
      tags: ["espace", "coordonnées", "carte"]
    },
    {
      title: "Upgrade un bâtiment",
      body: "Augmente le niveau → meilleures performances/production (coût temps + ressources).",
      category: "bâtiments",
      tags: ["amélioration", "niveau", "progression"]
    },
    {
      title: "University",
      body: "Forme des scientifiques. Niveau capé par le niveau de l'université.",
      category: "bâtiments",
      tags: ["formation", "scientifique", "éducation"]
    },
    {
      title: "Vortex",
      body: "Portail spatial pour déplacements rapides (coloniser, renforcer, chasser, transférer).",
      category: "technologie",
      tags: ["transport", "portail", "déplacement"]
    },
    {
      title: "Warp",
      body: "Propulsion inter-systèmes. Indispensable.",
      category: "propulsion",
      tags: ["voyage", "système", "obligatoire"]
    }
  ],
  en: [
    {
      title: "AU / UA",
      body: "Unit inside a solar system (AU: Astronomical Unit).",
      category: "navigation",
      tags: ["measure", "system", "distance"]
    },
    {
      title: "Ally",
      body: "Alliance to coordinate attacks without friendly fire.",
      category: "diplomacy",
      tags: ["alliance", "empire", "combat"]
    },
    {
      title: "Asteroids",
      body: "Rocks containing harvestable resources.",
      category: "resources",
      tags: ["mining", "resources", "space"]
    },
    {
      title: "Barge",
      body: "Troop transport ship.",
      category: "ships",
      tags: ["transport", "troops", "military"]
    },
    {
      title: "Bunker",
      body: "Protects resources and modules. One per planet, max level 10.",
      category: "buildings",
      tags: ["defense", "storage", "protection"]
    },
    {
      title: "Camouflage",
      body: `Makes fleet undetectable visually and by scanner.

• Camouflage 1: Short range invisibility
• Camouflage 2: Medium range invisibility  
• Camouflage 3: Long range invisibility

Optimal: one module per ship.`,
      category: "technology",
      tags: ["stealth", "fleet", "module"]
    },
    {
      title: "Research Center",
      body: "Unlocks research by level/prereqs. Scientists reduce time.",
      category: "buildings",
      tags: ["research", "science", "technology"]
    },
    {
      title: "Ship classes",
      body: "A (light) to D (heavy), different roles.",
      category: "ships",
      tags: ["classification", "strategy", "combat"]
    },
    {
      title: "Colonization",
      body: `Take possession of a new planet to expand your empire.

• First colony: Complete Spying Station + Moon Base, then Colonization Tech
• Second colony: Research Mars Colonization
• Third colony: Research A World Beyond`,
      category: "expansion",
      tags: ["planet", "empire", "research"]
    },
    {
      title: "Debris",
      body: "Resources from destroyed ships.",
      category: "resources",
      tags: ["combat", "recycling", "resources"]
    },
    {
      title: "Dock bombing",
      body: "Auto takeoff on ground attack.",
      category: "defense",
      tags: ["fleet", "protection", "automatic"]
    },
    {
      title: "Empire",
      body: "Group under one banner.",
      category: "social",
      tags: ["alliance", "group", "cooperation"]
    },
    {
      title: "AF",
      body: "Attack Fleet.",
      category: "military",
      tags: ["fleet", "combat", "abbreviation"]
    },
    {
      title: "Factory",
      body: "Produces modules; capacity by level; shows stocks.",
      category: "buildings",
      tags: ["production", "modules", "industry"]
    },
    {
      title: "Ghost",
      body: "Send ships on long travel.",
      category: "strategy",
      tags: ["travel", "tactic", "long-term"]
    },
    {
      title: "Impulse",
      body: "Intra-system drive; mandatory.",
      category: "propulsion",
      tags: ["movement", "system", "required"]
    },
    {
      title: "Mines",
      body: "Generate resources (planet dependent).",
      category: "buildings",
      tags: ["production", "resources", "economy"]
    },
    {
      title: "Noob",
      body: "New player.",
      category: "slang",
      tags: ["beginner", "new", "jargon"]
    },
    {
      title: "AP",
      body: "Attention Points; fleet size (max 7,500). Up via Ship Factory.",
      category: "gameplay",
      tags: ["fleet", "limit", "capacity"]
    },
    {
      title: "PC or SS",
      body: "System unit (PC Parsec / SS Solar System).",
      category: "navigation",
      tags: ["distance", "measure", "system"]
    },
    {
      title: "Looting",
      body: "Resources/modules without needing war.",
      category: "combat",
      tags: ["attack", "resources", "tactic"]
    },
    {
      title: "Pirate",
      body: "NPC pirate fleets (red). Credits on destroy.",
      category: "pve",
      tags: ["enemy", "credits", "combat"]
    },
    {
      title: "Plot",
      body: "≥ 5 fleets at same coordinate.",
      category: "strategy",
      tags: ["fleet", "concentration", "tactic"]
    },
    {
      title: "NPC",
      body: "Non-player pirate fleets. Credits per destroyed.",
      category: "pve",
      tags: ["ai", "enemy", "credits"]
    },
    {
      title: "Mining Optimizer",
      body: "Better asteroid yield. One module per ship.",
      category: "modules",
      tags: ["mining", "efficiency", "asteroids"]
    },
    {
      title: "Research",
      body: "Boosts power, build speed, scans.",
      category: "technology",
      tags: ["improvement", "progression", "science"]
    },
    {
      title: "Reset / on foot",
      body: "Fleet/troops destroyed.",
      category: "slang",
      tags: ["defeat", "destruction", "jargon"]
    },
    {
      title: "Scan",
      body: "Probe/ship intel: stocks, debris/asteroids, compositions, statuses, sizes…",
      category: "reconnaissance",
      tags: ["information", "espionage", "exploration"]
    },
    {
      title: "Scientist",
      body: "University + specialties; speeds research.",
      category: "personnel",
      tags: ["research", "specialization", "university"]
    },
    {
      title: "Ship Factory",
      body: "Shipyard; build ships; manage designs.",
      category: "buildings",
      tags: ["construction", "ships", "production"]
    },
    {
      title: "Slot",
      body: "Max module size per ship.",
      category: "ships",
      tags: ["module", "capacity", "limit"]
    },
    {
      title: "Spaceport",
      body: "Dock/maintenance/repair/depart/arrive.",
      category: "buildings",
      tags: ["infrastructure", "maintenance", "base"]
    },
    {
      title: "Solar system",
      body: "Planets + debris/asteroids + sun. Bounds (−52..52).",
      category: "navigation",
      tags: ["space", "coordinates", "map"]
    },
    {
      title: "Upgrade building",
      body: "Level up → better perf/production.",
      category: "buildings",
      tags: ["improvement", "level", "progression"]
    },
    {
      title: "University",
      body: "Trains scientists; cap by level.",
      category: "buildings",
      tags: ["training", "scientist", "education"]
    },
    {
      title: "Vortex",
      body: "Portal for fast moves (reinforce, colonize, hunt, transfer).",
      category: "technology",
      tags: ["transport", "portal", "movement"]
    },
    {
      title: "Warp",
      body: "Inter-system drive. Mandatory.",
      category: "propulsion",
      tags: ["travel", "system", "required"]
    }
  ],
  de: [
    {
      title: "AE / UA",
      body: "Maßeinheit im Sonnensystem (AE: Astronomische Einheit).",
      category: "navigation",
      tags: ["maß", "system", "entfernung"]
    },
    {
      title: "Verbündeter",
      body: "Bündnis ohne Eigenbeschuss.",
      category: "diplomatie",
      tags: ["allianz", "imperium", "kampf"]
    },
    {
      title: "Asteroiden",
      body: "Gesteinsbrocken mit Ressourcen.",
      category: "ressourcen",
      tags: ["bergbau", "ressourcen", "weltraum"]
    },
    {
      title: "Schubboot",
      body: "Truppentransporter.",
      category: "schiffe",
      tags: ["transport", "truppen", "militär"]
    },
    {
      title: "Bunker",
      body: "Schützt Ressourcen/Module; einer je Planet, max Stufe 10.",
      category: "gebäude",
      tags: ["verteidigung", "lager", "schutz"]
    },
    {
      title: "Tarnung",
      body: "Unsichtbar visuell/Scanner. Drei Stufen.",
      category: "technologie",
      tags: ["stealth", "flotte", "modul"]
    },
    {
      title: "Forschungszentrum",
      body: "Forschung nach Stufe & Voraussetzungen; Wissenschaftler verkürzen die Zeit.",
      category: "gebäude",
      tags: ["forschung", "wissenschaft", "technologie"]
    },
    {
      title: "Schiffsklassen",
      body: "A (leicht) bis D (schwer), unterschiedliche Rollen.",
      category: "schiffe",
      tags: ["klassifikation", "strategie", "kampf"]
    },
    {
      title: "Kolonisierung",
      body: `Neue Planeten für dein Imperium erobern.

• Erste Kolonie: Spying Station + Moon Base, dann Kolonisationstechnologie
• Zweite Kolonie: Mars Colonization erforschen  
• Dritte Kolonie: A World Beyond erforschen`,
      category: "expansion",
      tags: ["planet", "imperium", "forschung"]
    },
    {
      title: "Trümmer",
      body: "Ressourcen aus zerstörten Schiffen.",
      category: "ressourcen",
      tags: ["kampf", "recycling", "ressourcen"]
    },
    {
      title: "Dock-Bombing",
      body: "Autostart bei Bodenangriff.",
      category: "verteidigung",
      tags: ["flotte", "schutz", "automatisch"]
    },
    {
      title: "Imperium",
      body: "Spielergruppe unter einer Flagge.",
      category: "sozial",
      tags: ["allianz", "gruppe", "kooperation"]
    },
    {
      title: "AF",
      body: "Angriffsflotte.",
      category: "militär",
      tags: ["flotte", "kampf", "abkürzung"]
    },
    {
      title: "Fabrik",
      body: "Produziert Module; Kapazität je Stufe; zeigt Bestände.",
      category: "gebäude",
      tags: ["produktion", "module", "industrie"]
    },
    {
      title: "Geistflug",
      body: "Sehr lange Reisezeit.",
      category: "strategie",
      tags: ["reise", "taktik", "langzeit"]
    },
    {
      title: "Impuls",
      body: "Im System reisen; Pflicht.",
      category: "antrieb",
      tags: ["bewegung", "system", "pflicht"]
    },
    {
      title: "Minen",
      body: "Erzeugen Ressourcen (planetabhängig).",
      category: "gebäude",
      tags: ["produktion", "ressourcen", "wirtschaft"]
    },
    {
      title: "Noob",
      body: "Anfänger.",
      category: "jargon",
      tags: ["anfänger", "neu", "slang"]
    },
    {
      title: "AP",
      body: "Aufmerksamkeits-Punkte: Flottengröße (max. 7.500). Über Werft erhöhen.",
      category: "gameplay",
      tags: ["flotte", "limit", "kapazität"]
    },
    {
      title: "PC oder SS",
      body: "Systemeinheit (PC Parsec / SS Sonnensystem).",
      category: "navigation",
      tags: ["entfernung", "maß", "system"]
    },
    {
      title: "Plünderung",
      body: "Ressourcen/Module nehmen; kein Krieg nötig.",
      category: "kampf",
      tags: ["angriff", "ressourcen", "taktik"]
    },
    {
      title: "Pirat",
      body: "KI-Piratenflotten (rot). Credits bei Zerstörung.",
      category: "pve",
      tags: ["feind", "credits", "kampf"]
    },
    {
      title: "Plot",
      body: "≥ 5 Flotten auf gleicher Koordinate.",
      category: "strategie",
      tags: ["flotte", "konzentration", "taktik"]
    },
    {
      title: "NPC",
      body: "Nichtspieler-Piratenflotten. Credits je Zerstörung.",
      category: "pve",
      tags: ["ki", "feind", "credits"]
    },
    {
      title: "Abbau-Optimierer",
      body: "Ertragssteigerung; 1 Modul/Schiff.",
      category: "module",
      tags: ["bergbau", "effizienz", "asteroiden"]
    },
    {
      title: "Forschung",
      body: "Verbessert Feuerkraft, Bauzeit, Scan-Effizienz.",
      category: "technologie",
      tags: ["verbesserung", "fortschritt", "wissenschaft"]
    },
    {
      title: "Reset / zu Fuß",
      body: "Flotte/Truppen komplett zerstört.",
      category: "jargon",
      tags: ["niederlage", "zerstörung", "slang"]
    },
    {
      title: "Scan",
      body: "Infos zu Beständen, Trümmern/Asteroiden, Zusammensetzung, Status, Größe…",
      category: "aufklärung",
      tags: ["information", "spionage", "erkundung"]
    },
    {
      title: "Wissenschaftler",
      body: "Universität; spezialisiert; beschleunigt Forschung.",
      category: "personal",
      tags: ["forschung", "spezialisierung", "universität"]
    },
    {
      title: "Werft",
      body: "Schiffsbau; Designs verwalten.",
      category: "gebäude",
      tags: ["konstruktion", "schiffe", "produktion"]
    },
    {
      title: "Slot",
      body: "Maximale Modulgröße je Schiff.",
      category: "schiffe",
      tags: ["modul", "kapazität", "limit"]
    },
    {
      title: "Raumhafen",
      body: "Andocken/Wartung/Reparatur/Start/Landung.",
      category: "gebäude",
      tags: ["infrastruktur", "wartung", "basis"]
    },
    {
      title: "Sonnensystem",
      body: "Planeten + Trümmer/Asteroiden + Sonne. Grenzen (−52..52).",
      category: "navigation",
      tags: ["weltraum", "koordinaten", "karte"]
    },
    {
      title: "Gebäude aufrüsten",
      body: "Stufe erhöhen → bessere Leistung/Produktion.",
      category: "gebäude",
      tags: ["verbesserung", "stufe", "fortschritt"]
    },
    {
      title: "Universität",
      body: "Bildet Wissenschaftler aus. Level-Cap je Universität.",
      category: "gebäude",
      tags: ["ausbildung", "wissenschaftler", "bildung"]
    },
    {
      title: "Vortex",
      body: "Raumportal für schnelle Verlegung.",
      category: "technologie",
      tags: ["transport", "portal", "bewegung"]
    },
    {
      title: "Warp",
      body: "Zwischen den Systemen reisen. Pflicht.",
      category: "antrieb",
      tags: ["reise", "system", "pflicht"]
    }
  ],
  es: []  // Spanish data can be added later
}