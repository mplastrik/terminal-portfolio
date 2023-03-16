import { commands } from './constants'
function Help() {
    return(
        <div className="command-div">
           <p> $ help <br/> 
            
            <div>
             <ul>{commands.map(command => <li key={command.name}> {`'` + command.name + `': `  + command.description + '\n\n' } </li>)}</ul>
            </div>

           </p>
           
        </div>
    )
}

export default Help