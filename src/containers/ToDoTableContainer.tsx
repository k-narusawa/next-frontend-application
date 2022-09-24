import ToDoTable from "components/organisms/ToDoTable";
import { useLogin } from "hooks/useLogin";
import { todo } from "types";

type ToDoTablProps = {
  todos: Array<todo>;
};

const ToDoTableContainer = ({ todos }: ToDoTablProps) => {
  return <ToDoTable todos={todos} />;
};
export default ToDoTableContainer;
