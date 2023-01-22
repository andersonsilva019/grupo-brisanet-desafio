import { Box } from "../Box";
import * as S from "./styles";

type ComicProps = {
  id: number;
  title: string;
  imageUrl: string;
  creators: string[]
}

export function Comic({ id, title, creators, imageUrl }: ComicProps){
  return (
    <Box>
      <img width={220} height={320} src={imageUrl}/>
      <S.ComicTitle>{title}</S.ComicTitle>
      <S.ComicCreators>{creators.slice(0,2).join(', ')}</S.ComicCreators>
    </Box>
  )
}