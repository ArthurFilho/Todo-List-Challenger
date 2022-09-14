export class Item {
   static lastId = 0 ;
   id: number;
   text: string;
   done: boolean;

   constructor(text:any){
       this.id = Item.lastId++; 
        
       this.text = text;
      
       this.done = false;
   }
}