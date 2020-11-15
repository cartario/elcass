'use strict';

const table = `
  <table>
    <thead>
      <tr>
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
  </table>`; 

  class Raw {
    constructor({ name: name, item: post, item: count}, isLoaded) {
      
      this.name = name;
      this.post = post.title;
      this.count = count.comments.length;
      this.isLoaded = isLoaded;
    }

    getTemplate() {
      return `
        <tr>
          <td>
            ${this.name}
          </td>
          <td>
            ${this.post}
          </td>
          <td>
            ${this.isLoaded? this.count : "...Loading"}
          </td>
        </tr>`;
    }
  };
