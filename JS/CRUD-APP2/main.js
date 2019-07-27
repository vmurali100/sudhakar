function getData() {
  var obj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    userName: document.getElementById("userName").value,
    password: document.getElementById("password").value,
    company: document.getElementById("company").value,
    country: document.getElementById("country").value,
    time: document.getElementById("time").value
  };
  sendData(obj);
}

function sendData(obj) {
  var sendInfo = new XMLHttpRequest();
  sendInfo.onreadystatechange = function() {
    if (sendInfo.readyState == 4 && sendInfo.status == 201) {
      console.log("user added");
      window.location = "allUsers.html";
    }
  };
  sendInfo.open("POST", "http://localhost:3000/users");
  sendInfo.setRequestHeader("Content-type", "application/json");
  sendInfo.send(JSON.stringify(obj));
}

function getUser() {
  let obj = JSON.parse(localStorage.getItem("obj"));
  if (obj != null) {
    if (obj.isEdit) {
      getDataFromServer(obj);
    }
  }
}

getUser();

function getDataFromServer(obj) {
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function() {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      var data = JSON.parse(getInfo.response);
      console.log(data[obj.index]);
      displayinForm(data[obj.index]);
    }
  };
  getInfo.open("GET", "http://localhost:3000/users");
  getInfo.send();
}

function displayinForm(obj) {
  for (a in obj) {
    if (a != "id") {
      document.getElementById(a).value = obj[a];
    }
  }
}

function updateUser() {
  var updatedObj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    userName: document.getElementById("userName").value,
    password: document.getElementById("password").value,
    company: document.getElementById("company").value,
    country: document.getElementById("country").value,
    time: document.getElementById("time").value
  };
  let obj = JSON.parse(localStorage.getItem("obj"));
  let ind = obj.index + 1;
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function() {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      var data = JSON.parse(getInfo.response);
      console.log(data);
      window.location = "allUsers.html";
    }
  };
  getInfo.open("PUT", "http://localhost:3000/users/" + ind);
  getInfo.setRequestHeader("Content-type", "application/json");
  getInfo.send(JSON.stringify(updatedObj));
}
