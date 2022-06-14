import styled from 'styled-components';

export const SuccessMessage = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const GoHomeButton = styled.button`
    padding: .1em;
    width: 6em; 
    text-decoration: none;
    background: white;
    border-radius: 100px;
    &:hover{
        cursor: pointer;
    }

    margin: 0 auto;
`;