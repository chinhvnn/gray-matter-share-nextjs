import Cookies from 'universal-cookie'

export const cookie = new Cookies()

export const convertCookieFromStringToJson = (cookie: string) => {
  const result = {} as any

  const cookieArr = cookie.split('; ')

  for (let i in cookieArr) {
    const cur = cookieArr[i].split('=')
    result[cur[0]] = cur[1]
  }

  return result
}
