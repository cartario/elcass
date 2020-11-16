'use strict';

(function(){
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

  window.utilsPage = {
    render, rerender, createElement
  }  
})();
