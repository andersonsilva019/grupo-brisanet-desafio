import { Comic } from '../../components/Comic'
import { useComics } from '../../services/marvelApi/marvelApiSerivices'
import * as S from './styles'

type CreatorSummary = {
  name: string
  role: string
}

type CreatorList = {
  items: CreatorSummary[]
}

interface Comic {
  id: number
  title: string
  creators: CreatorList
  thumbnail: {
    path: string
    extension: string
  }
}

interface UseComicsReturnTypeData {
  data: {
    results: Comic[]
  }
}

export function Home() {

  const { data, isLoading } = useComics<UseComicsReturnTypeData>()

  if (isLoading) return <p>Loading...</p>

  return (
    <S.Container>
      <h1>Projeto Front-End | Grupo Brisanet</h1>
      <S.GridContainer>
      {data?.data.results.map((comic) => (
        <Comic
          key={comic.id}
          id={comic.id}
          title={comic.title}
          imageUrl={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          creators={comic.creators.items.map((creator) => creator.name)}
        />
      ))}
      </S.GridContainer>
    </S.Container>
  ) 
}