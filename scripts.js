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
    titleFetch.textContent = data[2].title
  })
}
setVideoNameThree();

function setCreatorThree() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("creatorThree")
    titleFetch.textContent = data[2].author
  })
}
setCreatorThree();

function setVideoNameFour() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("videoFour")
    titleFetch.textContent = data[3].title
  })
}
setVideoNameFour();

function setCreatorFour() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("creatorFour")
    titleFetch.textContent = data[3].author
  })
}
setCreatorFour();

function setTImeOne() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const timeFetch = document.getElementById("timeOne")
    timeFetch.textContent = data[0].duration
  })
}
setTImeOne();

function setTImeTwo() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const timeFetch = document.getElementById("timeTwo")
    timeFetch.textContent = data[1].duration
  })
}
setTImeTwo();

function setTImeThree() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const timeFetch = document.getElementById("timeThree")
    timeFetch.textContent = data[2].duration
  })
}
setTImeThree();

function setTImeFour() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const timeFetch = document.getElementById("timeFour")
    timeFetch.textContent = data[3].duration
  })
}
setTImeFour();

function setVideoNameFive() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("videoFive")
    titleFetch.textContent = data[4].title
  })
}
setVideoNameFive();

function setVideoNameSix() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("videoSix")
    titleFetch.textContent = data[5].title
  })
}
setVideoNameSix();

function setCreatorFive() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("creatorFive")
    titleFetch.textContent = data[4].author
  })
}
setCreatorFive();

function setCreatorSix() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("creatorSix")
    titleFetch.textContent = data[5].author
  })
}
setCreatorSix();

function setTImeFive() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const timeFetch = document.getElementById("timeFive")
    timeFetch.textContent = data[4].duration
  })
}
setTImeFive();

function setTImeSix() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const timeFetch = document.getElementById("timeSix")
    timeFetch.textContent = data[5].duration
  })
}
setTImeSix();