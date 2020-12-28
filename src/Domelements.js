import Image from "./assests"

const Domelements=()=>{

  const navgenerator=()=>{

  const navbar=document.createElement("div");
  navbar.classList.add("navbar");
  navbar.innerHTML=`
  <div class="itemcont">
  <img src="list.png" id="list">
  <h3 id="todo">Todo-List</h3>
  </div>`

  return navbar;
  }


  const bodycont=()=>{
  const body=document.createElement("div");
  body.classList.add("mbody");
  body.appendChild(projectcont());
  body.appendChild(taskcont());
  return body;
  }

  const projectlist=()=>{
  const projectul=document.createElement("ul");
  projectul.classList.add("projectlist");
  return projectul;
  }

  const projectform=()=>{
    const form=document.createElement("form");
    form.classList.add("projectform");
    form.innerHTML=`
    <input type="text" placeholder="Enter project name" id="input">
    <button type="submit" id="submitbtn">+ Add Project</button>
    `
    return form;
  }


return {
  navgenerator,
  bodycont,
  projectlist,
  projectform,
  
}



}
