import { Circle, Trash, CheckCircle } from "phosphor-react"
import { Card } from "./card"

export function ListItem(props:any){
return( 
   
   
   <li> 
        
        <Card className={props.item.done?"done item": "item"}> 
        
        <button onClick={()=>{props.onDone(props.item)}}> {props.item.done ? <CheckCircle /> : <Circle />} </button>

        {props.item.text}
        
        <div>
        
        <button onClick={()=>{props.onItemDeleted(props.item)}}> <Trash /> </button>
       
        </div>
       </Card>
       
     </li>
     )
}
     