export function Card( props:any ){

  return <div className={props.className? `${props.className} card`: "card"}>

    {props.children}

  </div>

}