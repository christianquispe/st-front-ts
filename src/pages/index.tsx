import { NextPage } from "next";
import { Nav, WhatsAppFixed } from "../components";
import { ALL_PICTURE_QUERY } from "../graphql/resolvers";
import { addApolloState, initializeApollo } from "../lib/apollo";
import { Footer, ProductSection } from "../widgets";

const Home = () => {
  return <p>Test</p>;
};

export default Home;
