import { useSelector } from "react-redux"
import ContractorProjects from "../components/Projects/ProjectContractor/ContractorProjects.jsx"
import ProjectsDetails from "../components/Projects/ProjectsDetails/ProjectsDetails.jsx"

const Projects = () => {
  const role = useSelector(state => state.auth.role)
  return (
    <div>
      {role === "Contractor" ?  <ContractorProjects /> : <ProjectsDetails />}
     
    </div>
  )
}

export default Projects