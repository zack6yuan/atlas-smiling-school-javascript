function setNameOne() {
  fetch("https://smileschool-api.hbtn.info/quotes")
  .then(response => response.json())
  .then(data => {
    const nameFetch = document.getElementById("nameOne")
    nameFetch.textContent = data[0].name;
  })
  .catch(error => {
    console.error(error);
  })
}
setNameOne();

function setTitleOne() {
  fetch("https://smileschool-api.hbtn.info/quotes")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("titleOne")
    titleFetch.textContent = data[0].title;
  })
  .catch(error => {
    console.error(error)
  })
}
setTitleOne();

function setNameTwo() {
  fetch("https://smileschool-api.hbtn.info/quotes")
  .then(response => response.json())
  .then(data => {
    const nameFetch = document.getElementById("nameTwo")
    nameFetch.textContent = data[1].name;
  })
}
setNameTwo();

function setTitleTwo() {
  fetch("https://smileschool-api.hbtn.info/quotes")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("titleTwo")
    titleFetch.textContent = data[1].title;
  })
  .catch(error => {
    console.error(error)
  })
}
setTitleTwo();