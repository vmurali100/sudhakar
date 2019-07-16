function getSelected() {
  index = document.getElementById("mySelect").value;
  document.getElementById("topicInput").value = data[index - 1].topicName;
}

function getLatestData() {
  var getLatest = new XMLHttpRequest();
  getLatest.onreadystatechange = function() {
    if (getLatest.readyState == 4 && getLatest.status == 200) {
      data = JSON.parse(getLatest.response);
      displayData(data);
    }
  };
  getLatest.open("GET", "http://localhost:3000/HTML");
  getLatest.send();
}

function displayData(data) {
  document.getElementById("mySelect").innerHTML = "";
  for (i = 0; i < data.length; i++) {
    var opt = document.createElement("option");
    opt.innerHTML = data[i].topicName;
    opt.setAttribute("value", data[i].id);
    document.getElementById("mySelect").appendChild(opt);
  }
}
function clearForm() {
  document.getElementById("topicInput").value = "";
}
getLatestData();
