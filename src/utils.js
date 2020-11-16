'use strict';

(function(){
  const DEBOUNCE_INTERVAL = 500;

  const debounce = function (fun) {
    let lastTimeout = null;
    return function () {
      const args = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        fun.apply(null, args);
      }, DEBOUNCE_INTERVAL);
    };
  };

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
    render, rerender, createElement, debounce
  }  
})();
