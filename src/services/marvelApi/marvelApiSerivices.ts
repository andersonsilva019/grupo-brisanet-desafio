import axios from 'axios'
import md5 from 'md5'
import { useQuery } from '@tanstack/react-query'

const apiKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY

const timestamp = new Date().getTime()

const hash = md5(`${timestamp}${import.meta.env.VITE_MARVEL_PRIVATE_KEY}${import.meta.env.VITE_MARVEL_PUBLIC_KEY}`)

const http = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public`,
})

const getComics = async () => { 
  const response = await http.get(`/comics?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`)
  return response.data
}

export function useComics<T>(){
  return useQuery<T>({
    queryKey: ['comics'],
    queryFn: getComics,
  })
}


