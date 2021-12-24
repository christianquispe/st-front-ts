import { PictureCard } from "../components"
import ProductList from "./ProductListss"

// HARD DATA

const dataa2 = [
  {
    id: "12dkfakd345",
    img: "afdafd",
    title: "Un cuadro bacán",
    description: "Cuadro perfecto para ambientes claros",
    price: 65,
    simbol: "S/",
  },
  {
    id: "1234sdfaf5",
    img: "afdafd",
    title: "Un cuadro bacán",
    description: "Cuadro perfecto para ambientes claros",
    price: 50,
    simbol: "S/",
  },
  {
    id: "12adkafj345",
    img: "afdafd",
    title: "Un cuadro bacán",
    description: "Cuadro perfecto para ambientes claros",
    price: 75,
    simbol: "S/",
  },
  {
    id: "12345dskdjg",
    img: "afdafd",
    title: "Un cuadro bacán",
    description: "Cuadro perfecto para ambientes claros",
    price: 45,
    simbol: "S/",
  },
  {
    id: "12345askk",
    img: "afdafd",
    title: "Un cuadro bacán",
    description: "Cuadro perfecto para ambientes claros",
    price: 65,
    simbol: "S/",
  },
  {
    id: "12345orie",
    img: "afdafd",
    title: "Un cuadro bacán",
    description: "Cuadro perfecto para ambientes claros",
    price: 50,
    simbol: "S/",
  },
  {
    id: "12345dah",
    img: "afdafd",
    title: "Un cuadro bacán",
    description: "Cuadro perfecto para ambientes claros",
    price: 75,
    simbol: "S/",
  },
  {
    id: "12345fk",
    img: "afdafd",
    title: "Un cuadro bacán",
    description: "Cuadro perfecto para ambientes claros",
    price: 45,
    simbol: "S/",
  },
]

interface ProductSectionProps {
  productsGraph: any
}

const ProductSection: React.FC<ProductSectionProps> = ({ productsGraph }) => {
  const data = productsGraph?.data?.allPictures

  return (
    <>
      <section>
        <div className="container">
          <div className="section-top">
            <span className="text-medium">Mas de 50 cuadros</span>
            <input type="text" placeholder="Buscar..." />
          </div>
          <ProductList productsData={data} />
        </div>
      </section>
      <style jsx>{`
        section {
          margin-bottom: 2rem;
        }
        .section-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }
        input {
          padding: 0.7rem 1.1rem;
          border-radius: 0.5rem;
          border: 1px solid var(--primary-border-color);
          transition: linear all 0.3s;
        }
        input:focus {
          outline: 1px solid var(--second-border-color-05);
        }
      `}</style>
    </>
  )
}
export default ProductSection
