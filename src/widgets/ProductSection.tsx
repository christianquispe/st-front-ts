import { PictureCard } from "../components";

const ProductSection: React.FC = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="section-top">
            <span className="text-medium">Mas de 50 cuadros</span>
            <input type="text" placeholder="Buscar..." />
          </div>
          <div className="picture-list">
            <PictureCard id="12345" img="dfd" title="Un cuadro bacán" />
            <PictureCard id="12345" img="dfd" title="Un cuadro bacán" />
            <PictureCard id="12345" img="dfd" title="Un cuadro bacán" />
            <PictureCard id="12345" img="dfd" title="Un cuadro bacán" />
            <PictureCard id="12345" img="dfd" title="Un cuadro bacán" />
            <PictureCard id="12345" img="dfd" title="Un cuadro bacán" />
            <PictureCard id="12345" img="dfd" title="Un cuadro bacán" />
          </div>
        </div>
      </section>
      <style jsx>{`
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
        .picture-list {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          gap: 20px;
        }
      `}</style>
    </>
  );
};
export default ProductSection;
