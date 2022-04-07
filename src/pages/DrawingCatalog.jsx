import React from 'react'
import { useEffect,useState } from 'react'
//=======import Style=======//
import './DrawingCatalog.css'
//=======import axios=======//
import axios from 'axios'
//=======import Componets=======//
import ImalgeList from '../component/ImalgeList'


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
     {data.isCatalog ? <ImalgeList img={data.files}/> : 

        <div>
          {data.files.map(item=>{
            return <li key={item.name}>
                      <a href={data.path+`/`+item.name} onClick={clicHeandler}>
                        {item.name}
                      </a>
                   </li>
          })}       
       </div>}
          
     
    </div>
  )
}
