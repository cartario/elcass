'use strict';

class Api {
  constructor(){
    this.baseUrl = 'https://jsonplaceholder.typicode.com';    
  }

  fetchUsers(){
    return fetch(`${this.baseUrl}/users`).then((res)=>res.json())
    .then((json) => {
      model.setUsers(json);
    }).catch((err)=>console.log(err));
  }

  fetchPosts(){
    return fetch(`${this.baseUrl}/posts`).then((res)=>res.json())
    .then((json) => {
      model.setPosts(json);
    }).catch((err)=>console.log(err));
  }

  fetchComments(){    
    return fetch(`${this.baseUrl}/comments`)
    .then((res)=> res.json())
    .then((json) => {        
      model.setComments(json);      
    }).catch((err)=>console.log(err))
  }
}
