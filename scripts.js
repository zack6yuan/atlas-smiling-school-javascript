$(document).ready(function () {
  // First Quote Block
  // Ajax request for the first quote image
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const ImageFetch = document.getElementById("quotePicOne");
      ImageFetch.src = data[0].pic_url;
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
    success: function (data) {
      const imageFetch = document.getElementById("quotePicTwo")
      imageFetch.src = data[1].pic_url;
    },
    error: function (error) {
      console.error(error);
    }
  })
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
    success: function (data) {
      const thumbnailFetch = document.getElementById("thumbnailOne")
      thumbnailFetch.src = data[0].thumb_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for first video title
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("videoOne")
      titleFetch.textContent = data[0].title
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for first video creator pfp
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const imageFetch = document.getElementById("creatorPicOne")
      imageFetch.src = data[0].author_pic_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for first video creator name (REVISE)
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("creatorOne")
      titleFetch.textContent = data[0].author
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for first video time
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("timeOne")
      titleFetch.textContent = data[0].duration
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for second video thumbnail
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const thumbnailFetch = document.getElementById("thumbnailTwo")
      thumbnailFetch.src = data[1].thumb_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for second video title
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("videoTwo")
      titleFetch.textContent = data[1].title
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for second video creator pfp
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const imageFetch = document.getElementById("creatorPicTwo")
      imageFetch.src = data[1].author_pic_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for second video creator name
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("creatorTwo")
      titleFetch.textContent = data[1].author
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for second video time
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("timeTwo")
      titleFetch.textContent = data[1].duration
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for third video thumbnail
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const thumbnailFetch = document.getElementById("thumbnailThree")
      thumbnailFetch.src = data[2].thumb_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for third video name
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("videoThree")
      titleFetch.textContent = data[2].title
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for third video creator pfp
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const imageFetch = document.getElementById("creatorPicThree")
      imageFetch.src = data[2].author_pic_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for third video creator name
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("creatorThree")
      titleFetch.textContent = data[2].author
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for third video time
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("timeThree")
      titleFetch.textContent = data[2].duration
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for fourth video thumbnail
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const thumbnailFetch = document.getElementById("thumbnailFour")
      thumbnailFetch.src = data[3].thumb_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for fourth video name
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("videoFour")
      titleFetch.textContent = data[3].title
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for fourth video creator pfp
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const imageFetch = document.getElementById("creatorPicFour")
      imageFetch.src = data[3].author_pic_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for fourth video creator name
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("creatorFour")
      titleFetch.textContent = data[3].author
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for fourth video time
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("timeFour")
      titleFetch.textContent = data[3].duration
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for fifth video thumbnail
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const thumbnailFetch = document.getElementById("thumbnailFive")
      thumbnailFetch.src = data[4].thumb_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for fifth video name
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("videoFive")
      titleFetch.textContent = data[4].title
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for fifth video creator pfp
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const imageFetch = document.getElementById("creatorPicFive")
      imageFetch.src = data[4].author_pic_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for fifth video creator name
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("creatorFive")
      titleFetch.textContent = data[4].author
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for fifth video time
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("timeFive")
      titleFetch.textContent = data[4].duration
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for sixth video thumbnail
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const thumbnailFetch = document.getElementById("thumbnailSix")
      thumbnailFetch.src = data[5].thumb_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for sixth video name
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("videoSix")
      titleFetch.textContent = data[5].title
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for sixth video creator pfp
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const imageFetch = document.getElementById("creatorPicSix")
      imageFetch.src = data[5].author_pic_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for sixth video creator name
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("creatorSix")
      titleFetch.textContent = data[5].author
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for sixth video time
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("timeSix")
      titleFetch.textContent = data[5].duration
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for seventh video thumbnail
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const thumbnailFetch = document.getElementById("thumbnailSeven")
      thumbnailFetch.src = data[6].thumb_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for seventh video name
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("videoSeven")
      titleFetch.textContent = data[6].title
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for seventh video creator pfp
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const imageFetch = document.getElementById("creatorPicSeven")
      imageFetch.src = data[6].author_pic_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for seventh video creator name
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("creatorSeven")
      titleFetch.textContent = data[6].author
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Ajax request for seventh video time
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const titleFetch = document.getElementById("timeSeven")
      titleFetch.textContent = data[6].duration
    },
    error: function (error) {
      console.error(error)
    },
  });
  // Latest videos section
  $.ajax({
    url: "https://smileschool-api.hbtn.info/latest-videos",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const thumbnailFetch = document.getElementById("latestThumbOne")
      thumbnailFetch.src = data[0].thumb_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  $.ajax({
    url: "https://smileschool-api.hbtn.info/latest-videos",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const thumbnailFetch = document.getElementById("latestThumbTwo")
      thumbnailFetch.src = data[1].thumb_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  $.ajax({
    url: "https://smileschool-api.hbtn.info/latest-videos",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const thumbnailFetch = document.getElementById("latestThumbThree")
      thumbnailFetch.src = data[2].thumb_url;
    },
    error: function (error) {
      console.error(error)
    },
  });
  $.ajax({
    url: "https://smileschool-api.hbtn.info/latest-videos",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const thumbnailFetch = document.getElementById("latestThumbFour")
      thumbnailFetch.src = data[3].thumb_url;
    },
    error: function (error) {
      console.error(error)
    },
  });

  // Pricing Page
  // Ajax request for the first quote image
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const ImageFetch = document.getElementById("pricingPicOne");
      ImageFetch.src = data[0].pic_url;
    },
    error: function (error) {
      console.error(error);
    },
  });
  // Ajax request for the second quote image
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const ImageFetch = document.getElementById("pricingPicTwo");
      ImageFetch.src = data[1].pic_url;
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
      const quoteFetch = document.getElementById("pricingNameOne");
      quoteFetch.textContent = data[0].name;
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
      const quoteFetch = document.getElementById("pricingNameTwo");
      quoteFetch.textContent = data[1].name;
    },
    error: function (error) {
      console.error(error);
    },
  });
  // Ajax request for pricing title one
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const quoteFetch = document.getElementById("pricingTitleOne");
      quoteFetch.textContent = data[0].title;
    },
    error: function (error) {
      console.error(error);
    },
  });
  // Ajax request for pricing title Two
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const quoteFetch = document.getElementById("pricingTitleTwo");
      quoteFetch.textContent = data[1].title;
    },
    error: function (error) {
      console.error(error);
    },
  });
  // Ajax request for first quote content
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const quoteFetch = document.getElementById("pricingQuoteOne");
      quoteFetch.textContent = data[0].text;
    },
    error: function (error) {
      console.error(error);
    },
  });
  // Ajax request for first quote content
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    dataType: "json",
    success: function (data) {
      const quoteFetch = document.getElementById("pricingQuoteTwo");
      quoteFetch.textContent = data[1].text;
    },
    error: function (error) {
      console.error(error);
    },
  });
  // Topics dropdown
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    dataType: "json",
    success: function(data) {
      const topicSelect = document.getElementById("noviceOption")
      topicSelect.textContent = data[1].topic
    },
    error: function(error) {
      console.error(error);
    }
  })
  $.ajax({
    url: "https://smileschool-api.hbtn.info/courses",
    method: "GET",
    dataType: "json",
    success: function(data) {
      const topicSelect = document.getElementById("intermediateOption")
      topicSelect.textContent = data.topics[2]
    }
  })
});
// Ajax request for second video thumbnail
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function (data) {
    const thumbnailFetch = document.getElementById("thumbnailTwo")
    thumbnailFetch.src = data[1].thumb_url;
  },
  error: function (error) {
    console.error(error)
  },
});
// Ajax request for second video title
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function (data) {
    const titleFetch = document.getElementById("latestVideoTwo")
    titleFetch.textContent = data[1].title
  },
  error: function (error) {
    console.error(error)
  },
});
// Ajax request for second video creator pfp
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function (data) {
    const imageFetch = document.getElementById("latestCreatorPicTwo")
    imageFetch.src = data[1].author_pic_url;
  },
  error: function (error) {
    console.error(error)
  },
});
// Ajax request for second video creator name
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function (data) {
    const titleFetch = document.getElementById("creatorTwo")
    titleFetch.textContent = data[1].author
  },
  error: function (error) {
    console.error(error)
  },
});
// Ajax request for second video time
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function (data) {
    const titleFetch = document.getElementById("timeTwo")
    titleFetch.textContent = data[1].duration
  },
  error: function (error) {
    console.error(error)
  },
});
// Ajax request for third video creator pfp
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function (data) {
    const imageFetch = document.getElementById("latestCreatorPicThree")
    imageFetch.src = data[2].author_pic_url;
  },
  error: function (error) {
    console.error(error)
  },
});
// Ajax request for second video creator name
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function (data) {
    const titleFetch = document.getElementById("latestCreatorNameTwo")
    titleFetch.textContent = data[1].author
  },
  error: function (error) {
    console.error(error)
  },
});
// Ajax request for third video creator name
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function (data) {
    const titleFetch = document.getElementById("latestCreatorNameThree")
    titleFetch.textContent = data[2].author
  },
  error: function (error) {
    console.error(error)
  },
});
// Set first video time
$.ajax({
  url: "https://smileschool-api.hbtn.info/latest-videos",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("latestTimeOne")
    timeFetch.textContent = data[0].duration
  }
})
// Set second video time
$.ajax({
  url: "https://smileschool-api.hbtn.info/latest-videos",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("latestTimeTwo")
    timeFetch.textContent = data[1].duration
  }
})
// Set third video time
$.ajax({
  url: "https://smileschool-api.hbtn.info/latest-videos",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("latestTimeThree")
    timeFetch.textContent = data[2].duration
  }
})
// Set fourth video time
$.ajax({
  url: "https://smileschool-api.hbtn.info/latest-videos",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("latestTimeFour")
    timeFetch.textContent = data[3].duration
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const optionFetch = document.getElementById("noviceOption")
    optionFetch.textContent = data[2].topic;
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const optionFetch = document.getElementById("intermediateOption")
    optionFetch.textContent = data[0].topic;
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const optionFetch = document.getElementById("expertOption")
    optionFetch.textContent = data[3].topic;
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("videoThumbOne")
    imageFetch.src = data.courses[0].thumb_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoTitleOne")
    titleFetch.textContent = data.courses[0].title
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("videoThumbTwo")
    imageFetch.src = data.courses[1].thumb_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoTitleTwo")
    titleFetch.textContent = data.courses[1].title
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("videoThumbThree")
    imageFetch.src = data.courses[2].thumb_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoTitleThree")
    titleFetch.textContent = data.courses[2].title
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("videoThumbFour")
    imageFetch.src = data.courses[3].thumb_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoTitleFour")
    titleFetch.textContent = data.courses[3].title
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("videoThumbFive")
    imageFetch.src = data.courses[4].thumb_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoTitleFive")
    titleFetch.textContent = data.courses[4].title
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("videoThumbSix")
    imageFetch.src = data.courses[5].thumb_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoTitleSix")
    titleFetch.textContent = data.courses[5].title
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("videoThumbSeven")
    imageFetch.src = data.courses[6].thumb_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoTitleSeven")
    titleFetch.textContent = data.courses[6].title
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("videoThumbEight")
    imageFetch.src = data.courses[7].thumb_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoTitleEight")
    titleFetch.textContent = data.courses[7].title
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("videoThumbNine")
    imageFetch.src = data.courses[8].thumb_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoTitleNine")
    titleFetch.textContent = data.courses[8].title
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("videoThumbTen")
    imageFetch.src = data.courses[9].thumb_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoTitleTen")
    titleFetch.textContent = data.courses[9].title
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("videoThumbEleven")
    imageFetch.src = data.courses[10].thumb_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("videoTitleEleven")
    titleFetch.textContent = data.courses[10].title
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("courseCreatorOne")
    titleFetch.textContent = data.courses[0].author
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("courseCreatorTwo")
    titleFetch.textContent = data.courses[1].author
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("courseCreatorThree")
    titleFetch.textContent = data.courses[2].author
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("courseCreatorFour")
    titleFetch.textContent = data.courses[3].author
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("courseCreatorFive")
    titleFetch.textContent = data.courses[4].author
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("courseCreatorSix")
    titleFetch.textContent = data.courses[5].author
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("courseCreatorSeven")
    titleFetch.textContent = data.courses[6].author
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("courseCreatorEight")
    titleFetch.textContent = data.courses[7].author
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("courseCreatorNine")
    titleFetch.textContent = data.courses[8].author
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("courseCreatorTen")
    titleFetch.textContent = data.courses[9].author
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const titleFetch = document.getElementById("courseCreatorEleven")
    titleFetch.textContent = data.courses[10].author
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("profilePicOne")
    imageFetch.src = data.courses[0].author_pic_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("profilePicTwo")
    imageFetch.src = data.courses[1].author_pic_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("profilePicThree")
    imageFetch.src = data.courses[2].author_pic_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("profilePicFour")
    imageFetch.src = data.courses[3].author_pic_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("profilePicFive")
    imageFetch.src = data.courses[4].author_pic_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("profilePicSix")
    imageFetch.src = data.courses[5].author_pic_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("profilePicSeven")
    imageFetch.src = data.courses[6].author_pic_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("profilePicEight")
    imageFetch.src = data.courses[7].author_pic_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("profilePicNine")
    imageFetch.src = data.courses[8].author_pic_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("profilePicTen")
    imageFetch.src = data.courses[9].author_pic_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const imageFetch = document.getElementById("profilePicEleven")
    imageFetch.src = data.courses[10].author_pic_url
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("lengthOne")
    timeFetch.textContent = data.courses[0].duration
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("lengthTwo")
    timeFetch.textContent = data.courses[1].duration
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("lengthThree")
    timeFetch.textContent = data.courses[2].duration
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("lengthFour")
    timeFetch.textContent = data.courses[3].duration
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("lengthFive")
    timeFetch.textContent = data.courses[4].duration
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("lengthSix")
    timeFetch.textContent = data.courses[5].duration
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("lengthSeven")
    timeFetch.textContent = data.courses[6].duration
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("lengthEight")
    timeFetch.textContent = data.courses[7].duration
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("lengthNine")
    timeFetch.textContent = data.courses[8].duration
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("lengthTen")
    timeFetch.textContent = data.courses[9].duration
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  dataType: "json",
  success: function(data) {
    const timeFetch = document.getElementById("lengthEleven")
    timeFetch.textContent = data.courses[10].duration
  }
})
$.ajax({
  url: "https://smileschool-api.hbtn.info/courses",
  method: "GET",
  data: {
    param1: "q",
    param2: "topic",
    param3: "sort"
  },
})

$("#carouselExampleControls2").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
});