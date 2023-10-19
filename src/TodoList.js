// src/TodoList.js
import React, { useState } from "react";
import { Box, Input, Button, Stack, Text, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Stack spacing={3}>
        <Text fontSize="xl">Todo List</Text>
        <Input
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleAddTodo}>
          Add Task
        </Button>
        <Stack spacing={2}>
          {todos.map((todo, index) => (
            <Box key={index} display="flex" justifyContent="space-between">
              <Text>{todo}</Text>
              <IconButton
                icon={<DeleteIcon />}
                colorScheme="red"
                onClick={() => handleDeleteTodo(index)}
              />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default TodoList;
