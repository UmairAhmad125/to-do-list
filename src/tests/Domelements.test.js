import Domelements from '../Domelements';


test('Check existance of projectlist container', () => {
  const Dom = Domelements();
  expect(Dom.projectlist().classList.contains('projectlist')).toBe(true);
});

test('Check existance of ul tag in projectlist', () => {
  const Dom = Domelements();
  expect(Dom.projectlist().tagName).toBe('UL');
});


test('Check existance of projectform element', () => {
  const Dom = Domelements();
  expect(Dom.projectform().classList.contains('projectform')).toBe(true);
});

test('Check existance of form tag in project form', () => {
  const Dom = Domelements();
  expect(Dom.projectform().tagName).toBe('FORM');
});

test('Check existance of projectcont element', () => {
  const Dom = Domelements();
  expect(Dom.projectcont().classList.contains('projectbar')).toBe(true);
});


test('Check existance of div tag in project container', () => {
  const Dom = Domelements();
  expect(Dom.projectcont().tagName).toBe('DIV');
});

test('Check existance of taskheading element', () => {
  const Dom = Domelements();
  expect(Dom.taskheading().classList.contains('theading')).toBe(true);
});

test('Check existance of div tag in taskheading container', () => {
  const Dom = Domelements();
  expect(Dom.taskheading().tagName).toBe('DIV');
});

test('Check existance of tasklist container', () => {
  const Dom = Domelements();
  expect(Dom.tasklist().classList.contains('tasklist')).toBe(true);
});

test('Check existance of ul tag in tasklist', () => {
  const Dom = Domelements();
  expect(Dom.tasklist().tagName).toBe('UL');
});

test('Check existance of taskform element', () => {
  const Dom = Domelements();
  expect(Dom.taskform().classList.contains('taskform')).toBe(true);
});

test('Check if the taskform is hidden', () => {
  const Dom = Domelements();
  expect(Dom.taskform().classList.contains('hide')).toBe(true);
});

test('Check existance of form tag in taskform', () => {
  const Dom = Domelements();
  expect(Dom.taskform().tagName).toBe('FORM');
});

test('Check existance of taskupdateform element', () => {
  const Dom = Domelements();
  expect(Dom.taskupdateform().classList.contains('taskupdate')).toBe(true);
});

test('Check if the taskupdateform is also a taskform', () => {
  const Dom = Domelements();
  expect(Dom.taskupdateform().classList.contains('taskform')).toBe(true);
});

test('Check existance of form tag in taskupdateform', () => {
  const Dom = Domelements();
  expect(Dom.taskupdateform().tagName).toBe('FORM');
});


test('Check existance of taskinfo element', () => {
  const Dom = Domelements();
  expect(Dom.taskinfo().classList.contains('taskinfo')).toBe(true);
});

test('Check if the taskupdateform is also a taskform', () => {
  const Dom = Domelements();
  expect(Dom.taskupdateform().classList.contains('taskform')).toBe(true);
});

test('Check existance of div tag in taskupdateform', () => {
  const Dom = Domelements();
  expect(Dom.taskinfo().tagName).toBe('DIV');
});


test('Check existance of taskcontainer element', () => {
  const Dom = Domelements();
  expect(Dom.taskcont().classList.contains('taskbar')).toBe(true);
});

test('Check existance of div tag in taskcontainer', () => {
  const Dom = Domelements();
  expect(Dom.taskcont().tagName).toBe('DIV');
});
