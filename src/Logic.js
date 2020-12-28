import Projectgenerator from './Projectgenerator';
import Taskgenerator from './Taskgenerator';

const Logic = (projects, selectedlistitem, savelocal) => {
  const addproject = () => {
    const pname = document.querySelector('#input');
    const proname = pname.value;
    const newproject = Projectgenerator(proname);
    if (proname === '') {
      alert('please enter valid name');
    } else {
      projects.push(newproject);
    }
    pname.value = '';
  };

  const displayproject = () => {
    const projectcont = document.querySelector('.projectlist');
    const projecthead = document.querySelector('.projecthead');
    projectcont.innerHTML = '';
    projects.forEach((item, index) => {
      const liitem = document.createElement('li');
      liitem.dataset.listid = item.id;
      if (item.id === selectedlistitem) {
        liitem.classList.add('active');
        projecthead.textContent = item.name;
      }
      liitem.classList.add('li-item');
      liitem.innerHTML = `${item.name} <i class="far fa-trash-alt ml icon d-icon" onclick="removeproject(${index})"></i>`;
      projectcont.appendChild(liitem);
    });
  };


  const addtask = () => {
    const name = document.querySelector('#name');
    const date = document.querySelector('#date');
    const priority = document.querySelector('#priority');
    const description = document.querySelector('#description');
    const tname = name.value;
    const tdate = date.value;
    const tpriority = priority.value;
    const tdescription = description.value;
    const newtask = Taskgenerator(tname, tdate, tpriority, tdescription);
    const selectedproject = projects.find((item) => item.id === selectedlistitem);

    if (tname === '' || tdate === '' || tpriority === '' || tdescription === '') {
      alert('Please Enter all the task information');
    } else {
      selectedproject.todo.push(newtask);
    }

    savelocal();
    name.value = '';
    date.value = '';
    priority.value = '';
    description.value = '';
  };

  const displaytask = () => {
    const selectedproject = projects.find((item) => item.id === selectedlistitem);
    const tasklist = document.querySelector('.tasklist');
    tasklist.innerHTML = '';
    selectedproject.todo.forEach((item, index) => {
      const titem = document.createElement('li');
      titem.classList.add('t-item');
      titem.innerHTML = `
    <h4>${item.name}.</h4>
    <div class="btncont">
    <i class="fas fa-file-alt icon" onclick="dtaskinfo(${index})"></i>
    <i class="fas fa-pen-alt ml icon" onclick="taskupdate(${index})"></i>
    <i class="far fa-trash-alt ml icon" onclick="removetask(${index})"></i>
    </div>`;
      tasklist.appendChild(titem);
    });
  };


  document.querySelector('.projectlist').addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      selectedlistitem = e.target.dataset.listid;
      savelocal();
      displaytask();
      displayproject();
      console.log(selectedlistitem);
    }
  });

  displayproject();
  displaytask();

  const pform = document.querySelector('.projectform');
  pform.addEventListener('submit', (e) => {
    e.preventDefault();
    addproject();
    displayproject();
    savelocal();
  });


  const addtaskbtn = document.querySelector('#addbtn');
  addtaskbtn.addEventListener('click', (e) => {
    e.preventDefault();
    const taskform = document.querySelector('.taskform');
    const tasklist = document.querySelector('.tasklist');
    taskform.classList.remove('hide');
    tasklist.classList.add('hide');
  });

  const tasksubmit = document.querySelector('#tasksubmit');
  tasksubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const taskform = document.querySelector('.taskform');
    const tasklist = document.querySelector('.tasklist');
    taskform.classList.add('hide');

    addtask();
    displaytask();
    tasklist.classList.remove('hide');
    console.log(projects);
  });

  const taskcancel = document.querySelector('#taskcancel');
  taskcancel.addEventListener('click', (e) => {
    e.preventDefault();
    const taskform = document.querySelector('.taskform');
    const tasklist = document.querySelector('.tasklist');
    taskform.classList.add('hide');
    tasklist.classList.remove('hide');

    console.log('working');
  });


  const removeproject = (index) => {
    projects.splice(index, 1);
    displayproject();
    savelocal();
  };


  const removetask = (index) => {
    const selectedproject = projects.find((item) => item.id === selectedlistitem);
    selectedproject.todo.splice(index, 1);
    displaytask();
    savelocal();
  };

  const dtaskinfo = (index) => {
    const selectedproject = projects.find((item) => item.id === selectedlistitem);
    const infodiv = document.querySelector('.taskinfo');
    infodiv.classList.add('show');
    infodiv.innerHTML = `
  <div class="info">
  <i class="fas fa-times close" onclick="removedisplay()"></i>
  <h3>Task Details</h3>
  <hr>
  <p>Task Name: <br> ${selectedproject.todo[index].name}</p>
  <p>Task Date:<br> ${selectedproject.todo[index].date}</p>
  <p>Task Priority:<br> ${selectedproject.todo[index].priority}</p>
  <p>Task Description: <br> ${selectedproject.todo[index].description}</p>
  </div>
  `;
  };


  const removedisplay = () => {
    const infodiv = document.querySelector('.taskinfo');
    infodiv.classList.remove('show');
  };


  const taskupdate = (index) => {
    const selectedproject = projects.find((item) => item.id === selectedlistitem);
    const tupdateform = document.querySelector('.taskupdate');
    const uname = document.querySelector('#uname');
    const udate = document.querySelector('#udate');
    const upriority = document.querySelector('#upriority');
    const udescription = document.querySelector('#udescription');
    const uindex = document.querySelector('#index');
    const tasklist = document.querySelector('.tasklist');
    tasklist.classList.add('hide');
    tupdateform.classList.add('tshow');
    uname.value = selectedproject.todo[index].name;
    udate.value = selectedproject.todo[index].date;
    upriority.value = selectedproject.todo[index].priority;
    udescription.value = selectedproject.todo[index].description;
    uindex.value = index;
  };


  document.querySelector('#taskupdatecancel').addEventListener('click', (e) => {
    e.preventDefault();
    const tupdateform = document.querySelector('.taskupdate');
    const tasklist = document.querySelector('.tasklist');
    tasklist.classList.remove('hide');
    tupdateform.classList.remove('tshow');
  });

  document.querySelector('.taskupdate').addEventListener('submit', (e) => {
    e.preventDefault();
    const tupdateform = document.querySelector('.taskupdate');
    const tasklist = document.querySelector('.tasklist');
    const selectedproject = projects.find((item) => item.id === selectedlistitem);
    const uname = document.querySelector('#uname');
    const udate = document.querySelector('#udate');
    const upriority = document.querySelector('#upriority');
    const udescription = document.querySelector('#udescription');
    const uindex = document.querySelector('#index');
    const newname = uname.value;
    const newdate = udate.value;
    const newpriority = upriority.value;
    const newdescription = udescription.value;
    const index = uindex.value;
    selectedproject.todo[index].name = newname;
    selectedproject.todo[index].date = newdate;
    selectedproject.todo[index].priority = newpriority;
    selectedproject.todo[index].description = newdescription;
    tasklist.classList.remove('hide');
    tupdateform.classList.remove('tshow');
    savelocal();
    displaytask();
  });
};


export default Logic;
