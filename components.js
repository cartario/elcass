'use strict';

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const table = createElement(`<table>
    <thead>
      <tr style="display: flex; justify-content: space-between">
        <td>
          Имя автора
        </td>
        <td>
          Название поста
        </td>
        <td>
          Количество комментариев
        </td>
      </tr>
    </thead>
    <tbody>
    </tbody>  
  </table>`);

class Raw {
  constructor({ name: name, item: post, item: count }, isLoaded) {
    
    this.name = name;
    this.post = post.title;
    this.count = count.comments.length;
    this.isLoaded = isLoaded;
    this.element = null;    
  }

  getTemplate() {
    return `<div class="raw" style="display: flex;justify-content: space-between">
      <div class="name" >
      ${this.name}
    </div>
    <div class="post">
      ${this.post}
    </div>
    <div class="comment" style="color:blue">
      ${!!this.isLoaded? this.count : '...Loading'}
    </div>
  </div>`;
  }

  getElement() {
    if(!this.element){
      this.element = createElement(this.getTemplate());  
    }      
    return this.element;
  }

  setClickHandler(handler) {
    this.handler=handler;
    this.element.addEventListener('click', this.handler);            
  }

  removeElement(){
    this.element=null;
  }

  rerender() {
    const oldElement = this.getElement();
    const parent = oldElement.parentElement;
    this.removeElement();
    const newElement = this.getElement();
    parent.replaceChild(newElement, oldElement);
    this.setClickHandler(this.handler);    
  }
}
