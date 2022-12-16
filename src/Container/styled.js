import styled from "styled-components";

export const Main = styled.main`
    background-color: ${({theme}) => theme.color.concrete};
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    border: 2px solid ${({theme}) => theme.color.gray};
`;