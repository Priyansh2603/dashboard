import { Box, Button, IconButton, HStack,Text } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TableFooter = ({ currentPage, totalPages, onPrevious, onNext }) => {
    currentPage = 1;
    totalPages = 12;
    const arr=[];
    for(let it = currentPage+1;it<=currentPage+6;it++){
        arr.push(it);
    }
  return (
    <Box mt={4} display="flex" justifyContent="center" alignItems="center">
      <HStack spacing={2}>
        <Button
          
        ><FaChevronLeft/><Text>Previous</Text></Button>
        <Button variant="blue" bg={'skyblue'}>{currentPage}</Button>
        {arr.map((e,i)=>{
            return(<Button key={i}><Text>{e}</Text></Button>)
        })}
        <Text>. . . . . . .</Text>
        <Button>{totalPages}</Button>
        <Button
          
        ><Text>Next</Text><FaChevronRight/></Button>
      </HStack>
      </Box>
  );
};
export default TableFooter;
// Example usage
// <TableFooter currentPage={1} totalPages={10} onPrevious={handlePrevious} onNext={handleNext} />
