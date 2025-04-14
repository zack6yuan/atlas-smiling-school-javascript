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

function setQuoteOne() {
  fetch("https://smileschool-api.hbtn.info/quotes")
  .then(response => response.json())
  .then(data => {
    const quoteFetch = document.getElementById("quoteOne")
    quoteFetch.textContent = data[0].text
  })
}
setQuoteOne();

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

function setQuoteTwo() {
  fetch("https://smileschool-api.hbtn.info/quotes")
  .then(response => response.json())
  .then(data => {
    const quoteFetch = document.getElementById("quoteTwo")
    quoteFetch.textContent = data[1].text;
  })
  .catch(error => {
    console.error(error)
  })
}
setQuoteTwo();

function setImageTwo() {
  fetch("https://smileschool-api.hbtn.info/quotes")
  .then(response => response.json())
  .then(data => {
    const imageFetch = document.getElementById("imageTwo")
    imageFetch.src = imageFetch.src = data[1].image;
  })
  .catch(error => {
    console.error(error)
  })
}
setImageTwo();

function setVideoNameOne() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("videoOne")
    titleFetch.textContent = data[0].title;
  })
}
setVideoNameOne();

function setVideoNameTwo() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("videoTwo")
    titleFetch.textContent = data[1].title;
  })
}
setVideoNameTwo();

function setCreatorOne() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("creatorOne")
    titleFetch.textContent = data[0].author;
  })
}
setCreatorOne();

function setCreatorTwo() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("creatorTwo")
    titleFetch.textContent = data[1].author;
  })
}
setCreatorTwo();

function setVideoNameThree() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("videoThree")
    titleFetch.textContent = data[0].title
  })
}
setVideoNameThree();