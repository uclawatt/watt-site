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

  var dataObj = {
    events: [
      {
        eventUrl: "https://www.facebook.com/events/2307539762631972/",
        name: "Spring General Meeting",
        date: "4/2/19",
        location: "Maxwell Envr IV 57-124",
        time: "6 PM - 7 PM",
        description:
          "Come learn about WATT's going on with WATT and eat free pizza"
      },
      {
        eventUrl: "",
        name: "WATT Officer Elections",
        date: "4/16/19",
        location: "Maxwell Envr IV 57-124",
        time: "6 PM - 8 PM",
        description:
          "Come run for a board position or vote for who you want to lead WATT next year!"
      },
      {
        eventUrl: "",
        name: "Picnic on Janns Steps",
        date: "4/17/19",
        location: "Janns Steps",
        time: "3 PM - 5 PM",
        description:
          "Hang our and relax with WATT!"
      },
      {
        eventUrl: "",
        name: "Midterm Study Session",
        date: "5/1/19",
        location: "Faraday Envr IV 67-124",
        time: "6 PM - 8 PM",
        description:
          "Suffering together is better than suffering alone"
      }
     
    ],
    officers: [
      {
        name: "Weslyn Clarke",
        imgUrl: "img/favicons/android-chrome-192x192.png",
        role: "President",
        email: "mailto:externalpresident@ieeewatt.com",
        bio:
          "Fourth year Electrical Engineering major"
      },
      {
        name: "Jasanpreet Pandher",
        imgUrl: "img/favicons/android-chrome-192x192.png",
        role: "Vice President",
        email: "mailto:internalpresident@ieeewatt.com",
        bio:
          "Third year Electrical Engineering major"
      },
      {
        name: "Vani Sharma",
        imgUrl: "img/favicons/android-chrome-192x192.png",
        role: "Treasurer",
        email: "mailto:treasurer@ieeewatt.com",
        bio:
          "Second year Electrical Engineering major"
      },
      {
        name: "Christina Lee",
        imgUrl: "img/favicons/android-chrome-192x192.png",
        role: "Corporate Relations",
        email: "mailto:corporate@ieeewatt.com",
        bio:
          "Third year Electrical Engineering major"
      },
      {
        name: "Bonnie Liu",
        imgUrl: "img/favicons/android-chrome-192x192.png",
        role: "Events Coordinator",
        email: "mailto:workshops@ieeewatt.com",
        bio:
          "Second year Computer Science major"
      },
      {
        name: "Brianna McColm",
        imgUrl: "img/favicons/android-chrome-192x192.png",
        role: "Secretary",
        email: "mailto:secretary@ieeewatt.com",
        bio:
          "Second year Electrical Engineering major"
      },
      {
        name: "Helen Wang",
        imgUrl: "img/favicons/android-chrome-192x192.png",
        role: "Publicity",
        email: "mailto:social@ieeewatt.com",
        bio:
          "Second year Electrical Engineering major"
      },
      {
        name: "Katherine Stahnke",
        imgUrl: "img/favicons/android-chrome-192x192.png",
        role: "Social Chair",
        email: "mailto:advocacywellness@ieeewatt.com",
        bio:
          "Second year Electrical Engineering major"
      },
      {
        name: "Nisha Sharma",
        imgUrl: "img/favicons/android-chrome-192x192.png",
        role: "Advocacy and Wellness Chair",
        email: "mailto:publicity@ieeewatt.com",
        bio:
          "Fifth year Electrical Engineering major"
      },
      {
        name: "Neha Adhlakha",
        imgUrl: "img/favicons/android-chrome-192x192.png",
        role: "Mentorship Chair",
        email: "mailto:mentorship@ieeewatt.com",
        bio:
          "Third year Electrical Engineering major"
      },
      {
        name: "Anreeta Saseetharran",
        imgUrl: "img/favicons/android-chrome-192x192.png",
        role: "Workshop Chair",
        email: "mailto:events@ieeewatt.com",
        bio:
          "Third year Computer Engineering major"
      },
      {
        name: "Evelyn Chiappe",
        imgUrl: "img/favicons/android-chrome-192x192.png",
        role: "Workshop Chair",
        email: "mailto:webmaster@ieeewatt.com",
        bio:
          "Third year Electrical Engineering major"
      },
      {
        name: "Justine Lin",
        imgUrl: "img/favicons/android-chrome-192x192.png",
        role: "Webmaster",
        email: "mailto:webmaster@ieeewatt.com",
        bio:
          "Third year Electrical Engineering major"
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
