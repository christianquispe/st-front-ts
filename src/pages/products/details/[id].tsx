import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { ALL_PICTURE_QUERY, GET_PICTURE } from "../../../graphql/resolvers"
import { addApolloState, initializeApollo } from "../../../lib/apollo"

interface DetailsPictureInterface {
  pictureDetail: {
    data: any
  }
}

const DetailsPicture: React.FC<DetailsPictureInterface> = (props) => {
  const { pictureDetail } = props

  return <section>{pictureDetail?.data?.getPicture?.name}</section>
}

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo()
  const res = await apolloClient.query({
    query: ALL_PICTURE_QUERY,
    variables: {},
  })

  const paths = res?.data?.allPictures?.pictures?.map((pict) => ({
    params: { id: pict._id },
  }))

  return { paths: paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx
  const apolloClient = initializeApollo()

  const res = await apolloClient.query({
    query: GET_PICTURE,
    variables: { id: params?.id },
    "fetch-policy": "no-cache",
  })

  return addApolloState(apolloClient, {
    props: {
      pictureDetail: res,
    },
    revalidate: 1,
  })
}

export default DetailsPicture
