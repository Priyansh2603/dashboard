import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { BiSortAlt2 } from "react-icons/bi";
import { RxDownload } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa6";
import TableFooter from './TableFooter';
import {
    Table as Tabular,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
} from '@chakra-ui/react'
import { InputGroup, Input, InputLeftElement, Icon, Text } from '@chakra-ui/react';
export default function Table() {
    return (
        <>        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white' }}>
            <InputGroup mr='48em' w='18em' >
                <InputLeftElement pointerEvents="none">
                    <Icon as={FaSearch} color="gray.800" />
                </InputLeftElement>
                <Input type="text" placeholder="Search by order ID..." bg={"white"} />
            </InputGroup>
            <Box display={'flex'}>
            <Text border={'1px solid black'} width={'4em'} display={'flex'} fontSize={'1.1em'} mr={2} borderRadius={'6px'} justifyContent={'center'} alignItems={'center'}>Sort
                <Icon as={BiSortAlt2} boxSize={5} ml={1} />
            </Text>
            <Text border={'1px solid black'} width={'2.5em'} display={'flex'} fontSize={'1.1em'} borderRadius={'6px'} justifyContent={'center'} alignItems={'center'}>
                <Icon as={RxDownload} boxSize={6} ml={1} />
            </Text>
            </Box>
            
        </div>
            <div style={{ display: 'block',marginTop:'1em'}}>
                <TableContainer textTransform="none" display={'block'}>
                    <Tabular textTransform="none">
                        <TableCaption><TableFooter/></TableCaption>
                        <Thead bg="#eeeeee">
                            <Tr fontSize={'1.1em'}>
                                <Th textTransform="none" fontSize={'0.9em'} fontWeight={'600'}>Order ID</Th>
                                <Th textTransform="none" fontSize={'0.9em'} fontWeight={'600'}>Order date <Icon as={FaCaretDown} size={3} alignItems={'center'} /></Th>
                                <Th textTransform="none" fontSize={'0.9em'} fontWeight={'600'} isNumeric>Order amount</Th>
                                <Th textTransform="none" fontSize={'0.9em'} fontWeight={'600'} isNumeric>Transaction fees</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td color={'blue'} textDecoration={'underline'}>#123456</Td>
                                <Td>7 Jul 2023</Td>
                                <Td isNumeric>₹500</Td>
                                <Td isNumeric>₹20</Td>
                            </Tr>
                            <Tr>
                                <Td color={'blue'} textDecoration={'underline'}>#123456</Td>
                                <Td>7 Jul 2023</Td>
                                <Td isNumeric>₹500</Td>
                                <Td isNumeric>₹20</Td>
                            </Tr>
                            <Tr>
                                <Td color={'blue'} textDecoration={'underline'}>#123456</Td>
                                <Td>7 Jul 2023</Td>
                                <Td isNumeric>₹500</Td>
                                <Td isNumeric>₹20</Td>
                            </Tr>
                            <Tr>
                                <Td color={'blue'} textDecoration={'underline'}>#123456</Td>
                                <Td>7 Jul 2023</Td>
                                <Td isNumeric>₹500</Td>
                                <Td isNumeric>₹20</Td>
                            </Tr>
                            <Tr>
                                <Td color={'blue'} textDecoration={'underline'}>#123456</Td>
                                <Td>7 Jul 2023</Td>
                                <Td isNumeric>₹500</Td>
                                <Td isNumeric>₹20</Td>
                            </Tr>
                            <Tr>
                                <Td color={'blue'} textDecoration={'underline'}>#123456</Td>
                                <Td>7 Jul 2023</Td>
                                <Td isNumeric>₹500</Td>
                                <Td isNumeric>₹20</Td>
                            </Tr>
                            <Tr>
                                <Td color={'blue'} textDecoration={'underline'}>#123456</Td>
                                <Td>7 Jul 2023</Td>
                                <Td isNumeric>₹500</Td>
                                <Td isNumeric>₹20</Td>
                            </Tr>
                            <Tr>
                                <Td color={'blue'} textDecoration={'underline'}>#123456</Td>
                                <Td>7 Jul 2023</Td>
                                <Td isNumeric>₹500</Td>
                                <Td isNumeric>₹20</Td>
                            </Tr>
                            <Tr>
                                <Td color={'blue'} textDecoration={'underline'}>#123456</Td>
                                <Td>7 Jul 2023</Td>
                                <Td isNumeric>₹500</Td>
                                <Td isNumeric>₹20</Td>
                            </Tr>
                            <Tr>
                                <Td color={'blue'} textDecoration={'underline'}>#123456</Td>
                                <Td>7 Jul 2023</Td>
                                <Td isNumeric>₹500</Td>
                                <Td isNumeric>₹20</Td>
                            </Tr>
                            <Tr>
                                <Td color={'blue'} textDecoration={'underline'}>#123456</Td>
                                <Td>7 Jul 2023</Td>
                                <Td isNumeric>₹500</Td>
                                <Td isNumeric>₹20</Td>
                            </Tr>
                            <Tr>
                                <Td color={'blue'} textDecoration={'underline'}>#123456</Td>
                                <Td>7 Jul 2023</Td>
                                <Td isNumeric>₹500</Td>
                                <Td isNumeric>₹20</Td>
                            </Tr>
                            
                        </Tbody>
                    </Tabular>
                </TableContainer>
        </div>
        </>

    )
}
