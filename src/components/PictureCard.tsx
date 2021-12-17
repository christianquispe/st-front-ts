import { Button } from ".";

interface CardBase {
  title: string;
  img: string;
  id: string;
}

type PictureCardProps = CardBase;

const PictureCard: React.FC<PictureCardProps> = ({ title, img }) => {
  return (
    <>
      <article>
        {/* <img src={img} alt={title} /> */}
        <div className="img"></div>
        <h2>{title}</h2>
        <Button>Add to car</Button>
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

        h2 {
          margin: 0.625rem 0;
          font-size: var(--primary-article-title-size);
          font-weight: 600;
          text-transform: uppercase;
          color: var(--primary-bg-color);
        }
      `}</style>
    </>
  );
};
export default PictureCard;
