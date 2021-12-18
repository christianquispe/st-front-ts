import { useRouter } from "next/router";

const DetailsPicture: React.FC = () => {
  const router = useRouter();

  if (!router.isReady) {
    return <p>Loading</p>;
  }

  return <section>{router.query.id}</section>;
};
export default DetailsPicture;
