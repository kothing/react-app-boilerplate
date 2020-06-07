import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

export function Logo() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t(translations.headerTranslation.slogan())}</Title>
      <Description>{t(translations.headerTranslation.description())}</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: rgba(58, 52, 51, 1);
  font-weight: bold;
  margin-right: 1rem;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: rgba(58, 52, 51, 1);
  font-weight: normal;
`;
