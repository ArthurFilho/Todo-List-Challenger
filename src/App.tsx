import { useEffect, useState } from "react";
import { List } from "./components/list";
import { TodoForm } from "./components/TodoForm"
import { Item } from "./components/item"

import Logo from "./assets/Logo.svg"

import "./todo.css"
import { ClipboardText } from "phosphor-react";


interface ItemType {
    id: number;
    text: string;
    done: boolean;
  }

export function App() {

    const [items, setItems] = useState<ItemType[]>([]);

useEffect( () => {
    let savedItems = JSON.parse(localStorage.getItem("savedItems")!)
    if(savedItems){
    setItems(savedItems);
    }
}, [])

  function savedItemsStorage() {
localStorage.setItem("savedItems", JSON.stringify(items))
}

function Add(text: string) {

    let item = new Item(text);

    setItems(([...items, item]))

    savedItemsStorage()
}

function onItemDeleted(item:any) {

let fillteredItems = items.filter(it => it.id !== item.id)
setItems (fillteredItems);

savedItemsStorage()
}


function onDone(item:ItemType) {

let updatedItems = items.map((it:ItemType)=>{
    if(it.id === item.id){
        it.done = !it.done;
    }
return it;
})
setItems(updatedItems);
savedItemsStorage()
}

let updatedItems = items.filter((item:ItemType) => item.done == true)

let markItems =  items.length;

return(
    
    <div>
    
    <div className="container">

        <h1 className="title"> <img src={Logo} alt="" /> </h1>

        <TodoForm className="todoform" onAddItem={Add} > </TodoForm>

    
    </div>
    
        { 
        markItems ?
        <div>
        <div className="assignment">  
            <div className="listTask">
                <p className="taskCreated"> Tarefas criadas <strong> {items.length}</strong> </p>
                <p className="taskCompleted"> Concluidas <strong> {updatedItems.length} de {items.length} </strong> </p>
            </div>

            <hr />
        </div>
      
        

        <List onDone={onDone} onItemDeleted={onItemDeleted} items={items} />
        </div>
         :
        <div className="list">
            <ClipboardText size={50} />
            <p className="font-bold"> <strong>Você ainda não tem tarefas cadastradas</strong> </p>  
            <p> Criar tarefas e organize seus itens a fazer </p>
        </div>    
        
        }

    </div>
 )
}
