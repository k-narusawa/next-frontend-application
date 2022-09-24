import { useFetcher } from "hooks/useFetcher";
import { todo } from "types";

export type GetToDosParams = {
  accessToken: string;
  keyword?: string;
  doneFlg?: boolean;
  limit?: number;
  offset?: number;
};

/**
 * TODO一覧取得
 * @param context APIコンテキスト
 * @param params 検索条件
 * @returns 商品一覧
 */
// eslint-disable-next-line complexity
const getToDos = async ({
  accessToken,
  keyword = "勉強",
  doneFlg,
  limit = 10,
  offset = 10,
}: GetToDosParams): Promise<todo[]> => {
  const { fetcher } = useFetcher();
  const params = new URLSearchParams();

  keyword && params.append("keyword", keyword);
  doneFlg && params.append("doneFlg", doneFlg.toString());
  offset && params.append("offset", `${offset}`);
  limit && params.append("limit", `${limit}`);

  return await fetcher(
    "http://127.0.0.1:8080",
    "/api/todos",
    accessToken,
    params
  );
};

export default getToDos;
