import React, { useEffect, useState } from 'react'
import { useComic } from '../../services/marvelApi/marvelApiSerivices'
import * as S from './styles'

type ModalProps = {
  trigger: React.ReactNode
  comicId: number
}

export function Modal({ trigger, comicId }: ModalProps) {

  const [isOpen, setIsOpen] = useState(false)

  const { data: comic } = useComic({
    id: comicId,
    condition: isOpen
  })

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      {React.cloneElement(trigger as React.ReactElement, {
        onClick: openModal,
      })}
      {isOpen && !!comic && (
        <S.ModalContainer isOpen={isOpen}>
          <S.Overlay onClick={closeModal} />
          <S.Content>
            <S.Header>
              <S.CloseButton onClick={closeModal}>X</S.CloseButton>
            </S.Header>
            <S.Main>
              <S.ComicImage src={comic[0]?.imageUrl} alt="" />
              <S.ComicDetails>
                <h2>{comic[0]?.title}</h2>
                <p>{comic[0]?.description}</p>
                <S.ComicCreators>
                  {comic[0]?.creators.slice(0, 4).map(creator => (
                    <S.Creator key={creator.name}>
                      {creator.role}: <br />
                      <span>{creator.name}</span>
                    </S.Creator>
                  )
                  )}
                </S.ComicCreators>
              </S.ComicDetails>
            </S.Main>
          </S.Content>
        </S.ModalContainer>
      )}
    </>
  )
}