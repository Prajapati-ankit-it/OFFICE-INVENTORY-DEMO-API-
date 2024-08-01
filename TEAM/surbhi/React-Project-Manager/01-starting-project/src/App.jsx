import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProject from "./Components/NoProject";
import ProjectSidebar from "./Components/ProjectSidebar";

function App() {
  const [projectsState, setProjectsState] =useState({
    selectedProjectId : undefined,
    projects : [],
  });

  function handleStartAddProject(){
    setProjectsState(prevState=> {
      return {
        ...prevState,
        selectedProjectId : null,
      };
    });
  }

  function handleAddProject (projectData){
    setProjectsState(prevState=>{
      const projectId = Math.random();
      const newProject ={
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects : [...prevState.projects,newProject],
        
      };
    });
  }


let content ;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject}/>;
  } else if(projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject}/>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects}
      />
      {/* <NewProject/> */}
      {/* <NoProject onStartAddProject={handleStartAddProject}/> */}
      {content}
    </main>
  );
}

export default App;
