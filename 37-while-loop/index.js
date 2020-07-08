var secretPassword = 'coders.tokyo';
var readline = require('readline-sync');



do{
  var result = readline.question('Nhập vào mật khẩu: ');
  if(result === secretPassword){
    console.log('Welcome!');
  }
  else{
    console.log('Wrong password');
  }
}while(result !== secretPassword);

console.log(result);