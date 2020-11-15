'use strict';

class Model {
  constructor() {
    this.users = [];
    this.posts = [];
    this.comments = [];
    this.denorm = [];    
  }

  setUsers(users) {
    this.users = Array.from(users);
  }

  setPosts(posts) {
    this.posts = Array.from(posts);
  }

  setDenorm() {
    this.denorm = this.posts.reduce((acc, item)=>{
      let posts = [];      

      const user = this.users.filter((user)=>{
        posts = this.posts.filter((post)=>{
          const comments = this.comments.filter((comment) => comment.postId === post.id);
          Object.assign(post, {comments: comments})
          return post.userId===item.userId;
        });
        
        return user.id===item.userId
      });      
      
      acc.push({
        ...user[0],
        posts: posts,
        item: item,      
        })
      
      return acc;
    }, []);    
  }  
    
  setComments(comments) {
    this.comments = Array.from(comments);
  }

  getUsers() {
    return this.users;
  }

  getPosts() {
    return this.posts;
  }

  getComments() {
    return this.comments;
  }

  getDenorm() {
    return this.denorm;
  }
}
