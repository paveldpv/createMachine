import React from 'react'

export default function ListHref(props) {

   const cliclHref =(event)=>{
      let path = event.target.attributes.href.value;
      event.preventDefault();
      console.log(path);
      
     props.action(event)//не рабоатет!!
      
      

   }


  return (
    <div>
       <ul>
          {props.data.files.map(item=>{
             return <li key={item.name}><a href={props.data.path+`/`+item.name} onClick={cliclHref}>{item.name}</a></li>
          })}
          
       </ul>
    </div>
  )
}
