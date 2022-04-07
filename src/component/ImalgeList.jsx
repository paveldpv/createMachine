import React from 'react'
//=======import MUI=======//
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
//=======import modal image=======//
import ModalImage from "react-modal-image"

export default function ImalgeList(props) {
  return (
    <ImageList sx={{ width: 800, height: 800 }} gap={4} cols={4} rowHeight={164}>
      {props.img.map(src => {
        return <ImageListItem key={src.name}>
              <ModalImage
                  small={src.src}
                  large={src.src}
                  alt="Hello World!"
                />;
            </ImageListItem>
      })}
    </ImageList>
  )
}
