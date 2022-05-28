const createUser = (name ,pass) => {
  let user = {};
  user.pass = pass;
  user.name = name;
  return user;
}

function User(name,pass){
  this.pass = pass;
  this.name = name;
  this.sayHello = (val) => val+ ' hee hee ' + this.name;

  this.getPass = () => this.pass;
  this.setPass = (val) => this.pass = val;

}




/* let pedro = createUser('pedro','123123'); */

allTodos = [];

let maria = new User('maria','asdasd');
let pedro = new User('pedro','asdasd');



console.log(pedro);
console.log(maria);