import classNames from "classnames";
import Button from "components/atoms/Buttton";
import Input from "components/atoms/Input";
import { useForm } from "react-hook-form";
import styles from "./index.module.scss";

export type LoginFormData = {
  loginId: string;
  password: string;
};

type LoginFormProps = {
  onLogin: (loginId: string, password: string) => void;
  errorMessage?: string;
};

const LoginForm = ({ onLogin, errorMessage }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    const { loginId, password } = data;
    console.log(errors.loginId?.message);
    onLogin && onLogin(loginId, password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classNames(styles["login-form-component"])}>
        <Input
          register={register("loginId", {
            required: "ログインIDは必須項目です",
          })}
          error={errors.loginId?.message}
          label="ログインID"
        />
        <Input
          register={register("password", {
            required: "パスワードは必須項目です",
          })}
          error={errors.password?.message}
          label="パスワード"
        />
        <p className={classNames(styles["error-message"])}>{errorMessage}</p>
        <Button type="submit" size="small">
          ログイン
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
