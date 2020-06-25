import React from 'react';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';
import { PageWrapper } from 'app/components/PageWrapper';
import { LanguageSwitch } from 'app/components/LanguageSwitch';

export function Footer() {
  return (
    <Wrapper>
      <PageWrapper>
        <LanguageSwitch />
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;
`;
