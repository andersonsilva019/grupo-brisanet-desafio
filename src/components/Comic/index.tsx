import { Box, BoxProps } from "../Box";
import * as S from "./styles";

interface ComicProps extends BoxProps {
  title: string;
  imageUrl: string;
  creators: string;
}

export function Comic({  title, creators, imageUrl, ...props }: ComicProps){
  return (
    <Box {...props}>
      <img width={220} height={320} src={imageUrl}/>
      <S.ComicTitle>{title}</S.ComicTitle>
      <S.ComicCreators>{creators}</S.ComicCreators>
    </Box>
  )
}