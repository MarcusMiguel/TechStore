import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100%;
    min-width: 250px;
    height: 3em;
    padding: 0 8vw 0 8vw;
    display: flex;
    flex-direction: row;
    justify-items: space-between;
    align-items: center;
    box-shadow: 0px -2px 4px -1px rgb(0 0 0 / 10%), 0px -4px 5px 0px rgb(0 0 0 / 4%), 0px -1px 10px 0px rgb(0 0 0 / 2%);
`;

export const FooterTitle = styled.div`
    width: 45%;
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    font-weight: 700;

    @media(max-width: 300px) {
        font-size: .7rem;
    }
`;

export const FooterLinks = styled.div`
    width: 55%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: .8em;

    @media(max-width: 600px) {
        flex-direction: column;
        font-size: .5em;
        text-align: end;
    }

    &:hover {
        cursor: pointer;
    }

`;

export const FooterLink = styled.a`
    text-decoration: underline;
    &:hover {
        cursor: pointer;
    }
    `;
