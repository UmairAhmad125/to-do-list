import Interface from './Interface';
import Logic from './Logic';


const Application = () => {
  Interface();
  const stored = [{
    id: '1',
    name: 'default',
    todo: [{
      name: 'Visit doctor office', date: '21-12-14', priority: 'high', description: 'Have to get a health checkout',
    }],
  }];
  const projects = JSON.parse(localStorage.getItem('allprojects')) || stored;
  let selectedlistitem = localStorage.getItem('selecteditem');
  if (selectedlistitem === null) {
    selectedlistitem = stored[0].id;
  }

  const savelocal = () => {
    localStorage.setItem('allprojects', JSON.stringify(projects));
    localStorage.setItem('selecteditem', selectedlistitem);
  };

  Logic(projects, selectedlistitem, savelocal, stored);
};


export default Application;
