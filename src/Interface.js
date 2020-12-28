import Domelements from './Domelements';

const Dom = Domelements();

const Interface = () => {
  const container = document.querySelector('.container');
  container.appendChild(Dom.navgenerator());
  container.appendChild(Dom.taskinfo());
  container.appendChild(Dom.bodycont());
};


export default Interface;
