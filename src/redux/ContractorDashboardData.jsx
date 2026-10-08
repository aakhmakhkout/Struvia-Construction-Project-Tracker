import { useSelector } from "react-redux";
import { userData } from "../data/usersData";

export default function ContractorDashboardData() {
  const { projectsdata, navbarProjectId } = useSelector(
    (state) => state.projects,
  );
  const role = useSelector((state) => state.auth.role);
  const current_user = userData.find((items) => {
    return items.role === role;
  });

  const cw_project =
    projectsdata.find((items) => {
      return items.client === current_user.email;
    }) || {};

  const filteredData =
    projectsdata.length > 0 && navbarProjectId !== "empty"
      ? projectsdata.find((items) => {
          return items.projectid === navbarProjectId;
        })
      : {};

  const contratorPageData = role === "Contractor" ? filteredData : cw_project;

  return contratorPageData;
}
