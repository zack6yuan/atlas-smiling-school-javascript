// Quote Section Functions

// First Quote
function setImageOne() {
  fetch("https://smileschool-api.hbtn.info/quotes")
  .then(response => response.json())
  .then(data => {
    const imageFetch = document.getElementById("quotePicOne")
    imageFetch.src = "https://smileschool-api.s3.amazonaws.com/profile_5.jpg"
  })
  .catch(error => {
    console.error(error);
  })
}
setImageOne();

function setQuoteOne() {
  fetch("https://smileschool-api.hbtn.info/quotes")
  .then(response => response.json())
  .then(data => {
    const quoteFetch = document.getElementById("quoteOne")
    quoteFetch.textContent = data[0].text
  })
  .catch(error => {
    console.error(error);
  })
}
setQuoteOne();

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

// Second Quote
function setImageTwo() {
  fetch("https://smileschool-api.hbtn.info/quotes")
  .then(response => response.json())
  .then(data => {
    const imageFetch = document.getElementById("quotePicTwo")
    imageFetch.src = "https://smileschool-api.s3.amazonaws.com/profile_2.jpg"
  })
  .catch(error => {
    console.error(error);
  })
}
setImageTwo();

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

function setNameTwo() {
  fetch("https://smileschool-api.hbtn.info/quotes")
  .then(response => response.json())
  .then(data => {
    const nameFetch = document.getElementById("nameTwo")
    nameFetch.textContent = data[1].name;
  })
  .catch(error => {
    console.error(error);
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

// Video Section Functions

// First Video
function setThumbnailOne() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const thumbnailFetch = document.getElementById("thumbnailOne")
    thumbnailFetch.src = "https://smileschool-api.s3.amazonaws.com/thumbnail_1.jpg"
  })
  .catch(error => {
    console.error(error)
  })
}
setThumbnailOne();

function setVideoNameOne() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("videoOne")
    titleFetch.textContent = data[0].title;
  })
  .catch(error => {
    console.error(error);
  })
}
setVideoNameOne();

function setCreatorOne() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("creatorOne")
    titleFetch.textContent = data[0].author;
  })
  .catch(error => {
    console.error(error);
  })
}
setCreatorOne();

function setStarsOne() {
 // TODO
}
setStarsOne();

function setTimeOne() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const timeFetch = document.getElementById("timeOne")
    timeFetch.textContent = data[0].duration
  })
  .catch(error => {
    console.error(error);
  })
}
setTimeOne();

// Second Video
function setThumbnailTwo() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const thumbnailFetch = document.getElementById("thumbnailTwo")
    thumbnailFetch.src = "https://smileschool-api.s3.amazonaws.com/thumbnail_2.jpg"
  })
  .catch(error => {
    console.error(error)
  })
}
setThumbnailTwo();

function setVideoNameTwo() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("videoTwo")
    titleFetch.textContent = data[1].title;
  })
  .catch(error => {
    console.error(error);
  })
}
setVideoNameTwo();

function setPicTwo() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const imageFetch = document.getElementById("creatorPicTwo")
    imageFetch.src = "https://smileschool-api.s3.amazonaws.com/profile_2.jpg"
  })
  .catch(error => {
    console.error(error);
  })
}
setPicTwo();

function setCreatorTwo() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("creatorTwo")
    titleFetch.textContent = data[1].author;
  })
  .catch(error => {
    console.error(error);
  })
}
setCreatorTwo();

function setStarsTwo() {
  // TODO
}
setStarsTwo();

function setTimeTwo() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const timeFetch = document.getElementById("timeTwo")
    timeFetch.textContent = data[1].duration
  })
  .catch(error => {
    console.error(error);
  })
}
setTimeTwo();

// Third Video
function setThumbnailThree() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const thumbnailFetch = document.getElementById("thumbnailThree")
    thumbnailFetch.src = "https://smileschool-api.s3.amazonaws.com/thumbnail_3.jpg"
  })
  .catch(error => {
    console.error(error)
  })
}
setThumbnailThree();

function setVideoNameThree() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("videoThree")
    titleFetch.textContent = data[2].title
  })
  .catch(error => {
    console.error(error);
  })
}
setVideoNameThree();

function setPicThree() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const imageFetch = document.getElementById("creatorPicThree")
    imageFetch.src = "https://smileschool-api.s3.amazonaws.com/profile_3.jpg"
  })
  .catch(error => {
    console.error(error);
  })
}
setPicThree();

function setCreatorThree() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("creatorThree")
    titleFetch.textContent = data[2].author
  })
  .catch(error => {
    console.error(error);
  })
}
setCreatorThree();

function setStarsThree() {
  // TODO
}
setStarsThree()

function setTimeThree() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const timeFetch = document.getElementById("timeThree")
    timeFetch.textContent = data[2].duration
  })
  .catch(error => {
    console.error(error);
  })
}
setTimeThree();

// Fourth Video
function setThumbnailFour() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const thumbnailFetch = document.getElementById("thumbnailFour")
    thumbnailFetch.src = "https://smileschool-api.s3.amazonaws.com/thumbnail_4.jpg"
  })
  .catch(error => {
    console.error(error)
  })
}
setThumbnailFour();

function setVideoNameFour() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("videoFour")
    titleFetch.textContent = data[3].title
  })
  .catch(error => {
    console.error(error);
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
  .catch(error => {
    console.error(error);
  })
}
setCreatorFour();

function setStarsFour() {
  // TODO
}
setStarsFour();

function setTimeFour() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const timeFetch = document.getElementById("timeFour")
    timeFetch.textContent = data[3].duration
  })
  .catch(error => {
    console.error(error);
  })
}
setTimeFour();

// Fifth Video
function setVideoNameFive() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("videoFive")
    titleFetch.textContent = data[4].title
  })
  .catch(error => {
    console.error(error);
  })
}
setVideoNameFive();

function setCreatorFive() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("creatorFive")
    titleFetch.textContent = data[4].author
  })
  .catch(error => {
    console.error(error);
  })
}
setCreatorFive();

function setStarsFive() {
  // TODO
}
setStarsFive();

function setTimeFive() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const timeFetch = document.getElementById("timeFive")
    timeFetch.textContent = data[4].duration
  })
  .catch(error => {
    console.error(error);
  })
}
setTimeFive();

// Sixth Video
function setVideoNameSix() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("videoSix")
    titleFetch.textContent = data[5].title
  })
  .catch(error => {
    console.error(error);
  })
}
setVideoNameSix();

function setCreatorSix() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const titleFetch = document.getElementById("creatorSix")
    titleFetch.textContent = data[5].author
  })
  .catch(error => {
    console.error(error);
  })
}
setCreatorSix();

function setStarsSix() {
  // TODO
}
setStarsSix();

function setTimeSix() {
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
  .then(response => response.json())
  .then(data => {
    const timeFetch = document.getElementById("timeSix")
    timeFetch.textContent = data[5].duration
  })
  .catch(error => {
    console.error(error);
  })
}
setTimeSix();