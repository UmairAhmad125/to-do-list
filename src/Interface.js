import Domelements from './Domelements';
import Navbar from './Navbar';

const Dom = Domelements();
const Mynav=Navbar();

const Interface = () => {
  const container = document.querySelector('.container');
  container.appendChild(Mynav.navgenerator());
  container.appendChild(Dom.taskinfo());
  container.appendChild(Dom.bodycont());
};


export default Interface;
