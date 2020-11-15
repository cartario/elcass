'use strict';

render(document.body, table);
const tbody = table.querySelector('tbody');

const model = new Model();
const api = new Api();

const fetchUsers = api.fetchUsers();
const fetchPosts = api.fetchPosts();
const fetchComments = api.fetchComments();

Promise.all([fetchUsers, fetchPosts, fetchComments])
.then(() => {  
  model.setModel();     
})
.then(()=>{
  model.getModel().map((item, index) => {
    const raw = new Raw(item);
    render(tbody, raw.getElement());    
    raw.setClickHandler(()=>handlerClick(raw, index));    
  });
});
