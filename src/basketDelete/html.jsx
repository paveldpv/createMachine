import React from 'react'
import { useEffect,useState } from 'react'
import './DrawingCatalog.css'
import axios from 'axios'


export default function DrawingCatalog() {

  const [data,setData]=useState({
    path:``,
    files:[],
  })

  const [parent,setParent] =useState()

  useEffect(()=>{axios.get(`http://localhost:8000/`).then(res=>setData(res.data))},[])
  
  const clicHeandler = event =>{

    event.preventDefault();
    let path = event.target.attributes.href.value;
    axios.get(`http://localhost:8000/?path=${path}`)
      .then((res)=>{    
        let linkBack = res.data.path.split("/")  
        linkBack.pop()
        console.log(linkBack);
        setParent(linkBack.join(`/`))
        setData(res.data)
      })
  
  }
  

  return (
        // кнопка назад
    <div className='box'>
      <div>{!parent? ``: <a href={parent} onClick={clicHeandler}> 
                <span className="material-icons">undo</span>
                назад
             </a>}
      </div>

     {/* блок отрисовки */}
      <ul>
      {data.files.map(item=>{
        if(item.dir){
          return <li className='folder' key={item.name}>
             <span className="material-icons">folder</span>
                    <a href={data.path+"/"+item.name} onClick={clicHeandler}>
                      {item.name}
                    </a>
                  </li>                  
        }
        else{
          return <li key={item.name}>
                  <h4>{item.name}</h4>
                  <hr />
                  <img src={item.src} alt="" />
                 </li>
        }
      })}
      </ul>
     
     
    </div>
  )
}
