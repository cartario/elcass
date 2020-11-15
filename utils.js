'use strict';

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

const render = (container, component) => {  
  container.append(component)
}

const rerender = (old, newComponent) => {  
  old.parentElement.replaceChild(newComponent, old);  
};

const handlerClick = (raw, index) => {  
  raw.rerender(); 
  const items = Array.from(document.querySelectorAll('.comment'));  
  items[index].textContent = '...Loading';
  api.fetchComments().then(()=>{    
    raw.rerender();    
  });  
};
