'use strict';

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

const handlerClick = (raw) => {
  api.fetchComments().then(()=>{
    raw.rerender();
  });    
};

Promise.all([fetchUsers, fetchPosts, fetchComments]).then(() => {
  model.setModel();
  
  model.getModel().map((item) => {
    const raw = new Raw(item, api.isLoaded);
    render(tbody, raw.getElement());
    raw.setClickHandler(()=>handlerClick(raw));    
  });
});

const initialize = () => {
  // const handleClick = (item, i) => {
  //   const fields = document.querySelectorAll('tbody tr td:nth-child(3)');
  //   const initial = fields[i].textContent;

  //   item.addEventListener('click', () => {
  //     if (fields[i].hasAttribute('style')) {
  //       fields[i].removeAttribute('style');
  //       fields[i].textContent = initial;
  //     } else {
  //       fields[i].setAttribute('style', '');
  //       fields[i].textContent = '...Loading';
  //       api
  //         .fetchComments()
  //         .then(() => api.setIsLoaded(true))
  //         .then(() => (fields[i].textContent = initial));
  //     }
  //   });
  // };
};

