import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-basis: 700px;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 10px;
    border: 2px solid ${({ theme }) => theme.color.gray};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.concrete};
`;