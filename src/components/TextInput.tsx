import { PropsTypeThree } from "../Interfaces";
import classes from "../styles/TextInput.module.css";

export default function TextInput({ icon, ...rest }: PropsTypeThree) {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
