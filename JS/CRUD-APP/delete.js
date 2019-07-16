function deleteTopic() {
  console.log(index);
  var delTopic = new XMLHttpRequest();
  delTopic.onreadystatechange = function() {
    if (delTopic.readyState == 4 && delTopic.status == 200) {
      console.log("Abdul delted the topic");
      getLatestData();
      clearForm();
    }
  };
  delTopic.open("DELETE", "http://localhost:3000/HTML/" + index);
  delTopic.setRequestHeader("Content-type", "application/json");
  delTopic.send();
}
