import { WhatsApp } from "../icons";

const WhatsAppFixed: React.FC = () => {
  return (
    <>
      <div>
        <WhatsApp style={{ color: "green" }} width={50} height={50} />
      </div>
      <style jsx>{`
        div {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
        }
      `}</style>
    </>
  );
};
export default WhatsAppFixed;
