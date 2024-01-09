import { Box, Text} from '@chakra-ui/react'
import React from 'react'
import { InputGroup, Input, InputLeftElement, Icon } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/react'
import { IoIosSearch } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiChatAlt } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa6";
export default function SideNav() {
    return (
        <div>
            <Box display={'flex'} ml='18%' alignItems={'center'}>
                <Text>
                    Payments
                </Text>
                <Text alignItems={'center'} display={'flex'} fontSize={'0.8em'} mr='20em' ml={'2'}>
                    <Icon as={AiOutlineQuestionCircle} boxSize={4} ml='2' /> How it works
                </Text>
                <InputGroup w="35%">
                    <InputLeftElement pointerEvents="none" >
                        <Icon as={FaSearch} color="gray.800" />
                    </InputLeftElement>
                    <Input type="text" placeholder="Search features, tutorials etc."  bg='#eeeeee'/>
                </InputGroup>
                <Box bg="#d9dee1" borderRadius={'50%'} p='2' ml='15em' display={'flex'} alignItems={'center'}>
                <Icon as={HiChatAlt} boxSize={6} style={{transform:'scaleX(0.7)'}}/>
                </Box>
                <Box bg="#d9dee1" borderRadius={'50%'} p='2' ml='0.5em' display={'flex'} alignItems={'center'}>
                <Icon as={FaCaretDown} boxSize={6} />
                </Box>
            </Box>
        </div>
    )
}
