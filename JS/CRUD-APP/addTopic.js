function addTopic() {
  var val = document.getElementById("topic").value;
  var obj = {
    topicName: val,
    id: null
  };
  console.log(val);
  var sendData = new XMLHttpRequest();
  sendData.onreadystatechange = function() {
    if (sendData.readyState == 4 && sendData.status == 201) {
      console.log(sendData.response);
      getLatestData();
    }
  };
  sendData.open("POST", "http://localhost:3000/HTML");
  sendData.setRequestHeader("Content-type", "application/json");
  sendData.send(JSON.stringify(obj));
}
