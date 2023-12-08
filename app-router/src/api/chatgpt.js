import axios from "axios";

// export interface PostData {
//   message: string | null;
//   sessionId: string | null;
// }

/**
 * 自作のchatGPTのAPIを呼び出す
 * @param {postData} data APIに渡す情報
 */
export const postChat = async ({ data }) => {
  const response = await axios.post(
    "https://xxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/api/chat",
    data
  );
  return response;
};
