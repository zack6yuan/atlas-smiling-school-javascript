$(document).ready(function () {
  // First Quote Block
  // Ajax request for the first quote image
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    dataType: "json",
    success: function () {
      const ImageFetch = document.getElementById("quotePicOne");
      ImageFetch.src = "https://smileschool-api.s3.amazonaws.com/profile_5.jpg";
    },
    error: function (error) {
      console.error(error);
    },
  });
  // Ajax request for quote content
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const quoteFetch = document.getElementById("quoteOne");
      quoteFetch.textContent = data[0].text;
    },
    error: function (error) {
      console.error(error);
    },
  });
  // Ajax request for quote author name
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const quoteFetch = document.getElementById("nameOne");
      quoteFetch.textContent = data[0].name;
    },
    error: function (error) {
      console.error(error);
    },
  });
  // Ajax request for quote author title
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const quoteFetch = document.getElementById("titleOne");
      quoteFetch.textContent = data[0].title;
    },
    error: function (error) {
      console.error(error);
    },
  });
  // Second quote block
  // Ajax request for the second quote image
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    dataType: "json",
    success: function() {
      const imageFetch = document.getElementById("quotePicTwo")
      imageFetch.src = "https://smileschool-api.s3.amazonaws.com/profile_2.jpg"
    },
    error: function(error) {
      console.error(error);
    }
  })
});
// Ajax request for quote content
$.ajax({
  url: "https://smileschool-api.hbtn.info/quotes",
  method: "GET",
  dataType: "json",
  success: function (data) {
    const quoteFetch = document.getElementById("quoteTwo");
    quoteFetch.textContent = data[1].text;
  },
  error: function (error) {
    console.error(error);
  },
});
// Ajax request for quote author name
$.ajax({
  url: "https://smileschool-api.hbtn.info/quotes",
  method: "GET",
  dataType: "json",
  success: function (data) {
    const quoteFetch = document.getElementById("nameTwo");
    quoteFetch.textContent = data[1].name;
  },
  error: function (error) {
    console.error(error);
  },
});
// Ajax request for quote author title
$.ajax({
  url: "https://smileschool-api.hbtn.info/quotes",
  method: "GET",
  dataType: "json",
  success: function (data) {
    const quoteFetch = document.getElementById("titleTwo");
    quoteFetch.textContent = data[1].title;
  },
  error: function (error) {
    console.error(error);
  },
});
// Video Section Functions
// Ajax request to set first video thumbnail
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function() {
    const thumbnailFetch = document.getElementById("thumbnailOne")
    thumbnailFetch.src = "https://smileschool-api.s3.amazonaws.com/thumbnail_1.jpg"
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for first video title
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoOne")
    titleFetch.textContent = data[0].title
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for first video creator pfp
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function() {
    const imageFetch = document.getElementById("creatorPicOne")
    imageFetch.src = "https://smileschool-api.s3.amazonaws.com/profile_1.jpg"
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for first video creator name (REVISE)
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("creatorOne")
    titleFetch.textContent = data[0].author
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for first video time
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("timeOne")
    titleFetch.textContent = data[0].duration
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for second video thumbnail
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function() {
    const thumbnailFetch = document.getElementById("thumbnailTwo")
    thumbnailFetch.src = "https://smileschool-api.s3.amazonaws.com/thumbnail_2.jpg"
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for second video title
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoTwo")
    titleFetch.textContent = data[1].title
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for second video creator pfp
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function() {
    const imageFetch = document.getElementById("creatorPicTwo")
    imageFetch.src = "https://smileschool-api.s3.amazonaws.com/profile_2.jpg"
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for second video creator name
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("creatorTwo")
    titleFetch.textContent = data[1].author
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for second video time
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("timeTwo")
    titleFetch.textContent = data[1].duration
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for third video thumbnail
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function() {
    const thumbnailFetch = document.getElementById("thumbnailThree")
    thumbnailFetch.src = "https://smileschool-api.s3.amazonaws.com/thumbnail_3.jpg"
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for third video name
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoThree")
    titleFetch.textContent = data[2].title
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for third video creator pfp
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("creatorPicThree")
    imageFetch.src = "https://smileschool-api.s3.amazonaws.com/profile_3.jpg"
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for third video creator name
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("creatorThree")
    titleFetch.textContent = data[2].author
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for third video time
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("timeThree")
    titleFetch.textContent = data[2].duration
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for fourth video thumbnail
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function() {
    const thumbnailFetch = document.getElementById("thumbnailFour")
    thumbnailFetch.src = "https://smileschool-api.s3.amazonaws.com/thumbnail_4.jpg"
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for fourth video name
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoFour")
    titleFetch.textContent = data[3].title
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for fourth video creator pfp
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function() {
    const imageFetch = document.getElementById("creatorPicFour")
    imageFetch.src = "https://smileschool-api.s3.amazonaws.com/profile_4.jpg"
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for fourth video creator name
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("creatorFour")
    titleFetch.textContent = data[3].author
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for fourth video time
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("timeFour")
    titleFetch.textContent = data[3].duration
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for fifth video thumbnail
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const thumbnailFetch = document.getElementById("thumbnailFive")
    thumbnailFetch.src = "https://smileschool-api.s3.amazonaws.com/thumbnail_5jpg"
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for fifth video name
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoFive")
    titleFetch.textContent = data[4].title
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for fifth video creator pfp
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("creatorPicFive")
    imageFetch.src = "https://smileschool-api.s3.amazonaws.com/profile_5.jpg"
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for fifth video creator name
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("creatorFive")
    titleFetch.textContent = data[4].author
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for fifth video time
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("timeFive")
    titleFetch.textContent = data[4].duration
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for sixth video thumbnail
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const thumbnailFetch = document.getElementById("thumbnailSix")
    thumbnailFetch.src = "https://smileschool-api.s3.amazonaws.com/thumbnail_6jpg"
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for sixth video name
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoSix")
    titleFetch.textContent = data[5].title
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for sixth video creator pfp
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("creatorPicSix")
    imageFetch.src = "https://smileschool-api.s3.amazonaws.com/profile_6.jpg"
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for sixth video creator name
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("creatorSix")
    titleFetch.textContent = data[5].author
  },
  error: function(error) {
    console.error(error)
  },
});
// Ajax request for sixth video time
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("timeSix")
    titleFetch.textContent = data[5].duration
  },
  error: function(error) {
    console.error(error)
  },
});