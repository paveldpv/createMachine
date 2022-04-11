import React from 'react'
//=======import MUI=======//
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
//=======import modal image=======//
import ModalImage from "react-modal-image"
//=======import axios=======//
import axios from 'axios'


export default function ImalgeList(props) {

  

  let checkdDrawingArr = {
    role: `admin`,
    order: []
  }

  const checkHandler = event => {
    
      let order = { src: event.target.id, name: event.target.name }
      let index = checkdDrawingArr.order.findIndex(item => JSON.stringify(item) == JSON.stringify(order))
      if (index == -1) {
        checkdDrawingArr.order.push(order)
        
      }
      else {
        console.log(`work`);
        delete checkdDrawingArr.order[index]
        checkdDrawingArr.order = checkdDrawingArr.order.filter(element => element != null)
        
      };          
       console.log(checkdDrawingArr)
              
    }

  const sendOrder = event =>{
    console.log(event);
    if(checkdDrawingArr.order.length>0 ){
      console.log(`отправка заказа`);
      axios.get(`http://localhost:8000/?order=${JSON.stringify(checkdDrawingArr)}`).catch(eror=>console.log(eror))
    }
  }
  

  return (

    <>
      <Button onClick={sendOrder}  variant='contained' color='warning' endIcon={<SendIcon/>} disabled >заказать</Button>
      <ImageList sx={{ width: 1000, height: 800 }} gap={4} cols={5} rowHeight={'auto'} >

        {props.img.map(src => {
          return <ImageListItem key={src.name} >
            <ModalImage
              small={src.src}
              large={src.src}
              alt="Hello World!"
            />;
            <ImageListItemBar
              title={src.name}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}

                >
                  <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} color='warning'
                    onChange={checkHandler} name={src.name} id={src.src} />
                </IconButton>
              } />
          </ImageListItem>

        })}
      </ImageList>
    </>
  )
}
