'use strict';

(function () {
  const { Api, model } = window.apiPage;
  const { render, createElement } = window.utilsPage;
  const { table, Raw } = window.componentsPage;

  render(document.body, table);
  const tbody = table.querySelector('tbody');

  const api = new Api();

  const fetchUsers = api.fetchUsers();
  const fetchPosts = api.fetchPosts();
  const fetchComments = api.fetchComments();

  Promise.all([fetchUsers, fetchPosts, fetchComments])
    .then(() => {
      model.setModel();
    })
    .then(() => {
      model.getModel().map((item, index) => {
        const raw = new Raw(item);
        render(tbody, raw.getElement());
        raw.setClickHandler(() => handlerClick(raw, index));
      });

      const handlerClick = (raw, index) => {       
        const items = Array.from(document.querySelectorAll('.comment'));
        items[index].textContent = '...Loading';
        api.fetchComments().then(() => {
          raw.rerender();
        });
      };
    })
    .catch((err) => {
      render(tbody, createElement('<div>Что-то пошло не так</div>'))
      throw err;
    });
})();
