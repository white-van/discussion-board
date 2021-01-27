import axios from "axios";

export interface ContributorProps {
  login: string;
  avatar_url: string;
  html_url: string;
}

export async function getContributors(): Promise<ContributorProps[]> {
  const response = await axios.get<ContributorProps[]>(
    "https://api.github.com/repos/white-van/discussion-board/contributors",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  );
  return response.data;
}
