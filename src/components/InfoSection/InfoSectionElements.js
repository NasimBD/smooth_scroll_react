import styled from 'styled-components';

export const InfoContainer = styled.div`
background-color: ${({lightBg}) => lightBg ? '#fff' : 'hsl(223, 36%, 10%)'};
@media screen and (max-width:576px){
    padding: 1rem 0;
}

@media screen and (min-width:576px){
    padding: 4rem 0;
}
`

export const InfoWrapper = styled.div`
/* me. for flex way*/
display: flex;
min-height: 100vh;
@media screen and (max-width:576px){
    flex-flow: ${({imgStart}) => imgStart ? `column-reverse wrap` : `column wrap`};
    gap:3rem;
}
@media screen and (min-width:576px){
    flex-flow: ${({imgStart}) => imgStart ? `row-reverse wrap` : `row wrap`};
    justify-content: space-between;
    align-items: center;
}


/* Ref. for grid way*/
// display: grid;
// grid-auto-columns: minmax(auto, 1fr);
// align-items: center:

// @media screen and (max-width:576px){
//     grid-template-areas: ${({imgStart}) => imgStart ? `"col2 col2" "col1 col1"` : `"col1 col1" "col2 col2"`};
// }
// @media screen and (min-width:576px){
//     grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};
// }
`

export const InfoContent = styled.div`
padding: 1rem;
max-width: 600px;
/* me. for flex way*/
@media screen and (min-width:576px){
    flex: 1 1 50%;
}

/* Ref. for grid way*/
grid-area: col1;
`

export const TopLine = styled.h4`
margin-bottom: 1rem;
font-size: 1.2rem;
text-transform: uppercase;
color: hsl(155, 93%, 38%);
letter-spacing: 1px;
`

export const Heading = styled.h2`
margin-bottom: 1.5rem;
font-size: clamp(2rem, 2.5vw, 3rem);
line-height: 1.3;
color: ${({lightText}) => lightText ? '#f7f8fa' : '#010606'};
`

export const Subtitle = styled.p`
margin-bottom: 2rem;
font-size: 1.1rem;
line-height: 1.5;
max-width: 500px;
color: ${({lightText}) => lightText ? '#f7f8fa' : '#010606'};
`

export const ImgWrapper = styled.div`
padding: 1rem;
/* me. for flex way*/
// order: ${({imgStart}) => imgStart ? '-1' : 0};
@media screen and (min-width:576px){
    flex: 0 1 50%;
}

/* Ref. for grid way*/
// grid-area: col2;

img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`