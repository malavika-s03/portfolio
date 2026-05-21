# VectorVault Case Study - Content Data Specification

This document contains all text content, data arrays, and static information extracted from the Figma design for implementation in `data.ts`.

---

## 1. INTRODUCTION SECTION

### Label
```typescript
const introductionLabel = "Introduction";
```

### Body Text
```typescript
const introductionText = `Throughout the semester, we have been working on the Yulu app's user experience, starting with identifying the critical gaps in user experience faced by customers through techniques such as affinity mapping, secondary research, and user journey mapping; these allowed us to create a preliminary set of problem statements`;
```

**Note:** The body text appears to be placeholder from Yulu - verify with actual VectorVault content before implementation.

---

## 2. WHY VECTORVAULT SECTION

### Section Heading
- Rendered as pixel art image
- Text: "WHY VECTORVAULT ?"

### Bullet Points (Left Side Content)
```typescript
const whyVectorVaultPoints = [
  {
    bullet: "●",
    color: "#E040FF", // Magenta
    text: "VECTORVAULT WAS BORN OUT OF GENUINE FRUSTRATION, FUELED BY A TUTORIAL, TUTORIALS, DOOM."
  }
];
```

**Note:** Additional bullet points may exist - verify complete content from Figma.

---

## 3. SOFTWARE PROVIDERS PIE CHART DATA

### Section Heading
- Rendered as pixel art image
- Text: "SOFTWARE PROVIDERS"

### Chart Data
```typescript
const softwareProvidersData = [
  { label: "ADOBE", percentage: 49, color: "#00F593" },
  { label: "OTHER", percentage: 24, color: "#E040FF" },
  { label: "APPLE", percentage: 11, color: "#2D4BFF" },
  { label: "CANVA", percentage: 7, color: "#7B1FA2" },
  { label: "ALLUDO", percentage: 5, color: "#00E5FF" },
  { label: "AVID TECHNOLOGY", percentage: 2, color: "#1A237E" },
  { label: "MAXON COMPUTER", percentage: 1, color: "#37474F" }
];
```

### Key Insights (Text Content)
```typescript
const softwareProviderInsights = [
  {
    bullet: "●",
    color: "#00F593",
    text: "THE LARGEST PLAYER IS ADOBE."
  },
  {
    bullet: "●",
    color: "#E040FF",
    text: "THE MARKET REMAINS LARGELY CONSOLIDATED - UNCHANGED."
  }
];
```

---

## 4. CREATIVE SOFTWARE SPEND PIE CHART DATA

### Section Heading
- Rendered as pixel art image
- Text: "CREATIVE SOFTWARE SPEND"

### Chart Data
```typescript
const creativeSoftwareSpendData = [
  { label: "USA", percentage: 52.8, color: "#00F593" },
  { label: "OTHERS", percentage: 20.5, color: "#E040FF" },
  { label: "UNITED KINGDOM", percentage: 5, color: "#2D4BFF" },
  { label: "CHINA", percentage: 4.8, color: "#00E5FF" },
  { label: "GERMANY", percentage: 4.5, color: "#7B1FA2" },
  { label: "JAPAN", percentage: 3.5, color: "#1A237E" },
  { label: "CANADA", percentage: 3.1, color: "#FF5722" },
  { label: "FRANCE", percentage: 2.6, color: "#F44336" },
  { label: "AUSTRALIA", percentage: 1.7, color: "#FF80AB" },
  { label: "NETHERLANDS", percentage: 1.5, color: "#4FC3F7" }
];
```

### Key Insights (Text Content)
```typescript
const creativeSoftwareSpendInsights = [
  {
    bullet: "●",
    color: "#00F593",
    text: "THE USA SPENDS MORE ON CREATIVE SOFTWARE THAN THE REST OF THE WORLD COMBINED."
  }
];
```

---

## 5. JOBS TO BE DONE TABLE DATA

### Section Heading
- Rendered as pixel art image
- Text: "JOBS TO BE DONE"

### Table Structure
```typescript
interface JTBDRow {
  category: string;
  categoryColor: string;
  job: string;
  situation: string;
  outcome: string;
}

