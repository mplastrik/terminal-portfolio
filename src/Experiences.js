import { experiences } from "./constants"
function Experiences() {
    return(
        <div className="command-div">
           <p> $ experience <br/> 
            
           <div>
            <ul>{experiences.map(experience => <li key={experience.company}> {experience.company + ', ' + experience.title + '\n\n' + experience.details + '\n\n\n'} </li>)}</ul>
            </div>
           
           </p>
        </div>
    )
}

export default Experiences