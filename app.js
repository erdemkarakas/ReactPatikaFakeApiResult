import axios from "axios";


async function getData() {
  const getUsers = (user_id) => {
      return new Promise(async (resolve, reject) => {
          const { data : User } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);

          resolve(User);
          reject("Error!")
      });
  };
      
  const getPost = (user_id) => {
      return new Promise(async(resolve, reject) => {
          const { data : Post } = await  axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);
          
          resolve(Post);
          reject("Error!")
      });
  };
  Promise.all([getUsers(1), getPost(1)]).then(console.log).catch(console.log);
};


  export default getData;