const jobsToBeDoneData: JTBDRow[] = [
  // Table rows to be extracted from Figma
  // Structure based on visible table columns
];
```

**Note:** Detailed table content needs to be extracted from specific table nodes in Figma. The table appears to have colored category columns with job descriptions.

---

## 6. USER PERSONA DATA

### Section Heading
- Rendered as pixel art image
- Text: "USER PERSONA"

### Persona: ARUN
```typescript
const personaArun = {
  id: "arun",
  name: "ARUN",
  role: "ASPIRING ANIMATOR",
  image: "/images/vectorvault/personas/arun-profile.png",
  healthBar: {
    color: "#E040FF",
    fillPercentage: 75 // Approximate based on visual
  },
  cardStyle: {
    border: "3px solid white",
    borderRadius: "12px",
    shadow: "8px 8px 10.8px 0px white"
  },
  traits: [
    // Additional trait data if present
  ],
  goals: [
    // Goal descriptions if present
  ],
  frustrations: [
    // Frustration descriptions if present
  ]
};
```

### Persona: SARA
```typescript
const personaSara = {
  id: "sara",
  name: "SARA",
  role: "FREELANCER",
  image: "/images/vectorvault/personas/sara-profile.png",
  healthBar: {
    color: "#E040FF",
    fillPercentage: 80 // Approximate based on visual
  },
  cardStyle: {
    border: "1px solid white",
    borderRadius: "12px",
    shadow: "none"
  },
  traits: [
    // Additional trait data if present
  ],
  goals: [
    // Goal descriptions if present
  ],
  frustrations: [
    // Frustration descriptions if present
  ]
};
```

---

## 7. HOW THIS WORKS SECTION

### Section Heading
- Rendered as pixel art image
- Text: "HOW THIS WORKS"

### Isometric Illustration
```typescript
const howThisWorksIllustration = {
  cityscape: "/images/vectorvault/cityscape-isometric.png",
  characters: [
    {
      id: "char-1112",
      src: "/images/vectorvault/characters/char-1112.png",
      position: { top: "7.1%", right: "8.1%" },
      size: { width: "17.8%", height: "20.3%" }
    },
    {
      id: "char-1113",
      src: "/images/vectorvault/characters/char-1113.png",
      position: { bottom: "10.9%", left: "0%" },
      size: { width: "17%", height: "20.5%" }
    },
    {
      id: "char-1114",
      src: "/images/vectorvault/characters/char-1114.png",
      position: { top: "11.9%", left: "38.2%" },
      size: { width: "8.5%", height: "17.1%" }
    },
    {
      id: "char-1115",
      src: "/images/vectorvault/characters/char-1115.png",
      position: { top: "20.6%", right: "18.6%" },
      size: { width: "12.8%", height: "16.9%" }
    },
    {
      id: "char-1116",
      src: "/images/vectorvault/characters/char-1116.png",
      position: { bottom: "16.2%", left: "20.5%" },
      size: { width: "14.1%", height: "17%" }
    }
  ]
};
```

### View Prototype Button
```typescript
const viewPrototypeButton = {
  text: "view prototype",
  link: "#", // Replace with actual prototype link
  style: {
    backgroundColor: "#73927A",
    borderRadius: "6px",
    color: "#FFFFFF",
    font: "Press Start 2P",
    fontSize: "16px"
  }
};
```

---

## 8. FOOTER SECTION (GAME OVER)

### Section Heading
- Rendered as pixel art image
- Text: "GAME OVER"

### Subheading
- Rendered as pixel art or text
- Text: "THANK YOU FOR PLAYING!"

### Controller Images
```typescript
const footerControllers = {
  left: "/images/vectorvault/controller-left.png",
  right: "/images/vectorvault/controller-right.png"
};
```

---

## 9. IMAGE PATH CONSTANTS

```typescript
// Base path for all VectorVault images
const VV_IMAGE_BASE = '/images/vectorvault';

// Section heading images
const HEADING_IMAGES = {
  whyVectorVault: `${VV_IMAGE_BASE}/headings/why-vectorvault.png`,
  softwareProviders: `${VV_IMAGE_BASE}/headings/software-providers.png`,
  creativeSoftwareSpend: `${VV_IMAGE_BASE}/headings/creative-spend.png`,
  jobsToBeDone: `${VV_IMAGE_BASE}/headings/jobs-to-be-done.png`,
  userPersona: `${VV_IMAGE_BASE}/headings/user-persona.png`,
  howThisWorks: `${VV_IMAGE_BASE}/headings/how-this-works.png`,
  gameOver: `${VV_IMAGE_BASE}/headings/game-over.png`,
  thankYou: `${VV_IMAGE_BASE}/headings/thank-you.png`
};

// Hero and illustration images
const ILLUSTRATION_IMAGES = {
  heroVectorVault: `${VV_IMAGE_BASE}/hero-vectorvault.png`,
  cityscapeIsometric: `${VV_IMAGE_BASE}/cityscape-isometric.png`
};

