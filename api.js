'use strict';

class Api {
  constructor(){
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
    this.isLoaded = false;    
  }
  setIsLoaded(value){
    this.isLoaded = value;
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
    this.setIsLoaded(false);   
    return fetch(`${this.baseUrl}/comments`)
    .then((res)=> res.json())
    .then((json) => {        
      model.setComments(json); 
      this.setIsLoaded(true);      
    }).catch((err)=>console.log(err))
  }
}
