import { PropsTypeTwo } from "../Interfaces";

const Checkbox = ({ className, text, ...rest }: PropsTypeTwo) => {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
};

export default Checkbox;
