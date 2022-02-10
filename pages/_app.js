import "styles/globals.css"
import "bootswatch/dist/cosmo/bootstrap.min.css"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
