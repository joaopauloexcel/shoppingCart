import Footer from "../utils/footer"
import Header from "../utils/header"
import { ThemeProvider } from 'styled-components'
import GlobalStyle from "../../styles/styled";
import MenuNav from "../utils/menuNav";

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>
        <MenuNav/>
          <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </>);
}

export default MyApp
