import React from 'react';
import { Helmet } from 'react-helmet-async';

import { PageWrapper } from 'app/components/PageWrapper';
import Captcha from 'app/components/Captcha';

/* -------------------------------------------------------------------------- */

export function HomePage() {
  const onChange = (value) => {
    console.log(value);
  };
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <PageWrapper>
        <p>HomePage container</p>
        <br />
        <Captcha onChange={onChange} placeholder="Enter captcha" />
      </PageWrapper>
    </>
  );
}
