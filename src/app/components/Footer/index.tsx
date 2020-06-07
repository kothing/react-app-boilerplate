import React from 'react';
import styled from 'styled-components/macro';
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
  box-shadow: 0 1px 0 0 rgba(58, 52, 51, 0.05);
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  z-index: 2;

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
