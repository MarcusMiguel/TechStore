import styled from 'styled-components';

export const ProductListContainer = styled.div`
    padding: 4em 8vw 4em 8vw;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);

    @media(max-width: 599px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media(min-width: 600px) and (max-width: 1100px){
        grid-template-columns: repeat(2, 1fr);
    }

`;