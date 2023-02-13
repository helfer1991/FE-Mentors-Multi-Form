import styled from "styled-components";

export const InputWrapper = styled.div<{ isLast?: boolean}>`
    display: flex;
    flex-direction: column;
    margin-bottom: ${(props) => props.isLast ? '0' : '16px'};
`;

export const Label = styled.label`
    color: #022959;
    font-size: 12px;
`;

export const Input = styled.input`
    border: 1px solid #D6D9E6;
    border-radius: 4px;
    padding: 12px 16px;

    &::placeholder {
        color: #9699AA;
        font-size: 15px;
        line-height: 17px;
    }
`;