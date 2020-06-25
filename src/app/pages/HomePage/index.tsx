import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { PageWrapper } from 'app/components/PageWrapper';

import Captcha from 'app/components/Captcha';

const Wrapper = styled.main`
  height: auto;
  padding: 0 0 5rem;
`;

/* -------------------------------------------------------------------------- */

export function HomePage() {
  const onChange = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <PageWrapper>
        <Wrapper>
          <p>HomePage container</p>
          <br />
          <Captcha onChange={onChange} placeholder="Enter captcha" />
        </Wrapper>
      </PageWrapper>
    </>
  );
}
