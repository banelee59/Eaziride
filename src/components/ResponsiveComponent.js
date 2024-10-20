import React from 'react';
import styled from 'styled-components';

const ResponsiveWrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  /* Flexbox layout for child elements */
  display: flex;
  flex-wrap: wrap;

  /* Responsive column system */
  .col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    .col-6, .col-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  /* Responsive text */
  h1 {
    font-size: 2rem;
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }

  /* Responsive spacing */
  .mt-1 { margin-top: 0.25rem; }
  .mt-2 { margin-top: 0.5rem; }
  .mt-3 { margin-top: 1rem; }
  .mt-4 { margin-top: 1.5rem; }
  .mt-5 { margin-top: 3rem; }

  .mb-1 { margin-bottom: 0.25rem; }
  .mb-2 { margin-bottom: 0.5rem; }
  .mb-3 { margin-bottom: 1rem; }
  .mb-4 { margin-bottom: 1.5rem; }
  .mb-5 { margin-bottom: 3rem; }

  /* Responsive images */
  img {
    max-width: 100%;
    height: auto;
  }
`;

const ResponsiveComponent = ({ children }) => {
  return <ResponsiveWrapper>{children}</ResponsiveWrapper>;
};

export default ResponsiveComponent;
