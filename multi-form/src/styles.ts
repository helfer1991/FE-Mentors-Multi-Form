import styled from 'styled-components';

export const Container = styled.div`
    background-color: #EFF5FF;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    flex-shrink: 0;
`;

export const Wrapper = styled.div`
    flex: 1;
`;

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