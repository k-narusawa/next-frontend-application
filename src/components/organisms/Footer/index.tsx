import classNames from "classnames";
import { GitHubIcon } from "components/atoms/IconButton";
import styles from "./index.module.scss";

type Props = {
  transitionToGitHub: () => void;
};

const Footer = ({ transitionToGitHub }: Props) => {
  return (
    <>
      <footer className={classNames(styles["footer-component"])}>
        <ul className={classNames(styles["footer-list"])}>
          <li className={classNames(styles["footer-icons"])}>
            <GitHubIcon onClick={transitionToGitHub} />
            <p className={classNames(styles["copy-right"])}>(c)copy right</p>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
