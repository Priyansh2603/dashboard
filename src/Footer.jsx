import { Image,Icon,Box, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { CiWallet } from "react-icons/ci";
export default function Footer() {
  return (
    <div style={{display:'flex', flexDirection:'row', backgroundColor: 'rgba(128, 128, 128, 0.2)',padding:'0.2em',borderRadius:"10px",marginTop:'3.5em',marginBottom:'10%',alignItems:'center',width:'100%'}}>
        <Box bg='rgba(128, 128, 128, 0.2)' style={{opacity:'0.9',alignItems:'center',justifyContent:'center',display:'flex',borderRadius:"10px"}} mr={3} ml={2} p={1} fontWeight={'bold'} w='20%'>
        <Icon as={CiWallet} fontWeight={'bold'} opacity={1} boxSize={7} boxShadow={2}/>
        </Box>
        <span style={{display:'flex',color:'white', zIndex:'20',alignItems:'baseline',justifyContent:'center',flexDirection:'column',height:'100%'}}>
            <p style={{fontSize:'1em'}}>Available credits</p>
            <a style={{fontSize:'1.2em'}}>222.10</a>
        </span>
    </div>
  )
}
