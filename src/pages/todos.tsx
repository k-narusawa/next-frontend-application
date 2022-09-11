import LayoutContainer from "containers/LayoutContainer";
import ToDoTableContainer from "containers/ToDoTableContainer";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useRecoilValue } from "recoil";
import getToDos from "services/todos/getToDos";
import { tokenSelector } from "states/selectors/tokenSelector";

type ToDoTablePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ToDoTablePage: NextPage<ToDoTablePageProps> = ({
  todos,
}: ToDoTablePageProps) => {
  return (
    <>
      <LayoutContainer>
        <ToDoTableContainer todos={todos} />
      </LayoutContainer>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const todos = await getToDos({
    accessToken:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1MzMyNzFkZC00NjE5LTRiMWUtOTMyNC02MjA0NzIwOGJiMjQiLCJleHAiOjE2NjI4NTk1NzcsImlhdCI6MTY2Mjg1Nzc3N30.jkavLFqDdOnV1mg-ua5jBm8zkcCUXeKL8eD4K9-GtyQxPU_80lc90bWQj9ky8UX2Y-_IuU2q6C4czHCQGXDwCQ",
  });
  return {
    props: {
      todos,
    },
    revalidate: 60,
  };
};
export default ToDoTablePage;
