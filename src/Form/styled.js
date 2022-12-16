import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

export const Header = styled.h1`
    text-align: center;
    color: ${({theme}) => theme.color.corn};
`;

export const Fieldset = styled.fieldset`
    border: none;
    padding: 30px;
    margin: 20px;
`;

export const Button = styled.button`
    border-radius: 10px;
    padding: 10px;
    font-weight: 700;
    width: 100%;
    background-color:${({theme}) => theme.color.gold};
    border: none;
    transition: 1s;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    width: 70%;
    max-width: 470px;
    font-weight: 700;
    background-color: ${({theme}) => theme.color.mercury};
    border: 3px solid ${({theme}) => theme.color.gold};
    outline: none;   
`;

export const Label = styled.label`
    font-weight: 700;
`;

export const LabelText = styled.span`
    max-width: 30%;
    width: 300px;
    display: inline-block;
`;

export const Select = styled.select`
    padding: 10px;
    border-radius: 5px;
    width: 70%;
    max-width: 470px;
    font-weight: 700;
    background-color: ${({theme}) => theme.color.mercury};
    border: 3px solid ${({theme}) => theme.color.gold};
    outline: none;   
`;