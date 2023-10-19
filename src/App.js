import React from "react";
import { ChakraProvider, CSSReset, extendTheme, Flex, Box } from "@chakra-ui/react";
import TodoList from "./TodoList";

const theme = extendTheme({
  // Customize Chakra UI theme here, if desired
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Flex align="center" justify="center" h="100vh">
        <TodoList />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
