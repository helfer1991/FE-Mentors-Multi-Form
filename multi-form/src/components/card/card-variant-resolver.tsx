import React from 'react';

import { CardVariantA } from './card-variant-a';

export type CardProps = {
    illustration: string;
    title: string;
    subscription: string;
}

type CardVariantProps = {
    variant: 'A' | 'B';
    cardProps: CardProps;
}

export const Card: React.FC<CardVariantProps> = ({ variant, cardProps }) => {
    return variant === 'A' ? <CardVariantA {...cardProps} /> : <p>cenas</p>;
}