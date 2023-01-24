import { styled } from "../../styles";
import { Box } from "../Box";

export const Container = styled('div', {
  width: '100%',
  height: '100%',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Main = styled(Box, {
  width: '75px',
  height: '75px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})