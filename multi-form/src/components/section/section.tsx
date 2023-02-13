import React from 'react';

import { Container, TextWrapper, Title, Description } from './styles';

type SectionProps = {
    children: React.ReactNode;
    title: string;
    description: string;
}

export const Section: React.FC<SectionProps> = ({ children, title, description }) => {
    return (
        <Container>
            <TextWrapper>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TextWrapper>
            {children}
        </Container>
    )
}