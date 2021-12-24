import Link from "next/link"
import { Button } from "."

interface CardBase {
  title: string
  img: string
  id: string
}

type PictureCardProps = CardBase & {
  price: number
  simbol: string
  href: string
  addToCart: () => void
}

const PictureCard: React.FC<PictureCardProps> = (props) => {
  const { title, price, simbol, href, img, addToCart } = props
  return (
    <>
      <article>
        <Link href={href}>
          <a>
            <img className="img" src={img} alt={title} />
            <h2>{title}</h2>
          </a>
        </Link>
        <p className="text-medium price">{`${simbol} ${price}.00`}</p>
        <Button onClick={addToCart}>Add to cart</Button>
      </article>
      <style jsx>{`
        article {
          postition: relative;
        }

        .img {
          width: 20rem;
          height: 10rem;
          display: block;
          background-color: #dedede;
          flex-grow: 1;
        }

        h2,
        p {
          margin: 0;
          margin-bottom: 0.5rem;
        }

        h2 {
          margin-top: 1.25rem;
          font-size: var(--primary-article-title-size);
          font-weight: 600;
          text-transform: uppercase;
          color: var(--color-black);
          transition: 0.3s linear all;
          cursor: pointer;
        }

        a {
          text-decoration: none;
        }

        .price {
          color: var(--color-primary);
          font-weight: 500;
        }
      `}</style>
    </>
  )
}
export default PictureCard
