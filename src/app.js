import Interface from './Interface';
import Logic from './Logic';


const Application = () => {
  Interface();

  const local_storage_key = 'all.projects';
  const local_storage_select = 'selected.item';
  const stored = [{
    id: '1',
    name: 'default',
    todo: [{
      name: 'mytask', date: '21-12-14', priority: 'high', description: 'This is real work.',
    }],
  }];
  const projects = JSON.parse(localStorage.getItem(local_storage_key)) || stored;
  let selectedlistitem = localStorage.getItem(local_storage_select);
  if (selectedlistitem === null) {
    selectedlistitem = stored[0].id;
  }

  const savelocal = () => {
    localStorage.setItem(local_storage_key, JSON.stringify(projects));
    localStorage.setItem(local_storage_select, selectedlistitem);
  };

  Logic(projects, selectedlistitem, savelocal);

};


export default Application;
