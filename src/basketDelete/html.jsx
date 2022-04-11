import React from 'react'
import { useEffect,useState } from 'react'
//=======import Style=======//
import './DrawingCatalog.css'
//=======import axios=======//
import axios from 'axios'
//=======import Componets=======//
import ImalgeList from '../component/ImalgeList'

import TextField from '@mui/material/TextField'
import FolderIcon from '@mui/icons-material/Folder';


export default function DrawingCatalog() {

  const [search,setSearch]=useState(``)

  const [data,setData]=useState({
    path:``,
    files:[],
  })

  const [parent,setParent] =useState()

  useEffect(()=>{axios.get(`http://localhost:8000/`).then(res=>setData(res.data))},[])
  
  const clicHeandler = event =>{

    event.preventDefault();
    setSearch(``)    
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
  const SearcOnFolder = event =>{

    setSearch(event.target.value)
  }

    return (
        
    <div className='box'>
      <div className='outlinenav'>
        {/* строка поиска               */}
             <TextField sx={{width:450}}
              id="outlined-basic"
               label="поиск по текущему каталогу"
                variant="outlined" 
                onChange={SearcOnFolder}
              />
          {/* кнопка назад */}
             {!parent? ``: <a href={parent} onClick={clicHeandler}> 
                <span className="material-icons">undo</span>
                назад
             </a>}
      </div>
      <hr />
      
      

     {/* блок отрисовки */}
     {data.isCatalog ?
           <ImalgeList img={data.files.filter((val)=>{
             if(search==``){
               return val
             }
             else{
               
               let regEx=RegExp(search)
               if(regEx.test(val.name)||regEx.test(val.name.toLowerCase())){
                 return val
               }
             }
           })}/>
           
           : 

          <div className={data.files.length>10 ? "moreTen" : ``}> 
          
           {data.files.filter((val)=>{
             if(search==``){
               return val
             }
             else{
               let regEx=RegExp(search)
               if(regEx.test(val.name)||regEx.test(val.name.toLowerCase())){
                 return val
               }
             }

           }).map(item=>{
             
            return <li key={item.name}>
                      <FolderIcon fontSize='large' className='icon' />
                      <a href={data.path+`/`+item.name} onClick={clicHeandler}>
                        {item.name}
                      </a>
                   </li>
          })}       
       </div>}
          
     
    </div>
  )
}
