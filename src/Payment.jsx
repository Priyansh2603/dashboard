import React,{useState} from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'

// import Header from './components/Header'
import Sidebar from './Sidebar'
import SideNav from './SideNav'
import SideBody from './SideBody'
const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }
export default function Payment() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant })

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
  return (
    <div style={{overflowX:'hidden'}}>
      <Sidebar
        variant={variants?.navigation}
      />
      <Box h='12%' py='0.8em' bg='transparent' borderBottom={"1px solid black"}  >
        <SideNav/>
      </Box>
      <Box  bg="#f1f1f1">
      <SideBody/>
      </Box>
        </div>
  )
}
