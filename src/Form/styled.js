import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

export const Header = styled.h1`
    text-align: center;
    color: hsl(51, 100%, 45%);
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
    background-color:#ffd700;
    border: none;
    transition: 1s;

    &:hover {
        background-color:hsl(51, 100%, 60%);
    }
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    width: 70%;
    max-width: 470px;
    font-weight: 700;
    background-color:hsl(0, 0%, 90%);
    border: 3px solid #ffd700;
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