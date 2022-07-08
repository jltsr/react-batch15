
import './App.css';
import CartList from './View/CartListRedux'
import CartToolkit from './View/CartToolkit';
import RegionView from './ViewApi/RegionView';
import CountryView from './ViewApi/CountryView';
import LocationView from './ViewApi/LocationView';
import DepartmentView from './ViewApi/DepartmentView';
import JobView from './ViewApi/JobView'
import DependentView from './ViewApi/DependentView'
import EmployeeView from './ViewApi/EmployeeView'
import ProjectView from './ViewApi/ProjectView'
import ProjectAssignmentView from './ViewApi/ProjectAssignmentView'
function App() {
  return (
    <div>
      <RegionView/>
      <CountryView/>
      <LocationView/>
      <DepartmentView/>
      <JobView/>
      <DependentView/>
      <EmployeeView/>
      <ProjectView/>
      <ProjectAssignmentView/>
    </div>
  );
}

export default App;
