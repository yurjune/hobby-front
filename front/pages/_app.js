import * as React from 'react'
import { Reset } from 'styled-reset'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Reset />
      <Component {...pageProps} />
    </>
  )
}

export default App;