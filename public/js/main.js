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
        name: "Krisha Minocha(she/her)",
        imgUrl: "img/boardmembers21/Krisha_21_22.jpeg",
        role: "President",
        bio:
          "Krisha is a third year Computer Engineering major. In her free time she enjoys singing, dancing, trying new recipes, working out, and bingeing new Netflix shows! "  
      },
      {
        name: "Isabella Jordan(she/her)",
        imgUrl: "img/boardmembers21/Isabella_21_22.jpeg",
        role: "External Vice President",
        bio:
          "Isabella is a third year Electrical Engineering major. In her free time, she enjoys going to the beach and boating (woo wakesurfing!). Last year she held the position of Mentorship Chair and she’s super excited to be EVP this year!"
      },
      {
        name: "Katie Stahnke(she/they)",
        imgUrl: "img/boardmembers21/Katherine_21_22.jpeg",
        role: "Internal Vice President",
        bio:
          "Katie is a fourth year computer engineering major and is excited to be WATT's IVP this year! Katie likes Phoebe Bridgers and reading about fairies :)"
      },
      {
        name: "Jacqueline Duong(she/her)",
        imgUrl: "img/boardmembers22/jacqueline_watt.jpg",
        role: "Corporate Relations Chair",
        bio:
          "Jacqueline is a 2nd year Biology Major switching to Electrical Engineering who loves space, public speaking, and boba! In her free time she likes to play piano, hang out with family and friends, and explore new genres of music. "
      },
      {
        name: "Maya Chatrathi(she/her)",
        imgUrl: "img/boardmembers21/Maya_21_22.jpeg",
        role: "Advocacy and Wellness Chair",
        bio:
          "Maya is a second year computer engineering major! In her free time Maya enjoys reading and baking."
      },
      {
        name: "Anna Anderson(she/her)",
        imgUrl: "img/boardmembers22/anna_watt.jpeg",
        role: "Secretary",
        bio:
          "Anna is a third year computer engineering major from San Diego. In her free time Anna likes to do art, play guitar, and hang out with her cat Bean."
      },
      {
        name: "Anika Lima(she/her)",
        imgUrl: "img/boardmembers22/anika_watt.jpeg",
        role: "Mentorship Chair",
        bio:
          "Anika is a second year Electrical Engineering major. If she's not actively searching for Powell Cat, she's probably crocheting while vibing to music or watching kdramas!"
      },
      {
        name: "Ava Asmani(she/her)",
        imgUrl: "img/boardmembers21/Ava_21_22.jpeg",
        role: "Webmaster",
        bio:
          "Ava is a third year electrical engineering major from Southern California. Ava enjoys rock climbing, going to the beach and watching movies. Ava is also a big fan of accessible web development and is so excited to be Webmaster this year!"
      },
      {
        name: "Amanda Hacker(she/her)",
        imgUrl: "img/boardmembers22/amanda_watt.jpeg",
        role: "Technical Chair",
        bio:
          "Amanda is a third-year electrical engineering major. In her free time, Amanda enjoys hiking, going to the beach, and spending time with friends. She is looking forward to being a part of WATT this year!"
      },
      {
        name: "Jenna Kim(she/her)",
        imgUrl: "img/boardmembers22/jenna_watt.jpg",
        role: "Treasurer",
        bio:
        "Jenna is a third year Electrical Engineering major. When she has free time, she enjoys going on runs and long walks in the park, watching movies and corny sitcoms, and reading and journaling. Jenna is looking forward to the upcoming school year as a part of WATT! "
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
