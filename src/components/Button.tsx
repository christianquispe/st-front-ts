import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: "main" | "second";
  htmlType?: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { type = "primary", htmlType, children, ...restProps } = props;

  return (
    <>
      <button type={htmlType} {...restProps}>
        {children}
      </button>
      <style jsx>{`
        button {
          cursor: pointer;
          display: block;
          background-color: var(--${type}-bg-color);
          color: #ffffff;
          padding: 10px 15px;
          border-radius: 0.2rem;
          transition: linear 0.3s all;
          border: none;
        }
        button:hover {
          background-color: var(--second-bg-color);
          color: #eee;
          outline: 2px solid var(--second-border-color-05);
        }
      `}</style>
    </>
  );
};
export default Button;
