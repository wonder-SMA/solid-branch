import { FC, PropsWithChildren, ReactNode } from 'react';
import './button.scss';

type ButtonProps = {
  children?: ReactNode;
  type?: string;
  onClick?: () => void;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, type = 'primary', onClick }) => {

  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
