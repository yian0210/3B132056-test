function getUserName(){
  const name = document.getElementById("userName").value;
  showMessage(name);
}

function showMessage(name){
  document.getElementById("resultUser").textContent = name + "，安安你好！";
}
