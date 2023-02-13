import React from 'react';

import { Section } from '../../components/section';
import { Card } from '../../components/card';
import arcadeIllustration from '../../assets/images/icon-arcade.svg';
import advancedIllustration from '../../assets/images/icon-advanced.svg';
import proIllustration from '../../assets/images/icon-pro.svg';

import { Container } from './styles';

const CardsData = [
    {
        illustration: arcadeIllustration,
        title: 'Arcade',
        subscription: '$9/mo',
    },
    {
        illustration: advancedIllustration,
        title: 'Advanced',
        subscription: '$12/mo',
    },
    {
        illustration: proIllustration,
        title: 'Pro',
        subscription: '$15/mo',
    }
];

export const SecondPage: React.FC = () => {
    return (
        <Section title="Select your plan" description="You have the option of monthly or yearly billing">
            <Container>
                {CardsData.map((data, index) => <Card variant='A' cardProps={data} key={`${data.title}`} />)}
            </Container>
        </Section>
    )
}