import { NextPage } from "next"
import { Nav, WhatsAppFixed } from "../../components"
import { ALL_PICTURE_QUERY } from "../../graphql/resolvers"
import { addApolloState, initializeApollo } from "../../lib/apollo"
import { Footer, ProductSection } from "../../widgets"

interface HomeProps {
  resPictures: {
    data: any[]
    loading: boolean
    networkStatus: number
  }
  __APOLLO_STATE__: any
}

const Home: NextPage<HomeProps> = (props) => {
  const { resPictures } = props

  return (
    <>
      <header>
        <Nav />
      </header>
      <ProductSection productsGraph={resPictures} />
      <WhatsAppFixed />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const res = await apolloClient.query({
    query: ALL_PICTURE_QUERY,
    variables: {},
    "fetch-policy": "no-cache",
  })

  return addApolloState(apolloClient, {
    props: {
      resPictures: res,
    },
    revalidate: 1,
  })
}

export default Home
