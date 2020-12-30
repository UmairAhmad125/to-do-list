import Projectgenertor from '../Projectgenerator';


test('create project and check whether name exits', () => {
  const Test1 = Projectgenertor('hello');
  expect(Test1.name).toBe('hello');
});

test('create project and check whether name is empty', () => {
  const Test1 = Projectgenertor('hello');
  expect(Test1.name).not.toBe(' ');
});

test('create project and check default todo array', () => {
  const Test1 = Projectgenertor('hello');
  expect(Test1.todo).toEqual([]);
});

test('create project and dont pass any todo info', () => {
  const Test1 = Projectgenertor('hello', [{
    name: 'my task', date: '10-02-21', priority: 'low', description: 'not work',
  }]);
  expect(Test1.todo).toEqual([]);
});
