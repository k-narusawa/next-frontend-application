import classNames from "classnames";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./index.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  register?: UseFormRegisterReturn;
  error?: string;
};

const Input = ({ label, register, error }: Props) => {
  return (
    <div className={classNames(styles["input-component"])}>
      <label>{label}</label>
      <br />
      <input {...register} type="text" />
      <p className={classNames(styles["error-message"])}>{error}</p>
    </div>
  );
};

export default Input;
