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
        name: "Isabella Jordan(she/her)",
        imgUrl: "img/boardmembers23p2/isabella.jpg",
        role: "President",
        bio:
          "Isabella is a fourth year Electrical Engineering major. In her free time, she enjoys going to the pool and boating (woo wakesurfing!). Last year she was EVP, the year before she was Mentorship Chair, and this year she's super excited to be President!"  
      },
      {
        name: "Krisha Minocha(she/her)",
        imgUrl: "img/boardmembers23p2/krisha.jpg",
        role: "External Vice President",
        bio:
          "Krisha is a fourth year Computer Engineering major from the Bay Area. In her free time she enjoys dancing, trying new recipes, working out, and bingeing new Netflix shows!"
      },
      {
        name: "Ava Asmani(she/her)",
        imgUrl: "img/boardmembers23p2/ava.jpg",
        role: "Internal Vice President",
        bio:
          "Ava is a 4th year Electrical Engineering major. She grew up in Orange County, California and was born in Toronto, Canada. Her favorite classes at UCLA have been EE 2 and EE 101B. In Ava’s free time, she enjoys snorkeling, watching movies, traveling and working out."
      },
      {
        name: "Jenna Kim(she/her)",
        imgUrl: "img/boardmembers23p2/jenna.jpg",
        role: "Treasurer",
        bio:
        "Jenna is a fourth year electrical engineering major. In her free time, she enjoy watching movies, going on walks, and as with all engineers: climbing! She is excited to continue being treasurer for WATT for the second year."
      },
      {
        name: "Jacqueline Duong(she/her)",
        imgUrl: "img/boardmembers23p2/jacqueline .jpg",
        role: "Corporate Relations Co-Chair",
        bio:
          "Jacqueline is a 3rd year EE major serving as one of your corporate relations officers this year! She loves listening to Laufey and drinking coffee because it makes her feel ✨high-class✨, so hit her up if either of these interest you :) "
      },
      {
        name: "Sophia Beninati(she/her)",
        imgUrl: "img/boardmembers23p2/sophia.jpg",
        role: "Corporate Relations Co-Chair",
        bio:
          "Sophia is a second-year electrical engineering major from North Carolina. In her free time, Sophia enjoys playing soccer, spending time with friends, and listening to music!"
      },
      {
        name: "Maya Chatrathi(she/her)",
        imgUrl: "img/boardmembers23p2/maya.jpg",
        role: "Secretary",
        bio:
          "Maya is a fourth-year computer engineering major. In her free time she enjoys reading, watching TV, and playing field hockey. She's looking forward to being a part of WATT this year!"
      },
      {
        name: "Cheryl Lim(she/her)",
        imgUrl: "img/boardmembers23p2/Cheryl.jpg",
        role: "Webmaster",
        bio:
          "Cheryl is a fourth year Linguistics and Computer Science major. Cheryl loves crocheting, hiking and cooking in her free time. She looks forward to being the webmaster for WATT this year!"
      },
      {
        name: "Anika Lima(she/her)",
        imgUrl: "img/boardmembers23p2/anika.jpg",
        role: "Advocacy Chair",
        bio:
          "Anika is a third year Electrical Engineering major who likes crocheting, watching kdramas, and exploring LA! She is excited to plan events to empower and support our club members!"
      },
      {
        name: "Alexa Fakhimi(she/her)",
        imgUrl: "img/boardmembers23p2/alexa.jpg",
        role: "Mentorship Co-Chair",
        bio:
          "Alexa is a second-year electrical engineering major from San Diego, CA. In her free time, she enjoys listening to old music, watching movies, and playing tennis. "
      },
      {
        name: "Saachi Bhayani(she/her)",
        imgUrl: "img/boardmembers23p2/saachi.jpg",
        role: "Mentorship Co-Chair",
        bio:
          "Saachi is one of the co-mentorship chairs. She is currently a second year EE major from the Bay Area. In her free time she loves exploring new foods :)"
      },
      {
        name: "Amanda Hacker(she/her)",
        imgUrl: "img/boardmembers23p2/amanda.jpg",
        role: "Technical Workshop Co-Chair",
        bio:
          "Amanda is a fourth-year electrical engineering major. In her free time, Amanda enjoys hiking, going to the beach, and spending time with friends. She is looking forward to being a part of WATT this year!"
      },
      {
        name: "Megan Jacob(she/her)",
        imgUrl: "img/boardmembers23p2/megan.jpg",
        role: "Technical Workshop Co-Chair",
        bio:
          "Megan is a second year Computer Science major. She enjoys hiking, trying out new recipes, watching sunsets, and spending time with friends and family."
      },
      {
        name: "Courtney Gibbons(she/her)",
        imgUrl: "img/boardmembers23p2/courtney.JPG",
        role: "Publicity",
        bio:
          "Courtney is a 4th year EE and your publicity for this year :)"
      },
      {
        name: "Nidhi Sunkam",
        imgUrl: "img/boardmembers23p2/nidhi.jpg",
        role: "Outreach Co-Chair",
        bio:
          "Nidhi is a third year electrical engineering major. In her free time, she enjoys listening to music, exploring LA, spending time with family and friends, and playing golf. She looks forward to being the Co-Outreach Chair for WATT this year!"
      },
      {
        name: "Laura Huang",
        imgUrl: "img/boardmembers23p2/laura.jpg",
        role: "Outreach Co-Chair",
        bio:
          "Laura is the co-outreach chair this year. She is a die hard fan of a lot of R&B and pop music. She loves loves loveeees Billie Eilish, Sabrina Carpenter and Olivia Rodrigo (there are no fan wars here!!) and so much more. hehe and her favorite kind of dog is a corgi (short just like her!)."
      },
      {
        name: "Esha Thota(she/her)",
        imgUrl: "img/boardmembers23p2/esha.JPEG",
        role: "Internal Affairs",
        bio:
          "Esha is a fourth year Computer Engineering major, and Internal Affairs this year :) Esha loves roller skating, reading, and origami. Hit her up about school, research, internships, or anything you’re curious about!"
      },
      {
        name: "Christine Yang(she/her)",
        imgUrl: "img/boardmembers23p2/christine.JPG",
        role: "Events Chair",
        bio:
        "Christine is a second year electrical engineering major. She love designing CAD gifts for her friends, thrifting, and getting to know people! Some of the other clubs shes involved in are Design Build Fly (where they build RC planes from scratch!) and SWE. Feel free to reach out and ask her anything :)"
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
