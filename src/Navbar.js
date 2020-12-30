import Image from "./assets/list.png"


const Navbar=()=>{
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

  return {navgenerator};

}

export default Navbar;
