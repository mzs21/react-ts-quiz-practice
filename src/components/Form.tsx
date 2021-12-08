import { PropsTypeOne } from "../Interfaces";
import classes from "../styles/Form.module.css";


const Form = ({ className, children, ...rest }: PropsTypeOne) => {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      {children}
    </form>
  );
};

export default Form;
