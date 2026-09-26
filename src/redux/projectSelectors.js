import { userData } from "../data/usersData";

export const selectProject = (state) => {
  const role = state.auth.role;
  const projectList = state.projects.projectsdata;
  const current_user = userData.find((items) => {
    return items.role === role;
  });
  const cw_project = projectList.find((items) => {
    return items.client === current_user.email;
  });
  const project_data = role === "Contractor" ? projectList : cw_project;

  return project_data;
};
