import { useSelector } from "react-redux";
import { userData } from "../data/usersData";

export default function ContractorDashboardData() {
  const { projectsdata, navbarProjectId } = useSelector(
    (state) => state.projects,
  );
  console.log(projectsdata, navbarProjectId);
  const role = useSelector((state) => state.auth.role);
  const current_user = userData.find((items) => {
    return items.role === role;
  });
  // console.log(role, current_user);

  const cw_project =
    projectsdata.find((items) => {
      return items.client === current_user.email;
    }) || {};

  // console.log(cw_project);

  const filteredData =
    projectsdata.length > 0 && navbarProjectId !== "empty"
      ? projectsdata.find((items) => {
          return items.projectid === navbarProjectId;
        })
      : {};

  console.log(filteredData);
  const contratorPageData = role === "Contractor" ? filteredData : cw_project;

  return contratorPageData;
}
