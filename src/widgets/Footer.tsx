const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="container">
          <span>Copyright © 2021 El mercado.</span>
        </div>
      </footer>
      <style jsx>{`
        div {
          position: relative;
          padding: 1.25rem 15px;
          text-align: center;
          color: var(--color-black);
          font-weight: bold;
        }
        div::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          display: block;
          height: 3px;
          width: 100%;
          margin: 0 auto;
          background-color: var(--color-black);
        }
      `}</style>
    </>
  );
};
export default Footer;
