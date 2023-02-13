import React from 'react';

import { FooterStyled, PreviousStepButton, NextStepButton } from './styles';

export const Footer: React.FC = () => {
    return (
        <FooterStyled>
            <PreviousStepButton>Go Back</PreviousStepButton>
            <NextStepButton type="submit">Next Step</NextStepButton>
        </FooterStyled>
    );
}