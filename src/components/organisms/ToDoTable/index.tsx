import classNames from "classnames";
import { todo } from "types";
import styles from "./index.module.scss";

type ToDoTableProps = {
  todos: Array<todo>;
};

const ToDoTable = ({ todos }: ToDoTableProps) => {
  // TODO コンテナコンポーネント内でメモ化させる

  const convertToDate = (dt: string) => {
    const date = new Date(dt);
    return new Intl.DateTimeFormat("ja-jp", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  };
  return (
    <div className={classNames(styles["todo-table-component"])}>
      <table>
        <thead>
          <tr>
            <th>TODO</th>
            <th>期限</th>
            <th>優先度</th>
            <th>ステータス</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo: todo) => {
            return (
              <>
                <tr>
                  <td className={classNames(styles["todo-cell"])}>
                    {todo.todo}
                  </td>
                  <td className={classNames(styles["time-limit-cell"])}>
                    {convertToDate(todo.timeLimit)}
                  </td>
                  <td className={classNames(styles["priority-cell"])}>
                    {todo.priority}
                  </td>
                  <td className={classNames(styles["status-cell"])}>
                    {todo.doneFlg ? "完了" : "未完了"}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoTable;
