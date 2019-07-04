// Get All List Items

var listItems = document.getElementsByTagName("li");
console.log(listItems);
for (i = 0; i < 5; i++) {
  listItems[i].style.color = "red";
}

var imagesItems = document.getElementsByTagName("img");
console.log(imagesItems);
