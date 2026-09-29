/**
 * ============================================================
 *  VISITES VIRTUELLES 360° — C'EST ICI QUE VOUS LES AJOUTEZ
 * ============================================================
 *
 *  1. Copiez le lien de partage de la visite (Matterport, Kuula, Nodalview,
 *     Klapty, Cloudpano…), ex :
 *        https://my.matterport.com/show/?m=AbCdEfGh123
 *        https://kuula.co/share/collection/7abcd
 *
 *  2. Ajoutez une entrée dans VISITES avec la référence du bien (`ref`).
 *     La fiche du bien affiche alors l'onglet « Visite virtuelle » juste
 *     sous le titre, à côté des photos (et de la vidéo s'il y en a une).
 *
 *  Un bien sans vidéo ni visite virtuelle garde la galerie photos seule.
 */

export interface VisiteItem {
  /** Référence du bien, ex. "Ref4335a" */
  ref: string
  /** Lien de la visite virtuelle */
  url: string
}

export const VISITES: VisiteItem[] = [
  // { ref: 'Ref4335a', url: 'https://my.matterport.com/show/?m=REMPLACER' },
]
