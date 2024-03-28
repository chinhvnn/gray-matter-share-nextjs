'use server'

import { TOKEN_KEY } from '@/common/constants/constant'
import { cookie } from '@/utils/helper'
import { cookies, headers } from 'next/headers'

export const fetchInstance = async (
  url: string,
  method: 'POST' | 'GET' | 'PUT' | 'DELETE',
  body?: any,
) => {
  const baseURL = 'http://127.0.0.1:3001/api/v1/'
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: (cookies().get(TOKEN_KEY) as any)?.value,
    },
    body: JSON.stringify(body),
  }

  return await (await fetch(baseURL + url, config)).json()
}
