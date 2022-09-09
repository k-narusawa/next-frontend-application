export type token = {
  accessToken: string;
  refreshToken: string;
};

export type error = {
  status: string;
  message: string;
  errorCode: string;
};

export type todo = {
  todoId: number;
  userid: string;
  todo: string;
  timeLimit: string;
  priority: "HIGH" | "MIDDLE" | "LOW"
  doneFlg: boolean;
  createdAt: string;
  updatedAt: string;
}
