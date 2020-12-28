import Image from './assets/list.png';

const Domelements = () => {
  const navgenerator = () => {
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    navbar.innerHTML = `
  <div class="itemcont">
  <img src="${Image}" id="list">
  <h3 id="todo">Todo-List</h3>
  </div>`;

    return navbar;
  };

  const projectlist = () => {
    const projectul = document.createElement('ul');
    projectul.classList.add('projectlist');
    return projectul;
  };

  const projectform = () => {
    const form = document.createElement('form');
    form.classList.add('projectform');
    form.innerHTML = `
    <input type="text" placeholder="Enter project name" id="input">
    <button type="submit" id="submitbtn">+ Add Project</button>
    `;
    return form;
  };

  const projectcont = () => {
    const projectbar = document.createElement('div');
    projectbar.classList.add('projectbar');
    const projecthead = document.createElement('h3');
    projecthead.classList.add('p-title');
    projecthead.textContent = 'All Projects';
    projectbar.appendChild(projecthead);
    projectbar.appendChild(projectlist());
    projectbar.appendChild(projectform());
    return projectbar;
  };

  const taskheading = () => {
    const heading = document.createElement('div');
    heading.classList.add('theading');
    heading.innerHTML = `
    <h3 class="projecthead">Project Name</h3>
    <button id="addbtn">+ Add Task</button>
    `;
    return heading;
  };

  const tasklist = () => {
    const taskul = document.createElement('ul');
    taskul.classList.add('tasklist');
    return taskul;
  };

  const taskform = () => {
    const tform = document.createElement('form');
    tform.classList.add('taskform', 'hide');
    tform.innerHTML = `
  <h3 class="taskh">Add New Task</h3>

  <label for="name"> Task Name:</label>
  <input type="text" placeholder="Enter name of the task" id="name">

  <label for="date"> Task Date:</label>
  <input type="date" id="date">

  <label for="priority"> Task Priority:</label>
  <select name="priority" id="priority">
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>

  <label for="description">Description:</label>
  <textarea id="description" name="description" rows="4" cols="50"></textarea>

  <div class="fbtncont">
  <button type="submit" id="tasksubmit">Submit</button>
  <button type="submit" id="taskcancel">Cancel</button>
  </div>
  `;
    return tform;
  };


  const taskupdateform = () => {
    const updateform = document.createElement('form');
    updateform.classList.add('taskform', 'taskupdate');
    updateform.innerHTML = `
  <h3 class="taskh">Update Task</h3>

  <label for="uname"> Task Name:</label>
  <input type="text" placeholder="Enter name of the task" id="uname">

  <label for="udate"> Task Date:</label>
  <input type="date" id="udate">

  <label for="upriority"> Task Priority:</label>
  <select name="priority" id="upriority">
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>

  <input type="hidden" id="index">

  <label for="udescription">Description:</label>
  <textarea id="udescription" name="description" rows="4" cols="50"></textarea>

  <div class="fbtncont">
  <button type="submit" id="taskupdate">Submit</button>
  <button id="taskupdatecancel">Cancel</button>
  </div>
  `;
    return updateform;
  };


  const taskinfo = () => {
    const taskinformation = document.createElement('div');
    taskinformation.classList.add('taskinfo', 'hide');
    return taskinformation;
  };


  const taskcont = () => {
    const taskbar = document.createElement('div');
    taskbar.classList.add('taskbar');
    taskbar.appendChild(taskheading());
    taskbar.appendChild(taskform());
    taskbar.appendChild(taskupdateform());
    taskbar.appendChild(tasklist());
    return taskbar;
  };

  const bodycont = () => {
    const body = document.createElement('div');
    body.classList.add('mbody');
    body.appendChild(projectcont());
    body.appendChild(taskcont());
    return body;
  };

  return {
    navgenerator,
    taskinfo,
    bodycont,
  };
};


export default Domelements;
