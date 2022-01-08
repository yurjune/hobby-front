import * as React from 'react';
import Head from 'next/head';
import { Reset } from 'styled-reset';
import { SWRConfig } from 'swr';

const App = ({ Component, pageProps }) => {
  return (<>
    <Reset />
    <SWRConfig 
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  </>);
}

export default App;