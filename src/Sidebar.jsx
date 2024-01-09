import {
    Box,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    VStack,
    Link,
    Icon
} from '@chakra-ui/react'
import { MdPayments } from "react-icons/md";
import { RiSendPlaneLine } from 'react-icons/ri';
import { AiOutlineSound } from "react-icons/ai";
import { LuClipboardList } from "react-icons/lu";
import { FiTruck } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { PiChartBar } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { LuBadgePercent } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { MdOutlineColorLens } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import Header from './Header';
import Footer from './Footer';
const SidebarContent = ({ onClick }) => (
    <VStack textAlign={'justify'} fontSize={'1em'} alignItems={'center'}>
        <Link display={'flex'} alignItems='center'onClick={onClick} w="100%" ml='10%' mt='3'>
            <Icon as={GoHome} boxSize={5}  mr='2'  /> <span style={{height:"100%", display:'flex', alignItems:'center'}}>Home</span>
        </Link>
        <Link display={'flex'} alignItems='center'onClick={onClick}  w="100%" ml='10%' mt='3' >
            <Icon as={LuClipboardList} boxSize={5}  mr='2'  /> Orders
        </Link>
        <Link display={'flex'} alignItems='center'onClick={onClick} w="100%" ml='10%' mt='3'>
            <Icon as={FiGrid} boxSize={5}  mr='2' /> Products
        </Link>
        <Link display={'flex'} alignItems='center'onClick={onClick} w="100%" ml='10%' mt='3'>
            <Icon as={FiTruck } boxSize={5} mr='2'  /> Delivery
        </Link>
        <Link display={'flex'} alignItems='center'onClick={onClick} w="100%" ml='10%' mt='3'>
        <Icon justifyContent={'center'} as={AiOutlineSound } boxSize={5}  mr='2' />Marketing
        </Link>
        <Link display={'flex'} alignItems='center'onClick={onClick} w="100%" ml='10%' mt='3'>
        <Icon as={PiChartBar } fontWeight={'bold'} boxSize={5} mr='2' />Analytics
        </Link>
        <Link display={'flex'} alignItems='center'onClick={onClick} w="100%" ml='10%' mt='3' bg={'rgba(128, 128, 128, 0.2)'}>
        <Icon as={MdPayments} boxSize={5} style={{ transform: 'scaleX(-1) scaleY(-1)' }}  mr='2'   />Payments
        </Link>
        <Link display={'flex'} alignItems='center'onClick={onClick} w="100%" ml='10%' mt='3'>
        <Icon as={RiSendPlaneLine } style={{ transform: 'scaleX(-1)' }} fontWeight={'bold'} justifyContent={'center'}  mr='2'  boxSize={5} />Tools
        </Link>
        <Link display={'flex'} alignItems='center'onClick={onClick} w="100%" ml='10%' mt='3'>
        <Icon as={LuBadgePercent} boxSize={5}  mr='2'  /> Discounts
        </Link>
        <Link display={'flex'} alignItems='center'onClick={onClick} w="100%" ml='10%' mt='3'>
        <Icon as={GoPeople} boxSize={5}  mr='2'  />Audience
        </Link>
        <Link display={'flex'} alignItems='center'onClick={onClick} w="100%" ml='10%' mt='3'>
        <Icon as={MdOutlineColorLens} boxSize={5}  mr='2' />Appearance
        </Link>
        <Link display={'flex'} alignItems='center'onClick={onClick} w="100%" ml='10%' mt='3'>
        <Icon as={BsLightningCharge} boxSize={5}  mr='2' />Plugins
        </Link>
    </VStack>
)

const Sidebar = ({ isOpen, variant, onClose }) => {
    return variant === 'sidebar' ? (
        <Box
            position="fixed"
            // left={0}
            p={5}
            w="15em"
            top={0}
            h="100%"
            bg="rgb(29,40,60)"
            color='white'
            justifyContent={'start'}
        >
            <Header/>
            <SidebarContent onClick={onClose} />
            <Box mt='auto'>
            <Footer/>
            </Box>
        </Box>
    ) : (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Chakra-UI</DrawerHeader>
                    <DrawerBody>
                        <SidebarContent onClick={onClose} />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}

export default Sidebar
