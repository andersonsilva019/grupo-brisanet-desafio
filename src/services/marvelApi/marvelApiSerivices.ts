import axios from 'axios'
import md5 from 'md5'
import { useQuery } from '@tanstack/react-query'

const apiKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY

const timestamp = new Date().getTime()

const hash = md5(`${timestamp}${import.meta.env.VITE_MARVEL_PRIVATE_KEY}${import.meta.env.VITE_MARVEL_PUBLIC_KEY}`)

const http = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public`,
})

export interface UseComicsReturnTypeData {
  data: {
    results: {
      id: number
      title: string
      description: string
      creators: {
        items:{
          name: string
          role: string
        }
      }
      thumbnail: {
        path: string
        extension: string
      }
    }[]
  }
}

interface Comic {
  id: number
  title: string
  description: string
  creators: string
  imageUrl: string
}

interface ComicDetails {
  id: number
  title: string
  description: string
  creators: {
    name: string
    role: string
  }[]
  imageUrl: string
}

const getComics = async () => { 
  const response = await http.get(`/comics?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`)
  
  const comics = response.data.data.results.map((comic: any) => ({
    id: comic.id,
    title: comic.title,
    creators: comic.creators.items.map((creator: any) => creator.name).join(', '),
    imageUrl: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
  }))

  return comics as Omit<Comic, 'description'>[]
}

const getComicById = async (id: number) => {
  const response = await http.get(`/comics/${id}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`)
  
  const comic = response.data.data.results.map((comic: any) => ({
    id: comic.id,
    title: comic.title,
    description: comic.description,
    creators: comic.creators.items.map((creator: any) => ({
      name: creator.name,
      role: creator.role
    })),
    imageUrl: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
  }))

  return comic as ComicDetails[]
}

export function useComics(){
  return useQuery({
    queryKey: ['comics'],
    queryFn: getComics,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours 
    refetchOnWindowFocus: false,
  })
}

type UseComicParams = {
  id: number
  condition?: boolean
}

export function useComic({ id, condition = true }: UseComicParams){
  return useQuery({
    queryKey: ['comic', id],
    queryFn: async () => getComicById(id),
    enabled: condition,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours 
  })
}