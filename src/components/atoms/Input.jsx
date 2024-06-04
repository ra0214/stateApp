import styled from "styled-components";

const InputStyled = styled.input`
    width: 60%;
    height: 70%;
    border-radius: 15px;
    color: blueviolet;
`;

function Input({type, placeholder, value, onChange}) {
    return(
        <InputStyled
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
    )
}

export default Input;