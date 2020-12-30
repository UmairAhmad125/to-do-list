import Taskgenertor from '../Taskgenerator';


test('create todo object and check todo name', () => {
  const todo = Taskgenertor('Todo 1');
  expect(todo.name).toBe('Todo 1');
});

test('create todo object and check todo date', () => {
  const todo = Taskgenertor('Todo 1', '15/01/20');
  expect(todo.date).toBe('15/01/20');
});

test('create todo object and check todo priority', () => {
  const todo = Taskgenertor('Todo 1', '15/01/20', 'high');
  expect(todo.priority).toBe('high');
});

test('create todo object and check todo description', () => {
  const todo = Taskgenertor('Todo 1', '15/01/20', 'high', 'Have to make dinner');
  expect(todo.description).toBe('Have to make dinner');
});
