'use strict';

const status = {loaded: true};

const render = (container, component) => {  
  container.append(component)
}

const rerender = (old, newComponent) => {  
  old.parentElement.replaceChild(newComponent, old);  
};

render(document.body, table);
const tbody = table.querySelector('tbody');

const model = new Model();
const api = new Api();

const fetchUsers = api.fetchUsers();
const fetchPosts = api.fetchPosts();
const fetchComments = api.fetchComments();

const handlerClick = (raw, index) => {  
  raw.rerender(); 
  const items = Array.from(document.querySelectorAll('.comment'));  
  items[index].setAttribute('style', 'color:red'); 
  items[index].textContent = '...Loading';
  api.fetchComments().then(()=>{    
    raw.rerender();    
  });  
};

Promise.all([fetchUsers, fetchPosts, fetchComments])
.then(() => {  
  model.setModel();     
})
.then(()=>{
  model.getModel().map((item, index) => {
    const raw = new Raw(item, status.loaded);
    render(tbody, raw.getElement());    
    raw.setClickHandler(()=>handlerClick(raw, index));    
  });
});
