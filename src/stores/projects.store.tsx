import { create } from "zustand";
import { getProjectList } from "../api/projects.api";

export interface ProjectState {
  name: string;
  identifier: string;
  hostname: string;
  ua_code: string;
  created_on: string;
}

interface ProjectStoreState {
  projects: ProjectState[];
  pagesCount: number;
  getProjects: (page: number, limit: number) => void;
}

export const useProjectStore = create<ProjectStoreState>((set) => ({
  projects: [],
  pagesCount: 0,
  getProjects: async (page, limit) => {
    try {
      const projectList = await getProjectList(page, limit);
      if (!projectList) {
        throw new Error("Failed to retrieve projects");
      }
      set({ projects: projectList._embedded.title, pagesCount: projectList.page_count });
    } catch (e) {
      console.log("failed");
    }
  },
}));
