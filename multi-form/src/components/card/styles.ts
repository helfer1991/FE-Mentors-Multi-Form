import styled from "styled-components";

type Selected = {
    isSelected?: boolean;
}

export const Container = styled.div<Selected>`
    align-items: center;
    display: flex;
    gap: 14px;
    border: 1px solid ${(props) => props.isSelected ? '#483EFF' : '#D6D9E6'};
    border-radius: 8px;
    padding: 14px 0 18px 16px;
`;

export const Image = styled.img`
    height: 40px;
    width: 40px;
`;

export const Title = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    margin: 0 0 6px 0;
`;

export const Subscription = styled.p`
    margin: 0;
    color: #9699AA;
    line-height: 20px;
    font-size: 14px;
`;