import { Text, Box, Spacer, Select, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Table from './Table'

export default function SideBody() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '18%', flexDirection: 'column' }}>
            <Box display={'flex'} alignItems={'center'} mt='1.8em'>
                <Text fontSize={'1.3em'}>Overview</Text>
                <Select ml='62em' placeholder='Select ' border={'1px solid black'} size={'sm'} >
                    <option value='option1'>Last Month</option>
                    <option value='option2'>Last Quarter</option>
                    <option value='option3'>Last Year</option>
                </Select>
            </Box>
            <div style={{ display: 'block',width:'82vw' }}>
                <SimpleGrid columns={2} spacing={4}  mt='8'>
                    <Box bg='white' display={'flex'} alignItems={'center'} width={"37em"} borderRadius={"10px"} height='7em' px={'1em'}>
                        <SimpleGrid rows={2} spacing={2}>
                            <Text>Online Orders</Text>
                            <Text fontSize={'2em'} color={'black'} fontWeight={600}>231</Text>
                        </SimpleGrid>
                    </Box>
                    <Box bg='white' display={'flex'} alignItems={'center'} width={"37em"} borderRadius={"10px"} height='7em' px={'1em'}>
                        <SimpleGrid rows={2} spacing={2}>
                            <Text>Amount received</Text>
                            <Text fontSize={'2em'} fontWeight={600} color={'black'} >₹23,92,321.19</Text>
                        </SimpleGrid>
                    </Box>
                </SimpleGrid>
            </div>
            <div style={{ display: 'flex',marginTop:'1em' ,justifyContent:'baseline'}}>
                <Box>
                    <Text fontSize={'1.4em'} marginRight={'40em'} fontWeight={500}>Transactions | This month</Text>
                </Box>
            </div>
            <div style={{backgroundColor:'white',width:'80vw',marginRight:'2em',padding:'1.5em',borderRadius:'10px'}}>
            <Table/>
            </div>
        </div>
    )
}
