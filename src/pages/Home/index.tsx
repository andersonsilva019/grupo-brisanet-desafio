import { Comic } from '../../components/Comic'
import { Modal } from '../../components/Modal'
import { useComics } from '../../services/marvelApi/marvelApiSerivices'
import * as S from './styles'

export function Home() {

  const { data } = useComics()

  return (
    <S.Container>
      <h1>Projeto Front-End | Grupo Brisanet</h1>
      <S.GridContainer>
        {data?.map((comic) => (
          <Modal
            key={comic.id}
            comicId={comic.id}
            trigger={
              <Comic
                title={comic.title}
                imageUrl={comic.imageUrl}
                creators={comic.creators as string}
              />
            }
          />
        ))}
      </S.GridContainer> 
    </S.Container>
  )
}