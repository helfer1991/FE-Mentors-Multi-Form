import React from 'react';

import type { CardProps } from './card-variant-resolver';

import { Container, Image, Title, Subscription } from './styles';

export const CardVariantA: React.FC<CardProps> = ({ illustration, title, subscription }) => {
    return (
        <Container isSelected={false}>
            <Image src={illustration} alt="card-illustration" />
            <div>
                <Title>{title}</Title>
                <Subscription>{subscription}</Subscription>
            </div>
        </Container>
    )
}