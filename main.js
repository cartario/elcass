'use strict';

const model = new Model();
const api = new Api();

const fetchUsers = api.fetchUsers();
const fetchPosts = api.fetchPosts();

const fetchComments = api.fetchComments().then(() => api.setIsLoaded(true));

Promise.all([fetchUsers, fetchPosts, fetchComments]).then(() => {
  model.setDenorm();
  initialize();
});

const initialize = () => {
  document.body.insertAdjacentHTML('afterbegin', table);
  const tbody = document.querySelector('tbody');

  model.getDenorm().map((item) => {
    const raw = new Raw(item, api.isLoaded);
    tbody.insertAdjacentHTML('afterbegin', raw.getTemplate());
  });

  const handleClick = (item, i) => {
    const fields = document.querySelectorAll('tbody tr td:nth-child(3)');
    const initial = fields[i].textContent;

    item.addEventListener('click', () => {
      if (fields[i].hasAttribute('style')) {
        fields[i].removeAttribute('style');
        fields[i].textContent = initial;
      } else {
        fields[i].setAttribute('style', '');
        fields[i].textContent = '...Loading';
        api
          .fetchComments()
          .then(() => api.setIsLoaded(true))
          .then(() => (fields[i].textContent = initial));
      }
    });
  };
  document.querySelectorAll('tbody tr').forEach((item, i) => handleClick(item, i));
};
