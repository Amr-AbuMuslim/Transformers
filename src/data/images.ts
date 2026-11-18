/**
 * Service-image map. Change `src` here when a client photo replaces a file.
 * Page components should use these ids, not filenames.
 *
 * kind "company" is a file from the company library or the Code A–Q catalog.
 * Catalog renders are labeled in `alt` and must not be captioned as client projects.
 * kind "placeholder" is temporary stock. Confirmed services on these pages already
 * have company photos, so this map has no placeholder entries.
 *
 * Left out, because the site does not confirm them: wayfinding systems, branded
 * crowd barriers, audience-chair rental, fan-zone builds, timing systems,
 * interpretation, registration software, catering, and hall electrical contracting.
 * LED_Touch_Screen_Kiosk.jpg is a curved LED wall, not a kiosk, so it is used only as that wall.
 */
export type ImageKind = "company" | "placeholder";

export interface SiteImage {
  src: string;
  alt: string;
  kind: ImageKind;
}

export const IMAGES = {
  homeExhibitions: {
    src: "/Transformers_Assets/12_Trade_Shows/MOG_Exhibition_Large_Setup.jpg",
    alt: "MOG exhibition stand built by Transformers",
    kind: "company",
  },
  homeEvents: {
    src: "/Transformers_Assets/12_Trade_Shows/BDS_Store_Launch.jpg",
    alt: "BDS brand launch environment",
    kind: "company",
  },
  homeSports: {
    src: "/Transformers_Assets/10_Sports_Events/CITI_PARA_Swimming_Egypt_2024.jpg",
    alt: "CITI Para Swimming World Series venue setup in Egypt",
    kind: "company",
  },
  homeConferences: {
    src: "/Transformers_Assets/12_Trade_Shows/Corporate_Conference_Booths.jpg",
    alt: "Row of compact conference booths with counters",
    kind: "company",
  },
  homeDisplay: {
    src: "/Transformers_Assets/02_Exhibition_Booths/CodeB_Elegant_UShape_Live.jpg",
    alt: "Installed modular booth with branded wall, shelves, and counter",
    kind: "company",
  },

  exhHero: {
    src: "/Transformers_Assets/02_Exhibition_Booths/CodeB_Elegant_UShape_Live.jpg",
    alt: "Installed modular exhibition booth with graphics, shelves, and a counter",
    kind: "company",
  },
  exhLayout: {
    src: "/Transformers_Assets/09_Past_Events/Career_Expo_Hall.jpg",
    alt: "Exhibition hall with a row of modular booths",
    kind: "company",
  },
  exhEntrance: {
    src: "/K.png",
    alt: "Catalog render of the Code K entrance and branded wall structure",
    kind: "company",
  },
  exhHeader: {
    src: "/L.png",
    alt: "Catalog render of the Code L modular header sign",
    kind: "company",
  },
  exhRegistration: {
    src: "/M.png",
    alt: "Branded reception counters for greeting visitors",
    kind: "company",
  },
  exhLighting: {
    src: "/Transformers_Assets/06_Event_Lighting/ARERA_Expo.jpg",
    alt: "ARERA exhibition stand with display lighting",
    kind: "company",
  },
  exhCurvedScreen: {
    src: "/Transformers_Assets/04_LED_Screens/LED_Touch_Screen_Kiosk.jpg",
    alt: "Curved LED wall",
    kind: "company",
  },
  exhFurniture: {
    src: "/Transformers_Assets/07_Furniture/Meeting_Tables.jpg",
    alt: "Exhibition meeting tables",
    kind: "company",
  },
  exhInstall: {
    src: "/Transformers_Assets/10_Sports_Events/LED_Install_In_Progress.jpg",
    alt: "Crew carrying LED cabinets during installation",
    kind: "company",
  },
  exhCustom: {
    src: "/Transformers_Assets/09_Past_Events/MANNOR_Booth.jpg",
    alt: "MANNOR exhibition booth",
    kind: "company",
  },
  exhFullStand: {
    src: "/Transformers_Assets/12_Trade_Shows/MOG_Exhibition_Large_Setup.jpg",
    alt: "Large MOG exhibition stand",
    kind: "company",
  },
  exhModular: {
    src: "/A.png",
    alt: "Catalog render of the Code A U-shape modular booth",
    kind: "company",
  },
  exhGraphics: {
    src: "/Transformers_Assets/09_Past_Events/Limitless_Naturals_Booth.jpg",
    alt: "Limitless Naturals booth with printed graphics",
    kind: "company",
  },
  exhSignage: {
    src: "/Transformers_Assets/04_LED_Screens/LED_Digital_Signage_Row.jpg",
    alt: "Vertical display and angled touch screen",
    kind: "company",
  },
  exhShowcase: {
    src: "/Transformers_Assets/11_Awards/Glass_Display_Cases.jpg",
    alt: "Glass showcase for product display",
    kind: "company",
  },
  exhCounters: {
    src: "/Transformers_Assets/07_Furniture/Mini_Bars.jpg",
    alt: "Branded counter with internal storage",
    kind: "company",
  },
  exhFeatureLight: {
    src: "/C.png",
    alt: "Catalog render of the Code C luxury booth",
    kind: "company",
  },
  exhLShape: {
    src: "/F.png",
    alt: "Catalog render of the Code F L-shape booth",
    kind: "company",
  },
  exhPavilion: {
    src: "/Q.jpg",
    alt: "Catalog render of the Code Q modular pavilion",
    kind: "company",
  },
  exhTower: {
    src: "/I.jpg",
    alt: "Catalog render of the Code I tower add-on",
    kind: "company",
  },
  exhPodium: {
    src: "/M.png",
    alt: "Catalog render of the Code M branded podium",
    kind: "company",
  },
  exhRender: {
    src: "/Transformers_Assets/02_Exhibition_Booths/CodeB_Elegant_UShape_3D.jpg",
    alt: "Catalog render of a Code B booth with graphic panels",
    kind: "company",
  },
  exhCrew: {
    src: "/Transformers_Assets/09_Past_Events/Our_Team.jpg",
    alt: "Transformers crew on site",
    kind: "company",
  },
  exhComplete: {
    src: "/Transformers_Assets/09_Past_Events/Career_Expos.jpg",
    alt: "Career expo floor with multiple booths",
    kind: "company",
  },

  evtHero: {
    src: "/Transformers_Assets/12_Trade_Shows/BDS_Store_Launch.jpg",
    alt: "BDS brand launch with branded structures",
    kind: "company",
  },
  evtStage: {
    src: "/Transformers_Assets/08_Stages/German_Stage_Glass.jpg",
    alt: "Modular glass stage deck",
    kind: "company",
  },
  evtBackdrop: {
    src: "/Transformers_Assets/04_LED_Screens/LED_Branded_Stage.jpg",
    alt: "Branded LED stage backdrop",
    kind: "company",
  },
  evtLight: {
    src: "/Transformers_Assets/06_Event_Lighting/PROXIMA_Gala.jpg",
    alt: "PROXIMA gala lighting",
    kind: "company",
  },
  evtSound: {
    src: "/Transformers_Assets/05_Sound_Systems/Line_Array_Speakers.jpg",
    alt: "Line array loudspeakers",
    kind: "company",
  },
  evtMics: {
    src: "/Transformers_Assets/05_Sound_Systems/Wireless_Microphone_Package.jpg",
    alt: "Wireless microphone package",
    kind: "company",
  },
  evtEntrance: {
    src: "/K.png",
    alt: "Catalog render of a branded entrance wall, Code K",
    kind: "company",
  },
  evtFurniture: {
    src: "/Transformers_Assets/07_Furniture/Hydraulic_Tables.jpg",
    alt: "Cocktail tables for a hosted event",
    kind: "company",
  },
  evtSponsorBooth: {
    src: "/D.png",
    alt: "Catalog render of a simple modular booth, Code D",
    kind: "company",
  },
  evtCounter: {
    src: "/M.png",
    alt: "Catalog render of a branded counter podium, Code M",
    kind: "company",
  },
  evtSponsorWall: {
    src: "/Transformers_Assets/10_Sports_Events/Winzoxib_Gala_Dinner.jpg",
    alt: "Winzoxib gathering with branded stage surroundings",
    kind: "company",
  },
  evtDisplay: {
    src: "/Transformers_Assets/11_Awards/Multi_Level_Showcase.jpg",
    alt: "Multi-level product showcase",
    kind: "company",
  },
  evtStructure: {
    src: "/G.png",
    alt: "Catalog render of a booth with a tower, Code G",
    kind: "company",
  },
  evtComplete: {
    src: "/Transformers_Assets/06_Event_Lighting/SHIRA_20Years_Anniversary.jpg",
    alt: "SHIRA anniversary event",
    kind: "company",
  },
  evtInstalledStage: {
    src: "/Transformers_Assets/08_Stages/German_Stage_Installed.jpg",
    alt: "Installed modular stage",
    kind: "company",
  },

  sptHero: {
    src: "/Transformers_Assets/10_Sports_Events/CITI_PARA_Swimming_Egypt_2024.jpg",
    alt: "CITI Para Swimming World Series venue in Egypt",
    kind: "company",
  },
  sptField: {
    src: "/Transformers_Assets/10_Sports_Events/CMAS_Finswimming_2023_1.jpg",
    alt: "CMAS Finswimming championship branding",
    kind: "company",
  },
  sptSponsor: {
    src: "/Transformers_Assets/10_Sports_Events/African_Weightlifting_Championships.jpg",
    alt: "Weightlifting championship venue",
    kind: "company",
  },
  sptLed: {
    src: "/Transformers_Assets/04_LED_Screens/LED_Large_Venue.jpg",
    alt: "Large venue LED screen",
    kind: "company",
  },
  sptStage: {
    src: "/Transformers_Assets/10_Sports_Events/International_Gymnastics_Championship.jpg",
    alt: "International gymnastics championship arena",
    kind: "company",
  },
  sptCeremony: {
    src: "/Transformers_Assets/10_Sports_Events/World_Para_Powerlifting_1.jpg",
    alt: "World Para Powerlifting competition platform",
    kind: "company",
  },
  sptPodium: {
    src: "/Transformers_Assets/10_Sports_Events/World_Para_Powerlifting_HeavyWeight.jpg",
    alt: "Para powerlifting platform and backdrop",
    kind: "company",
  },
  sptMedia: {
    src: "/Transformers_Assets/10_Sports_Events/CMAS_Swimming_Athletes.jpg",
    alt: "Athletes at a CMAS swimming championship",
    kind: "company",
  },
  sptArrival: {
    src: "/Transformers_Assets/10_Sports_Events/Outdoor_Event_Setup.jpg",
    alt: "Outdoor sports event setup",
    kind: "company",
  },
  sptSetup: {
    src: "/Transformers_Assets/10_Sports_Events/Sports_Event_Setup.jpg",
    alt: "Sports event branding setup",
    kind: "company",
  },
  sptSound: {
    src: "/Transformers_Assets/05_Sound_Systems/PA_System_Mixing_Console.jpg",
    alt: "Mixing console for venue audio",
    kind: "company",
  },
  sptBooth: {
    src: "/Q.jpg",
    alt: "Catalog render of a modular pavilion that can sit beside a venue",
    kind: "company",
  },
  sptCounter: {
    src: "/M.png",
    alt: "Catalog render of a branded counter, Code M",
    kind: "company",
  },
  sptWall: {
    src: "/K.png",
    alt: "Catalog render of a branded sponsor wall, Code K",
    kind: "company",
  },
  sptComplete: {
    src: "/Transformers_Assets/10_Sports_Events/Egyptian_Para_Powerlifting_1.jpg",
    alt: "Egyptian para powerlifting setup",
    kind: "company",
  },
  sptCmasWide: {
    src: "/Transformers_Assets/10_Sports_Events/CMAS_Finswimming_2023_2.jpg",
    alt: "CMAS Finswimming venue from a second camera position",
    kind: "company",
  },
  sptLift: {
    src: "/Transformers_Assets/10_Sports_Events/World_Para_Powerlifting_2.jpg",
    alt: "World Para Powerlifting platform from another angle",
    kind: "company",
  },
  sptCmasHall: {
    src: "/Transformers_Assets/10_Sports_Events/CMAS_Swimming_World_Championship.jpg",
    alt: "CMAS swimming championship hall",
    kind: "company",
  },

  cnfHero: {
    src: "/Transformers_Assets/12_Trade_Shows/Corporate_Conference_Booths.jpg",
    alt: "Compact conference booths with branded panels and counters",
    kind: "company",
  },
  cnfStage: {
    src: "/Transformers_Assets/08_Stages/German_Stage_Glass.jpg",
    alt: "Modular stage deck for a conference platform",
    kind: "company",
  },
  cnfWall: {
    src: "/Transformers_Assets/04_LED_Screens/LED_Conference_Setup.jpg",
    alt: "Conference stage with a wide LED presentation wall",
    kind: "company",
  },
  cnfRoom: {
    src: "/Transformers_Assets/06_Event_Lighting/HR_Conference.jpg",
    alt: "Human resources leadership conference room",
    kind: "company",
  },
  cnfScreen: {
    src: "/Transformers_Assets/04_LED_Screens/LED_Digital_Signage_Row.jpg",
    alt: "Small vertical screen and angled display",
    kind: "company",
  },
  cnfMics: {
    src: "/Transformers_Assets/05_Sound_Systems/Wireless_Microphone_Package.jpg",
    alt: "Wireless microphones for speakers",
    kind: "company",
  },
  cnfDesk: {
    src: "/Transformers_Assets/07_Furniture/XTables_Sales_Tables.jpg",
    alt: "Tables for a registration or information point",
    kind: "company",
  },
  cnfFurniture: {
    src: "/Transformers_Assets/07_Furniture/Meeting_Tables.jpg",
    alt: "Meeting tables for conference side conversations",
    kind: "company",
  },
  cnfSmallBooth: {
    src: "/A.png",
    alt: "Catalog render of a compact Code A booth",
    kind: "company",
  },
  cnfCorner: {
    src: "/F.png",
    alt: "Catalog render of a compact L-shape booth, Code F",
    kind: "company",
  },
  cnfPavilion: {
    src: "/Q.jpg",
    alt: "Catalog render of the Code Q pavilion, listed at 3 by 3 and 3 by 4 metres",
    kind: "company",
  },
  cnfOpen: {
    src: "/N.png",
    alt: "Catalog render of the Code N open modular layout",
    kind: "company",
  },
  cnfCounter: {
    src: "/M.png",
    alt: "Catalog render of a branded conference counter",
    kind: "company",
  },
  cnfProduct: {
    src: "/Transformers_Assets/11_Awards/Glass_Display_Cases.jpg",
    alt: "Glass case for a compact product display",
    kind: "company",
  },
  cnfNetwork: {
    src: "/Transformers_Assets/09_Past_Events/Medical_Conferences.jpg",
    alt: "Medical conference environment",
    kind: "company",
  },
  cnfComplete: {
    src: "/Transformers_Assets/09_Past_Events/Investment_Forums.jpg",
    alt: "Investment forum room",
    kind: "company",
  },

  sysHero: {
    src: "/Transformers_Assets/02_Exhibition_Booths/CodeB_Elegant_UShape_Live.jpg",
    alt: "Installed Transformers modular booth with graphics and a counter",
    kind: "company",
  },
  sysFrame: {
    src: "/A.png",
    alt: "Catalog render showing the Code A aluminum frame, header, and graphic walls",
    kind: "company",
  },
  sysHeader: {
    src: "/L.png",
    alt: "Catalog render of the wooden header sign, Code L",
    kind: "company",
  },
  sysPodium: {
    src: "/M.png",
    alt: "Catalog render of the reception podium, Code M",
    kind: "company",
  },
  sysTower: {
    src: "/G.png",
    alt: "Catalog render of a tower configuration, Code G",
    kind: "company",
  },
  sysRing: {
    src: "/J.png",
    alt: "Catalog render of the circular ring, Code J",
    kind: "company",
  },
  sysGate: {
    src: "/K.png",
    alt: "Catalog render of the entrance structure, Code K",
    kind: "company",
  },
  sysOpen: {
    src: "/N.png",
    alt: "Catalog render of an open modular layout, Code N",
    kind: "company",
  },
  sysPavilion: {
    src: "/Q.jpg",
    alt: "Catalog render of the pavilion configuration, Code Q",
    kind: "company",
  },
  sysGraphics: {
    src: "/Transformers_Assets/09_Past_Events/Limitless_Naturals_Booth.jpg",
    alt: "Printed graphics on an installed booth",
    kind: "company",
  },
  sysAppExhibition: {
    src: "/Transformers_Assets/12_Trade_Shows/MOG_Exhibition_Large_Setup.jpg",
    alt: "Exhibition stand using a large branded structure",
    kind: "company",
  },
  sysAppEvent: {
    src: "/Transformers_Assets/12_Trade_Shows/BDS_Store_Launch.jpg",
    alt: "Brand launch using branded display structures",
    kind: "company",
  },
  sysAppConference: {
    src: "/Transformers_Assets/12_Trade_Shows/Corporate_Conference_Booths.jpg",
    alt: "Compact booths in a conference hall",
    kind: "company",
  },
} as const satisfies Record<string, SiteImage>;

export type ImageId = keyof typeof IMAGES;

export function siteImage(id: ImageId): SiteImage {
  return IMAGES[id];
}
