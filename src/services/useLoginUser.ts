import { useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'

interface LoginUser {
  accessToken: string
}

export async function getLoginUser(email: string, password: string) {
  const response: AxiosResponse<LoginUser> = await axios.post(
    `http://localhost:3000/auth/login`,
    {
      email,
      password,
    }
  )

  return response.data
}

export const useLoginUser = (email: string, password: string) => {
  return useQuery({
    queryKey: ['loginUser'],
    queryFn: async () => await getLoginUser(email, password),
  })
}
