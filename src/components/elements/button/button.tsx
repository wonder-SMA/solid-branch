import { FC, PropsWithChildren, ReactNode } from 'react';
import './button.scss';

type ButtonProps = {
  children?: ReactNode;
  onClick: () => void;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, onClick }) => {

  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
