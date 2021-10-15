document.addEventListener("DOMContentLoaded", function(event) {
  // Animate loader off screen
  $(".se-pre-con").fadeOut(1250);



  var eventsSource = $("#events-template").html();
  var eventsTemplate = Handlebars.compile(eventsSource);
  var officersSource = $("#officers-template").html();
  var officersTemplate = Handlebars.compile(officersSource);
  var projectsSource = $("#projects-template").html();
  var projectsTemplate = Handlebars.compile(projectsSource);
  var sponsorsSource = $("#sponsors-template").html();
  var sponsorsTemplate = Handlebars.compile(sponsorsSource);
  var gallerySource = $("#gallery-template").html();
  var galleryTemplate = Handlebars.compile(gallerySource);

  var dataObj = {
    events: [
     
    ],
    officers: [
      {
        name: "Jasanpreet Pandher",
        imgUrl: "img/boardmembers20/JP20.jpg",
        role: "President",
        bio:
          "Jasanpreet is a fourth year electrical engineering major. In the past, she’s held the position of Vice President and Technical Workshop Chair. During her free time, she enjoys going running, watching tv, and spending time with friends!"
      },
      {
        name: "Neha Adhlakha",
        imgUrl: "img/boardmembers20/Neha20.JPG",
        role: "Vice President",
        bio:
            "Neha is a fourth year Electrical Engineering major. During her free time, she’s been going swimming, learning how to sew, and having social distance picnics with her friends. She is excited to be Mentorship Chair this year!"
      },
      {
        name: "Sophia Chen",
        imgUrl: "img/boardmembers20/Weslyn20.jpg",
        role: "Treasurer",
        bio:
          "Sophia is a second-year Electrical Engineering major. During her free time, she likes listening to audiobooks, eating UCLA food, and learning guitar. She also enjoys going on walks and hikes, watching the sunrise, and refusing to take elevators, even though she lives on the third floor!"
        },
      {
        name: "Justine Lin",
        imgUrl: "img/boardmembers20/Justine20.jpg",
        role: "Corporate Relations",
        bio:
          "Justine is a fourth year Electrical Engineering major. In her free time, she enjoys crocheting stuffed animals, playing tennis, and eating instant ramen >_<          "
      },
      {
        name: "Helen Wang",
        imgUrl: "img/boardmembers20/Helen20.jpg",
        role: "Events Coordinator",
        bio:
          "Helen is a third year Computer Science major. In quarantine, she’s been Zooming friends, sleeping 24/7, and petting her neighbourhood cats. She’s excited to (virtually) meet new WATT members this year!"
      },
      {
        name: "Anreeta Saseetharran",
        imgUrl: "img/boardmembers21/Anreeta21.jpg",
        role: "Secretary",
        bio:
          "Anreeta is a fourth year Computer Engineering major. Last year, she served as a Technical Workshops chair for WATT. During her free time, she enjoys crafting, doodling, drinking tea, reading novels, and trying new recipes."
      },
      {
        name: "Katherine Stahnke",
        imgUrl: "img/boardmembers20/Katherine20.png",
        role: "Publicity",
        bio:
          "Third year Electrical Engineering major"
      },
      {
        name: "Sraavya Pradeep",
        imgUrl: "img/boardmembers20/Weslyn20.jpg",
        role: "Social Chair",
        bio:
          "Second year"
      },
      {
        name: "Krisha Minocha",
        imgUrl: "img/boardmembers21/Krisha21.JPG",
        role: "Advocacy and Wellness Chair",
        bio:
          "Krisha is a second year Computer Engineering major. In her free time she enjoys listening singing, dancing, trying new recipes, working out, and bingeing new Netflix shows! She looks forward to meeting everyone in person this year.          "
      },
      {
        name: "Isabella Jordan",
        imgUrl: "img/boardmembers20/Weslyn20.JPG",
        role: "Co-Mentorship Chair",
        bio:
          "Second Year"
      },
      {
        name: "Ameya Tilaye",
        imgUrl: "img/boardmembers20/Weslyn20.JPG",
        role: "Co-Mentorship Chair",
        bio:
          "Ameya is a fifth year Electrical Engineering major. In her free time, she enjoys exploring her neighborhood,playing online chess, listening to music, art and design, and creating new characters and storylines for her first novel. She's excited to be one of the two Mentorship Chairs this year. },
      },
      
      {
        name: "Brianna McColm",
        imgUrl: "img/boardmembers20/Brianna20.JPG",
        role: "Co-Workshop Chair",
        bio:
          "Brianna is a second year Electrical Engineering major. During her free time, she enjoys swimming, hiking, and spending time outdoors. She’s excited to connect with incoming WATT members this year!"
      },
      {
        name: "Amy Yu",
        imgUrl: "img/boardmembers21/Amy21.jpg",
        role: "Co-Workshop Chair",
        bio:
          "Amy is a fourth year Electrical Engineering major from Fremont, CA. In her free time, she loves to cook, bake, and pet her cat. She's very excited to be a Technical Workshops Chair and meet WATT members in person!          "
      },
      {
        name: "Ava Asmani",
        imgUrl: "img/boardmembers21/Ava21.jpg",
        role: "Webmaster",
        bio:
          "Ava is a second year Electrical Engineering major from Orange Country, CA. In her freetime, she enjoys rock climbing, going to the beach and watching Youtube. She has just gotten into Web Development and is interested in using the Website to further the visibility of WATT."
      },
      {
        name: "Maya Chatrathi",
        imgUrl: "img/boardmembers20/Weslyn20.jpg",
        role: "Outreach Chair",
        bio:
          "Second Year"
      },
    ],
    projects: [
      {
        name: "Audio Workshop",
        date: "4/24/2017",
        eventUrl: "https://www.facebook.com/events/1710673605899546/",
        imgUrl: "img/eventphotos/audiows.jpg"
      },
      {
        name: "RF Workshop",
        date: "4/17/2017",
        eventUrl: "https://www.facebook.com/events/556822414526173/",
        imgUrl: "img/eventphotos/rfws2.jpg"
      },
      {
        name: "Design Concepts Workshop",
        date: "4/11/2017",
        eventUrl: "https://www.facebook.com/events/1663298890350955/",
        imgUrl: "img/eventphotos/designws.jpg"
      },
      {
        name: "RF Workshop",
        date: "2/22/2017",
        eventUrl: "https://www.facebook.com/events/1199347506847311/",
        imgUrl: "img/eventphotos/rfws.jpg"
      },
      {
        name: "Valentine's Workshop",
        date: "2/08/2017",
        eventUrl: "https://www.facebook.com/events/185447715269874/",
        imgUrl: "img/eventphotos/valentinesws.jpg"
      },
      {
        name: "Wearables Workshop 2",
        date: "11/10/2016",
        eventUrl: "https://www.facebook.com/events/325982431127452/",
        imgUrl: "img/eventphotos/wearablesws2.jpg"
      },
      {
        name: "Wearables Workshop 1",
        date: "10/28/2016",
        eventUrl: "https://www.facebook.com/events/385779441753175/",
        imgUrl: "img/eventphotos/wearablesws1.jpg"
      }
    ],
    sponsors: [
      {
        imgUrl: "img/sponsors/qualcomm.png",
        alt: "Qualcomm Logo"
      },
      {
        imgUrl: "img/sponsors/northrop.png",
        alt: "Northrup Logo"
      },
      {
        imgUrl: "img/sponsors/google.png",
        alt: "Google Logo"
      },
      {
        imgUrl: "img/sponsors/intel.png",
        alt: "Intel Logo"
      },
      {
        imgUrl: "img/sponsors/oath.png",
        alt: "Oath Logo"
      },
      {
        imgUrl: "img/sponsors/uber.jpg",
        alt: "Uber Logo"
      },
      {
        imgUrl: "img/sponsors/cray.png",
        alt: "Cray Logo"
      },
      {
        imgUrl: "img/sponsors/symantec.png",
        alt: "Symantec Logo"
      }
    ],
    gallery: [
      {
        albumUrl:"https://www.flickr.com/photos/143450762@N06/albums/72157667740069068/player",
        coverImg:"img/eventcovers/2018CookieSocial.jpg",
        eventName:"2018 WATTxIEEE Cookie Social"
      }
    ]
  };

  $.each(dataObj.events, function(i, item) {
    reformatToPs(i, item);
  });
  $("#events-mount").html(
    eventsTemplate({
      events: dataObj.events
    })
  );

  $("#officers-mount").html(
    officersTemplate({
      officers: dataObj.officers
    })
  );

  $("#sponsors-mount").html(
    sponsorsTemplate({
      sponsors: dataObj.sponsors
    })
  );

  $("#projects-mount").html(
    projectsTemplate({
      projects: dataObj.projects
    })
  );

  $("#gallery-mount").html(
    galleryTemplate({
      gallery: dataObj.gallery
    })
  );

});

function reformatToPs(i, item) {
  var list = item.description.split("*");
  var html = "";
  for (var i = 0; i < list.length; i++) {
    html += "<p>" + list[i] + "</p>";
  }
  // html += '</ul>';
  item.description = html;
}
