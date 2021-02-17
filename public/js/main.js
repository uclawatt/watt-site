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
      {
        eventUrl: "https://www.facebook.com/events/889932795087430",
        name: "Healthy Eating Habits Workshop",
        date: "Week 7 2/17/21",
        location: "Zoom",
        time: "6:00 PM - 7:00 PM PST",
        description:
          "This workshop will talk about healthy eating habits to help students in stressful times such as finals week that are both budget-friendly and time friendly. Come to this workshop and learn about some fun recipes and sustainable eating habits that are made for students!"
      }
    ],
    officers: [
      {
        name: "Weslyn Clarke",
        imgUrl: "img/boardmembers20/Weslyn20.jpg",
        role: "President",
        bio:
          "Weslyn is a fourth year Electrical Engineering major. Last year, she served as Treasurer. During her free time, she enjoys reading fantasy and dystopian novels, binge watching television shows and anime, and nap!"
      },
      {
        name: "Jasanpreet Pandher",
        imgUrl: "img/boardmembers20/JP20.jpg",
        role: "Vice President",
        bio:
          "Jasanpreet is a third year Electrical Engineering major. Last year, she served as one of the Technical Workshop chairs, and this year she is stepping into the position of Vice President. During her free time, she loves to do photography, exercise, and listen to podcasts! "
      },
      {
        name: "Vani Sharma",
        imgUrl: "img/boardmembers20/Vani20.jpg",
        role: "Treasurer",
        bio:
          "Vani is a second year Electrical Engineering major. In her free time she enjoys listening to music, trying new recipes, and watching TV. She looks forward to zooming with all the new WATT members! "
      },
      {
        name: "Christina Lee",
        imgUrl: "img/boardmembers20/Christina20.jpg",
        role: "Corporate Relations",
        bio:
          "Christina is a third year Electrical Engineering major. In her free time, she enjoys writing letters to people, going on Youtube, or watching K-dramas. Recently during this quarantine, she’s been trying to exercise every morning and read as well! "
      },
      {
        name: "Bonnie Liu",
        imgUrl: "img/boardmembers20/Bonnie20.JPG",
        role: "Events Coordinator",
        bio:
          "Second year Computer Science major"
      },
      {
        name: "Brianna McColm",
        imgUrl: "img/boardmembers20/Brianna20.jpg",
        role: "Secretary",
        bio:
          "Brianna is a second year Electrical Engineering major. During her free time, she enjoys swimming, hiking, and spending time outdoors. She’s excited to connect with incoming WATT members this year!"
      },
      {
        name: "Helen Wang",
        imgUrl: "img/boardmembers20/Helen20.jpg",
        role: "Publicity",
        bio:
          "Helen is a second year Computer Science major. In quarantine, she’s been Zooming friends, sleeping 24/7, and petting her neighbourhood cats. She’s excited to (virtually) meet new WATT members this year!"
      },
      {
        name: "Katherine Stahnke",
        imgUrl: "img/boardmembers20/Katherine20.png",
        role: "Social Chair",
        bio:
          "Second year Electrical Engineering major"
      },
      {
        name: "Tammie Yang",
        imgUrl: "img/boardmembers20/Tammie20.jpg",
        role: "Social Chair",
        bio:
          "Fourth year Electrical Engineering major"
      },
      {
        name: "Nisha Sharma",
        imgUrl: "img/boardmembers20/Nisha20.JPG",
        role: "Advocacy and Wellness Chair",
        bio:
          "Fifth year Electrical Engineering major"
      },
      {
        name: "Neha Adhlakha",
        imgUrl: "img/boardmembers20/Neha20.JPG",
        role: "Mentorship Chair",
        bio:
          "Neha is a third year Electrical Engineering major. During her free time, she’s been going swimming, learning how to sew, and having social distance picnics with her friends. She is excited to be Mentorship Chair this year!"
      },
      {
        name: "Anreeta Saseetharran",
        imgUrl: "img/boardmembers20/Anreeta20.JPG",
        role: "Workshop Chair",
        bio:
          "Anreeta is a third year Computer Engineering major. She served as a Technical Workshops chair for WATT last year, and is excited to continue in this role this year! During her free time, she enjoys crafting, doodling, drinking tea, reading novels, and trying new recipes."
      },
      {
        name: "Evelyn Chiappe",
        imgUrl: "img/boardmembers20/Evelyn20.jpg",
        role: "Workshop Chair",
        bio:
          "Third year Electrical Engineering major"
      },
      {
        name: "Justine Lin",
        imgUrl: "img/boardmembers20/Justine20.jpg",
        role: "Webmaster",
        bio:
          "Justine is a third year Electrical Engineering major. In quarantine, she’s enjoyed baking bread (unsuccessfully), embroidering, and Netflix Party-ing with friends. You can often find her online at 3am struggling with a circuits lab or binge-watching Masterchef."
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
