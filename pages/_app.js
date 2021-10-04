import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function MyApp({ Component, pageProps }) {
  return(<Layout>
    <ThemeProvider>
    <CssBaseline />
      <Component {...pageProps} />
      </ThemeProvider>
    </Layout>)
}

export default MyApp
