import styled from 'styled-components';
import { FiChevronRight, FiArrowRight} from 'react-icons/fi';
import { css } from 'styled-components';

export const HeaderContainer = styled.header`
height: 100vh;
background:rgba(0, 0, 0, 1);
position: relative;
`

export const VideoBackground = styled.video`
height: 100%;
width: 100%;
object-fit: cover;
`

export const HeaderContent = styled.div`
height: calc(100% - 80px);
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
color: white;
position: absolute;
width: 100%;
top:0;
left: 0;
z-index: 1;

`

export const HeaderH1 = styled.h1`
margin-bottom: 1.7rem;
text-transform: capitalize;
text-align: center;
font-size: clamp(1.8rem, 2.3vw, 2.8rem);
`

export const HeaderP = styled.p`
margin-bottom: 1.5rem;
font-size: clamp(1.2rem, 2vw, 1.5rem);
text-align: center;
line-height: 1.5;
max-width: 600px;
`

const IconCss = css`
margin-left: 5px;
font-size: 1.6rem;
`

export const ArrowRight = styled(FiArrowRight)`
${IconCss};
`

export const ChevronRight = styled(FiChevronRight)`
${IconCss}
`