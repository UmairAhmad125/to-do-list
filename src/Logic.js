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
      liitem.innerHTML = `${item.name} <button class="d-icon d-btn" data-index="${index}"><i class="far fa-trash-alt icon d-icon"></i></button>`;
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
    <button class="i-display btn-f" data-index="${index}"><i class="fas fa-file-alt icon mr"></i>Show</button>
    <button class="i-update btn-f" data-index="${index}"><i class="fas fa-pen-alt icon mr" ></i>Edit</button>
    <button class="i-remove btn-f" data-index="${index}"><i class="far fa-trash-alt icon mr"></i>Remove</button>
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
    savelocal();
    displayproject();
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

  const projectcont = document.querySelector('.projectlist');
  projectcont.addEventListener("click",(e)=>{
  if(e.target.classList.contains("d-icon")){
    const index=e.target.dataset.index;
    removeproject(index);
  }
  })

  const taskcont=document.querySelector(".tasklist");
  taskcont.addEventListener("click",(e)=>{
    if(e.target.classList.contains("i-display")){
      const index=e.target.dataset.index;
      dtaskinfo(index);
    }
     else if(e.target.classList.contains("i-update")) {
      const index=e.target.dataset.index;
      taskupdate(index);
    }
    else if(e.target.classList.contains("i-remove")){
      const index=e.target.dataset.index;
      removetask(index);
    }

  })

  const removeproject = (index) => {
    projects.splice(index, 1);
    savelocal();
    displayproject();
  };


  const removetask = (index) => {
    const selectedproject = projects.find((item) => item.id === selectedlistitem);
    selectedproject.todo.splice(index, 1);
    savelocal();
    displaytask();
  };

  const dtaskinfo = (index) => {
  const selectedproject = projects.find((item) => item.id === selectedlistitem);
  const infodiv = document.querySelector('.taskinfo');
  infodiv.classList.add('show');
  infodiv.innerHTML = `
  <div class="info">
  <button class="close">close</button>
  <h3>Task Details</h3>
  <hr>
  <p>Task Name: <br> ${selectedproject.todo[index].name}</p>
  <p>Task Date:<br> ${selectedproject.todo[index].date}</p>
  <p>Task Priority:<br> ${selectedproject.todo[index].priority}</p>
  <p>Task Description: <br> ${selectedproject.todo[index].description}</p>
  </div>
  `;
  };

  const infodiv = document.querySelector('.taskinfo');
  infodiv.addEventListener("click",(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("close")){
      removedisplay();
    }
  })


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
