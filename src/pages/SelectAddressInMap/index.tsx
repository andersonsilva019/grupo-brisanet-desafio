import { useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Map } from "../../components/Map";
import type { ComicDetails } from "../../types";

import * as S from './styles'

export function SelectAddressInMap() {

  const [address, setAddress] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate();
  const queryClient = useQueryClient()
  const { id: comicId } = useParams()

  const data = queryClient.getQueryData<ComicDetails[]>(['comic', Number(comicId)])

  if (!data) {
    navigate('/')
    return null
  }

  function saveAddressFromGoogleMaps(address: string) {
    setAddress(address)
  }

  function onSubmit() {
    if (!data) {
      return
    }

    alert(`Comic com o título ${data[0].title} foi enviado para o endereço ${address}`)

    navigate('/')
  }

  useEffect(() => {
    if (address) {
      containerRef.current?.scroll({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [address])

  return (
    <>
      <Map saveAddressFromGoogleMaps={saveAddressFromGoogleMaps} />
      {data && (
        <S.Container ref={containerRef}>
          <img src={data[0].imageUrl} alt="" />
          <h3>{data[0].title}</h3>
          <p>{data[0].description}</p>

          <S.Divider />

          <strong>
            {address && (
              <>
                Endereço selecionado: <br />
                <S.Address>{address}</S.Address>
              </>
            )}
          </strong>

          <S.Button variant="secondary" onClick={() => navigate('/')}>Voltar</S.Button>
          <S.Button onClick={onSubmit}>Enviar comic</S.Button>
        </S.Container>)}
    </>
  )
}