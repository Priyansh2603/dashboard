import React from 'react'
import { Image,Box, VStack, Link, Text,Icon } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
export default function 
() {
  return (
    <div mb={'5'} h='8' style={{display:'flex',alignItems:'center',marginBottom:'1em'}}>
        <Image w={'8'} h='100%' mr={'2'} borderRadius={'6'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0dloyQjmPUPU0ZyMpt6HY1mXQCS70iwE3vgfEqUC7P7qe1h8JllHr90q9aHI5MkhwXo&usqp=CAU" alt="" />
        <span style={{display:'flex',alignItems:'baseline',justifyContent:'center',flexDirection:'column',height:'100%'}}>
            <p style={{fontSize:'1em'}}>Nishyan</p>
            <a style={{fontSize:'0.7em',textDecoration:'underline'}}>Visit Store</a>
        </span>
        <span style={{marginLeft:'40%'}}><Icon as={ChevronDownIcon} boxSize={6} /></span>
    </div>
  )
}
