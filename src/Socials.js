import { socials } from "./constants"
function Socials() {
    return(
        <div className="command-div">
           <p> $ experience <br/> 
            
           <div>
            <p>Click the names of the platforms below to open a new tab on that respective account:</p>
            <ul>{socials.map(social => <li key={social.name}> {<a href={social.url} target="_blank">{social.name}<br/><br/></a>} </li>)}</ul>
            </div>
           
           </p>
        </div>
    )
}

export default Socials