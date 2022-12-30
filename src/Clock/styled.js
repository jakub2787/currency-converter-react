import styled from "styled-components";

export const StyledClock = styled.span`
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    font-weight: 10px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        display: flex;
        align-self: center;
    }
`;