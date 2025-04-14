/* function getFirstQuote() {
  fetch("https://smileschool-api.hbtn.info/quotes")
  .then(response => response.json())
  .then(data => {
    const textData = document.getElementById("firstQuote")
    textData.textContent = data.text;
  })
  .catch(error => {
    console.error(error);
  })
}
getFirstQuote(); */

function setNameOne() {
  fetch("https://smileschool-api.hbtn.info/quotes")
  .then(response => response.json())
  .then(data => {
    const textData = document.getElementById("nameOne")
    textData.textContent = data[0].name;
  })
  .catch(error => {
    console.error(error);
  })
}
setNameOne();

function setJobOne() {
  
}