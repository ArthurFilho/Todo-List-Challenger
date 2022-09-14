import { ListItem } from "./Listitem"


export function List(props:any){
   return( 
   
    <ul>
        
        {props.items.map((item:any) => <ListItem key={item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted}  ></ListItem> )}
     
    </ul>
)
}