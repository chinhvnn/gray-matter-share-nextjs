import 'server-only'

const dictionaries: any = {
  en: () => import('./en.json').then((module) => module.default),
  vn: () => import('./vi.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => dictionaries[locale]()
