import { technologies } from "./constants"
function Technologies() {
    return(
        <div className="command-div">
           <p> $ technologies <br/> 
            
           <div>
            <ul>{technologies.map(technology => <li key={technology}> {technology} </li>)}</ul>
            </div>
           
           </p>
        </div>
    )
}

export default Technologies