// Chart images (if using pre-rendered)
const CHART_IMAGES = {
  softwareProvidersPie: `${VV_IMAGE_BASE}/charts/software-providers-pie.png`,
  creativeSpendPie: `${VV_IMAGE_BASE}/charts/creative-spend-pie.png`
};

// Persona images
const PERSONA_IMAGES = {
  arun: `${VV_IMAGE_BASE}/personas/arun-profile.png`,
  sara: `${VV_IMAGE_BASE}/personas/sara-profile.png`
};

// Character overlay images
const CHARACTER_IMAGES = {
  char1112: `${VV_IMAGE_BASE}/characters/char-1112.png`,
  char1113: `${VV_IMAGE_BASE}/characters/char-1113.png`,
  char1114: `${VV_IMAGE_BASE}/characters/char-1114.png`,
  char1115: `${VV_IMAGE_BASE}/characters/char-1115.png`,
  char1116: `${VV_IMAGE_BASE}/characters/char-1116.png`
};

// UI element images
const UI_IMAGES = {
  healthBarHeart: `${VV_IMAGE_BASE}/ui/health-heart.png`,
  controllerPlay: `${VV_IMAGE_BASE}/ui/controller-play.png`
};
```

---

## 10. COMPLETE DATA.TS EXPORT TEMPLATE

```typescript
// VectorVault Case Study Data
// All static content for the VectorVault case study page

export const introductionLabel = "Introduction";

export const introductionText = `Throughout the semester, we have been working on the Yulu app's user experience, starting with identifying the critical gaps in user experience faced by customers through techniques such as affinity mapping, secondary research, and user journey mapping; these allowed us to create a preliminary set of problem statements`;

export const softwareProvidersData = [
  { label: "ADOBE", percentage: 49, color: "#00F593" },
  { label: "OTHER", percentage: 24, color: "#E040FF" },
  { label: "APPLE", percentage: 11, color: "#2D4BFF" },
  { label: "CANVA", percentage: 7, color: "#7B1FA2" },
  { label: "ALLUDO", percentage: 5, color: "#00E5FF" },
  { label: "AVID TECHNOLOGY", percentage: 2, color: "#1A237E" },
  { label: "MAXON COMPUTER", percentage: 1, color: "#37474F" }
];

export const creativeSoftwareSpendData = [
  { label: "USA", percentage: 52.8, color: "#00F593" },
  { label: "OTHERS", percentage: 20.5, color: "#E040FF" },
  { label: "UNITED KINGDOM", percentage: 5, color: "#2D4BFF" },
  { label: "CHINA", percentage: 4.8, color: "#00E5FF" },
  { label: "GERMANY", percentage: 4.5, color: "#7B1FA2" },
  { label: "JAPAN", percentage: 3.5, color: "#1A237E" },
  { label: "CANADA", percentage: 3.1, color: "#FF5722" },
  { label: "FRANCE", percentage: 2.6, color: "#F44336" },
  { label: "AUSTRALIA", percentage: 1.7, color: "#FF80AB" },
  { label: "NETHERLANDS", percentage: 1.5, color: "#4FC3F7" }
];

export const personas = {
  arun: {
    name: "ARUN",
    role: "ASPIRING ANIMATOR",
    image: "/images/vectorvault/personas/arun-profile.png",
    hasShadow: true
  },
  sara: {
    name: "SARA", 
    role: "FREELANCER",
    image: "/images/vectorvault/personas/sara-profile.png",
    hasShadow: false
  }
};

export const prototypeLink = "#"; // Replace with actual prototype URL

export const BASE_URL = import.meta.env.BASE_URL || '/';
```

---

## 11. NOTES FOR IMPLEMENTATION

### Content Verification Needed
1. **Introduction text** - Currently using Yulu placeholder, verify actual VectorVault content
2. **Jobs To Be Done table** - Need to extract full table content from Figma nodes
3. **Persona details** - May have additional trait/goal information in full design
4. **Bullet point text** - Verify complete text content for all insight bullet points

### Assets to Export from Figma
Before implementation, export these assets from Figma:
1. All pixel art heading images
2. Hero VectorVault illustration
3. Isometric cityscape and character overlays
4. Persona profile images
5. Pie charts (if not recreating with CSS/SVG)
6. Health bar heart icon
7. Controller/play button graphics

---

*Document Generated: March 5, 2026*
*Source: Figma MCP Design Context Extraction*
