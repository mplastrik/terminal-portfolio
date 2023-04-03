import { projects } from "./constants"


function Projects() {
    return(
        <div className="command-div">
           <p> $ projects <br/> 
           <div>
            <ul>{projects.map(project => <li key={project.name}> {(
                <p>
                    {project.name + ':\n' + project.description + '\n'}
                    <a href={project.githubRepoUrl} target="_blank">Github Repo: {project.githubRepoUrl}</a>
                    <a href={project.deployedUrl} target="_blank">Deployed Project: {project.deployedUrl}</a>
                </p>
                )} </li>)}</ul>
            </div>
           
           </p>
        </div>
    )
}

export default Projects