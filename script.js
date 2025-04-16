$(document).ready(function () {
  // First Quote Block
  // Ajax request for the first quote image
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    dataType: "json",
    success: function (data) {
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
    success: function(data) {
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