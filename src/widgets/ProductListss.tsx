import { useQuery } from "@apollo/client"
import { PictureCard } from "../components"
import { ALL_PICTURE_QUERY } from "../graphql/resolvers"

interface ProductListProps {
  productsData: any
}

const ProductList: React.FC<ProductListProps> = (props) => {
  const { productsData } = props
  // const { data } = useQuery(ALL_PICTURE_QUERY, {
  //   variables: {},
  //   notifyOnNetworkStatusChange: true,
  // });

  const data = productsData?.pictures

  return (
    <>
      <div className="picture-list">
        {data.map((pict) => (
          <PictureCard
            key={pict._id}
            href={`/products/details/${pict._id}`}
            title={pict?.name}
            price={pict?.price}
            simbol={pict?.simbol}
            img={pict?.img}
            {...pict}
          />
        ))}
      </div>
      <style jsx>{`
        .picture-list {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          gap: 20px;
        }
      `}</style>
    </>
  )
}
export default ProductList
