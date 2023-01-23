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

export interface Comic {
  id: number
  title: string
  description: string
  creators: string
  imageUrl: string
}

export interface ComicDetails {
  id: number
  title: string
  description: string
  creators: {
    name: string
    role: string
  }[]
  imageUrl: string
}
