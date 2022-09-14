import { PlusCircle } from "phosphor-react";
import { useState } from "react";

import "../todo.css"

export function TodoForm({onAddItem}:any){

    const [text, setText] = useState("");


    function handleChange(event:any){
    
        let word = event.target.value;

        setText(word);
        
    }
    function add(event:any){
     if(text){   
        event.preventDefault();
        onAddItem(text);
        setText("");
        } 
    }

return(
    <form>
        <input className="ipt1" placeholder="Adicione uma nova tarefa" onChange={handleChange} type="text" value={text} />

        <button className="btn1" onClick={add}>
            Criar
            <PlusCircle size={24} />
        </button>
    </form>
)

}