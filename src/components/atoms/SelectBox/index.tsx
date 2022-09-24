import classNames from "classnames";
import styles from "./index.module.scss";

type Props = {
  options: Array<string>;
};

const SelectBox = ({ options }: Props) => {
  return (
    <div className={classNames(styles["selectbox-component"])}>
      <label>
        <select>
          {options.map((item: string) => {
            return <option key={item}> {item} </option>;
          })}
        </select>
      </label>
    </div>
  );
};

export default SelectBox;
