import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PageWrapper } from 'app/components/PageWrapper';
/* -------------------------------------------------------------------------- */

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <PageWrapper>
        <div>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </div>
        <p>Page not found.</p>
        <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
      </PageWrapper>
    </>
  );
}
