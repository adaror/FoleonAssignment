import axios from "axios";
import { config } from "../configs/config";
import { ProjectState } from "../stores/projects.store";

interface FilterType {
  field: string;
  type: "eq" | "neq";
  value: string;
}

interface ProjectsResponseType {
  _links: Record<string, any>; // not relevant to the POC, usually i would define all the response type
  _embedded: { title: ProjectState[] };
  page_count: number;
  page_size: number;
  total_items: number;
  page: number;
  count: number;
  total: number;
}

export const getProjectList = async function (
  page: number,
  limit: number,
  filter?: FilterType
): Promise<ProjectsResponseType | undefined> {
  const projects: { data: ProjectsResponseType } = await axios.get(
    `${config.urlPrefix}v2/magazine/title?page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: config.accessToken,
      },
    }
  );
  return projects.data;
};
