import classNames from 'classnames';
import styles from "./index.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = ({ label }: Props) => {
  return (
    <div className={classNames(
      styles['input-component']
    )}>
      <input type='text' />
      <label>{label}</label>
    </div>
  );
};

export default Input