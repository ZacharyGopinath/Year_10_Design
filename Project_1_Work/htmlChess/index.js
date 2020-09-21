function change(){
  var docId = event.srcElement.id;
  var docId = docId.toUpperCase()
  console.log(docId)
  document.getElementById(docId).id = docId.toLowerCase();
}