import { PropsTypeOne } from "../Interfaces";
import classes from "../styles/Button.module.css";


const Button = ({ className, children }: PropsTypeOne) => {
  return <div className={`${classes.button} ${className}`}>{children}</div>;
};

export default Button;
