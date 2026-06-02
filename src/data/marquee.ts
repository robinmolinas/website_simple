/**
 * Marquee image data.
 *
 * ⚠️ EXTERNAL DEPENDENCY WARNING:
 * The EXTERNAL_IMAGES array references assets from motionsites.ai.
 * These filenames include Vite content hashes (e.g. "eECLH3Yc"), meaning
 * if motionsites.ai rebuilds their site, every URL here will 404.
 *
 * To make the marquee fully self-contained, download these GIFs and move
 * them to /public/marquee/ then update the paths below.
 * Local project GIFs (TRENDS_ATLAS_GIF etc.) are already safe.
 */

// ─── Local project GIFs (safe — served from /public/) ──────────────────────
export const TRENDS_ATLAS_GIF = '/trends_atlas.gif';
export const SIGMA_AI_GIF = '/sigma_ai.gif';
export const SIGMA_AI_MOTION_GIF = '/sigma_ai_motion.gif';
export const QUEST_FOR_HOPE_GIF = '/quest_for_hope.gif';
export const POWER_CLAIMS_GIF = '/power_claims.gif';
export const POWER_CLAIMS_IMAGES_GIF = '/power_claims_images.gif';
export const LEOPARDS_GIF = '/leopards.gif';
export const ROBLOX_GAME_GIF = '/roblox_game.gif';
export const SONGAI_GIF = '/songai.gif';
export const FORVIA_GIF = '/Forvia.gif';

// ─── External showcase GIFs (motionsites.ai CDN) ───────────────────────────
// NOTE: If these start 404-ing, rebuild the array from the motionsites.ai
// website or replace with locally downloaded copies.
export const EXTERNAL_IMAGES = [
  SIGMA_AI_MOTION_GIF,
  FORVIA_GIF,
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  POWER_CLAIMS_IMAGES_GIF,
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  POWER_CLAIMS_IMAGES_GIF,
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

// ─── Composed marquee rows ──────────────────────────────────────────────────

export const ROW1_IMAGES: string[] = [
  TRENDS_ATLAS_GIF,
  QUEST_FOR_HOPE_GIF,
  LEOPARDS_GIF,
  ...EXTERNAL_IMAGES.slice(0, 4),
  SIGMA_AI_GIF,
  POWER_CLAIMS_GIF,
  ...EXTERNAL_IMAGES.slice(4, 10),
];

export const ROW2_IMAGES: string[] = [
  SIGMA_AI_GIF,
  SONGAI_GIF,
  ROBLOX_GAME_GIF,
  ...EXTERNAL_IMAGES.slice(11, 13),
  POWER_CLAIMS_GIF,
  QUEST_FOR_HOPE_GIF,
  ...EXTERNAL_IMAGES.slice(13, 15),
  TRENDS_ATLAS_GIF,
  ...EXTERNAL_IMAGES.slice(15),
];

// Triple-duplicate each row for a seamless CSS marquee loop.
export const ROW1_TRIPLE: string[] = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
export const ROW2_TRIPLE: string[] = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];
