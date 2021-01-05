import { getRequest } from "../../network";
import axios from "axios";

export async function getContributors() {
  const response = await axios.get(
    "https://api.github.com/repos/white-van/discussion-board/contributors",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  );
  return response.data;
}
