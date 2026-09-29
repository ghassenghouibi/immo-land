/**
 * ============================================================
 *  VIDÉOS & RÉSEAUX SOCIAUX — C'EST ICI QUE VOUS AJOUTEZ VOS CONTENUS
 * ============================================================
 *
 *  1. Ouvrez le reel sur Instagram (ou TikTok / YouTube), copiez le lien
 *     de partage, ex :
 *        https://www.instagram.com/reel/C8xYz123abc/
 *        https://www.tiktok.com/@immoland/video/7351234567890123456
 *        https://www.youtube.com/watch?v=dQw4w9WgXcQ
 *
 *  2. Ajoutez une entrée dans VIDEOS ci-dessous avec ce lien dans `url`.
 *     Le site détecte automatiquement la plateforme et affiche le lecteur
 *     intégré au clic sur la vignette.
 *
 *  3. (Optionnel) `ref` = référence du bien (ex. "Ref4350a") : la vidéo
 *     apparaît alors aussi sur la fiche du bien et le bien reçoit le badge
 *     "Vidéo" dans les listes.
 *
 *  4. (Optionnel) `cover` = URL d'une image de couverture. Sans cover, le
 *     site utilise la 1ère photo du bien lié, sinon un fond dégradé.
 *
 *  Les vidéos sont affichées dans l'ordre de ce tableau (la première en
 *  premier). Les 4 premières apparaissent sur la page d'accueil.
 */

export interface VideoItem {
  /** Lien Instagram reel / post, TikTok, YouTube, ou fichier .mp4 direct */
  url: string
  /** Titre affiché sous la vignette */
  title: string
  /** Sous-titre (quartier · référence, ou "Décryptage quartier") */
  subtitle?: string
  /** Référence du bien lié (facultatif) */
  ref?: string
  /** Image de couverture (facultatif) */
  cover?: string
  /** Nombre de vues à afficher, ex. "120 K" (facultatif) */
  views?: string
  /** Format : visite | quartier | coulisses | bien-du-jour (facultatif) */
  format?: 'visite' | 'quartier' | 'coulisses' | 'bien-du-jour'
}

export const VIDEOS: VideoItem[] = [
  // ─── Reels du compte @immoland_agence_immobiliere (du plus récent au plus ancien) ───
  {
    url: 'https://www.instagram.com/reel/DdCCONMg2wL/',
    title: 'Duplex S+3 neuf avec piscine, direct promoteur',
    subtitle: 'Chotrana 1, La Soukra · Ref4335a',
    ref: 'Ref4335a',
    format: 'visite',
  },
  {
    url: 'https://www.instagram.com/reel/DcylvVJx1-A/',
    title: "Villa d'exception avec piscine et salle de cinéma",
    subtitle: 'El Menzah 9C · 4,2 MD',
    format: 'visite',
  },
  {
    url: 'https://www.instagram.com/reel/DcbJdEEAs8_/',
    title: 'Villa jumelée avec piscine, Résidence Flamant Rose',
    subtitle: 'Raoued · Ref4313a',
    ref: 'Ref4313a',
    format: 'visite',
  },
  {
    url: 'https://www.instagram.com/reel/DcL26KMMABv/',
    title: 'S+3 de prestige au dernier étage, Jardins de Carthage',
    subtitle: 'Jardins de Carthage · Ref4305a',
    ref: 'Ref4305a',
    format: 'visite',
  },
  {
    url: 'https://www.instagram.com/reel/DcEVFKAgbfH/',
    title: 'S+3 de 148 m² avec jacuzzi, Berges du Lac 2',
    subtitle: 'Les Berges du Lac 2 · Ref4303a',
    ref: 'Ref4303a',
    format: 'visite',
  },
  {
    url: 'https://www.instagram.com/reel/Dbnz0j6xqPt/',
    title: 'S+1 usage mixte, Berges du Lac 1 — 305 000 DT',
    subtitle: 'Les Berges du Lac 1 · Ref4158a',
    ref: 'Ref4158a',
    format: 'bien-du-jour',
  },
  {
    url: 'https://www.instagram.com/reel/DbVzERds4WZ/',
    title: 'S+2 de 106 m² à Sidi Salah — 225 000 DT',
    subtitle: 'Chotrana 1, La Soukra',
    format: 'visite',
  },
]

/**
 * Derniers posts Instagram (grille "Les derniers posts" de la page Studio).
 * Collez simplement les liens des posts / reels. Le libellé est facultatif.
 */
export interface PostItem {
  url: string
  label?: string
  cover?: string
}

export const INSTAGRAM_POSTS: PostItem[] = [
  { url: 'https://www.instagram.com/p/DdHEi-0jgv0/', label: "Terrain d'angle 494 m² · Franceville" },
  { url: 'https://www.instagram.com/reel/DdCCONMg2wL/', label: 'Duplex S+3 piscine · Chotrana 1' },
  { url: 'https://www.instagram.com/reel/DcylvVJx1-A/', label: "Villa d'exception · El Menzah 9C" },
  { url: 'https://www.instagram.com/p/Dcv7dECHY4m/', label: 'Local commercial 20 m² · El Menzah 8' },
  { url: 'https://www.instagram.com/p/Dcvx9i5jTlJ/', label: 'Terrain 211 m² · Raoued' },
  { url: 'https://www.instagram.com/p/DcvV3G4AN7l/', label: "Cafétéria · Jardins d'El Menzah 1" },
  { url: 'https://www.instagram.com/reel/DcbJdEEAs8_/', label: 'Villa jumelée · Flamant Rose, Raoued' },
  { url: 'https://www.instagram.com/reel/DcL26KMMABv/', label: 'S+3 prestige · Jardins de Carthage' },
  { url: 'https://www.instagram.com/reel/DcEVFKAgbfH/', label: 'S+3 · Berges du Lac 2' },
  { url: 'https://www.instagram.com/reel/Dbnz0j6xqPt/', label: 'S+1 · Berges du Lac 1' },
  { url: 'https://www.instagram.com/reel/DbVzERds4WZ/', label: 'S+2 · Sidi Salah, La Soukra' },
  { url: 'https://www.instagram.com/p/DbVbg8Il_bW/', label: 'S+2 atypique avec terrasse · El Menzah 7 bis' },
]

/**
 * Comptes et audiences affichés dans les cartes réseaux.
 * Mettez à jour `followers` quand vous voulez (texte libre).
 */
export const SOCIAL = {
  instagram: { handle: '@immoland_agence_immobiliere', url: 'https://www.instagram.com/immoland_agence_immobiliere/', followers: '49,2 K' },
  tiktok: { handle: '@immoland', url: 'https://www.tiktok.com/@immoland', followers: '[XX,X K]' },
  facebook: { handle: '@AgenceImmoLand', url: 'https://www.facebook.com/AgenceImmoLand', followers: '[XX,X K]' },
  youtube: { handle: '@Immoland805', url: 'https://www.youtube.com/@Immoland805', followers: '[X,X K]' },
}
