import type { AgencySlug } from '../lib/listings'

export interface Agency {
  slug: AgencySlug
  name: string
  short: string
  initials: string
  phone: string
  phone2?: string
  whatsapp: string
  address: string
  hours: string
  mapsQuery: string
}

export const AGENCIES: Agency[] = [
  {
    slug: 'menzah',
    name: 'Immoland El Menzah',
    short: 'El Menzah',
    initials: 'IM',
    phone: '+216 29 343 143',
    phone2: '+216 29 989 893',
    whatsapp: '21629343143',
    address: 'El Menzah 6, Ariana',
    hours: 'Lun – Sam · 9h – 18h',
    mapsQuery: 'Immoland El Menzah',
  },
  {
    slug: 'marsa',
    name: 'Immoland La Marsa',
    short: 'La Marsa',
    initials: 'IM',
    phone: '+216 29 343 017',
    phone2: '+216 28 148 988',
    whatsapp: '21629343017',
    address: 'Gammarth, La Marsa',
    hours: 'Lun – Sam · 9h – 18h',
    mapsQuery: 'Immoland La Marsa',
  },
  {
    slug: 'soukra',
    name: 'Immoland La Soukra',
    short: 'La Soukra',
    initials: 'IS',
    phone: '+216 29 598 571',
    phone2: '+216 29 910 333',
    whatsapp: '21629598571',
    address: 'Chotrana 1, La Soukra',
    hours: 'Lun – Sam · 9h – 18h',
    mapsQuery: 'Immoland La Soukra',
  },
]

export const agencyBySlug = (slug: AgencySlug) => AGENCIES.find((a) => a.slug === slug)!

export const CONTACT = {
  phone: '+216 29 343 143',
  email: 'contact@immoland.tn',
}
