function update() {
  var obj = {
    topicName: document.getElementById("topicInput").value,
    id: Number(index)
  };
  console.log(obj);

  var upd = new XMLHttpRequest();
  upd.onreadystatechange = function() {
    if (upd.readyState == 4 && upd.status == 200) {
      console.log("Abdul ***************************Updated");
      // location.reload();
      getLatestData();
    }
  };
  upd.open("PUT", "http://localhost:3000/HTML/" + obj.id);
  upd.setRequestHeader("Content-type", "application/json");
  upd.send(JSON.stringify(obj));
}
