'use strict';

(function () {
  const { Model } = window.modelPage;
  const model = new Model();

  class Api {
    constructor() {
      this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    fetchUsers() {
      return fetch(`${this.baseUrl}/users`)
        .then((res) => res.json())
        .then((json) => {
          model.setUsers(json);
        })
        .catch((err) => {
          throw err;
        });
    }

    fetchPosts() {
      return fetch(`${this.baseUrl}/posts`)
        .then((res) => res.json())
        .then((json) => {
          model.setPosts(json);
        })
        .catch((err) => {
          throw err;
        });
    }

    fetchComments() {
      return fetch(`${this.baseUrl}/comments`)
        .then((res) => res.json())
        .then((json) => {
          model.setComments(json);
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  window.apiPage = {
    Api,
    model,
  };
})();
