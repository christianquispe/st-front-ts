import { Nav, WhatsAppFixed } from "../components";
import { Footer, ProductSection } from "../widgets";

const Home = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <ProductSection />
      <WhatsAppFixed />
      <Footer />
    </>
  );
};

export default Home;
