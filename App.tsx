import { useState } from 'react';
import { evaluate } from 'mathjs';
import React = require('react');
import {
  Box,
  Center,
  Image,
  Flex,
  Badge,
  Text,
  Button,
} from '@chakra-ui/react';

export default function App() {
  const [expression, setExpression] = useState('');
  const submit = (e) => {
    e.preventDefault();
    setExpression((ex) => evaluate(ex));
  };
  return (
    
    <div className="App">
        <Box maxW='250px' bg="green.100">
          <Text fontSize='3xl'>
           {expression}
          </Text>
        </Box>
      <form onSubmit={submit}>
        <Box >
          <Button w={16} type="button"  variant="outline" onClick={() => setExpression((ex) => `${ex}+`)}>
            +
          </Button>
          <Button w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}-`)}>
            -
          </Button>
          <Button w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}*`)}>
          ×
          </Button>
          <Button w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}/`)}>
          ÷
          </Button>  
        </Box>
      
        <Box >
          <Button  w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}%`)}>
            %
          </Button> 
          <Button w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}.`)}>
            .
          </Button>
          <Button  w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}9`)}>
            9
          </Button>
          <Button w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}8`)}>
            8
          </Button> 
        </Box>
        <Box >
          <Button w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}7`)}>
            7
          </Button>  
          <Button w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}6`)}>
            6
          </Button>
          <Button w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}5`)}>
            5
          </Button>
          <Button w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}4`)}>
            4
          </Button>
        </Box>
        <Box >
          <Button w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}3`)}>
            3
          </Button>
          <Button w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}2`)}>
            2
          </Button>
          <Button w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}1`)}>
            1
          </Button>
          <Button w={16} type="button" variant="outline" onClick={() => setExpression((ex) => `${ex}0`)}>
            0
          </Button>
        </Box>
        <Box >
          <Button colorScheme='yellow' type="button"
            style={{ width: 190 }}
            onClick={() => setExpression('')}
          >Clear</Button>
          <Button w={16} colorScheme='green' type="submit">
            =
          </Button>  
        </Box>
        
      </form>
    </div>
  );
}
