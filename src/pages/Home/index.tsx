import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
import { Comic } from '../../components/Comic'
import { ErrorComponent } from '../../components/Errors'
import { Modal } from '../../components/Modal'
import { Spinner } from '../../components/Spinner'
import { useComics } from '../../services/marvelApi/marvelApiSerivices'
import * as S from './styles'
import { useState } from 'react';

export function Home() {
  const [currentPage, setCurrentPage] = useState(1)

  const {
    data,
    isLoading,
    isError,
    isSuccess,
  } = useComics({ page: currentPage })

  function handlePageChange(page: number) {
    setCurrentPage(page)
  }

  return (
    <S.Container>
      <h1>Comics</h1>
      {isLoading && !isError && <Spinner color="#00875F" />}

      {isError && !isLoading && !isSuccess && <ErrorComponent />}

      {!isError && !isLoading && isSuccess && (
        <S.Content>
          <S.GridContainer>
            {data?.comics.map((comic) => (
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
          <S.PaginationContainer>
            <Pagination
              pageSize={20}
              total={data.totalOfComics}
              showSizeChanger
              onChange={handlePageChange}
              current={currentPage}
              locale={{ items_per_page: 'Comics por página' }}
            />
          </S.PaginationContainer>
        </S.Content>
      )}
    </S.Container>
  )
}