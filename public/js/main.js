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
        name: "HogWATTs Dinner on the Hill",
        eventUrl: "https://www.facebook.com/events/344811739615789/",
        date: "11/30/18",
        location: "Covel Private Dining Room",
        time: "6 PM - 7 PM",
        description:
          "Join your house for Dinner on the Hill! A great time to grow closer with your mentor and fellow mentees!"
      },
      {
        name: "Good Luck",
        location: "with",
        time: "Finals!",
        description:
          "Everyone at WATT wishes you good luck with finals!! If you need help with anything, reach out to your mentor or someone else! We all want to succeed together! You CAN do this"
      }
     
    ],
    officers: [
      {
        name: "Allison Doami",
        imgUrl: "img/boardmembers18/Allison18.jpg",
        role: "External Co-President",
        email: "mailto:externalpresident@ieeewatt.com",
        bio:
          "Allison is a fourth year Electrical Engineering major. When she's not confused about how to do her circuits homework, she's either playing frisbee, rockclimbing in Wooden, taking photos of her friends, or eating Harrison Parmes at Ike's in Westwood. She's sad it's her last year as an officer in WATT, but she's excited to go out with a bang!"
      },
      {
        name: "Jennifer Seki",
        imgUrl: "img/boardmembers18/Jen18.jpg",
        role: "Internal Co-President",
        email: "mailto:internalpresident@ieeewatt.com",
        bio:
          "Jennifer is a third year Electrical Engineering major. She loves to go on foodie adventures, play soccer, and run around Westwood. She also has a Yellow Prajiet in Muay Thai. Please swipe her into dining halls, as she gets lazy and doesn’t want to buy groceries at Ralph’s (even though she lives in the apartment across the street)."
      },
      {
        name: "Ariana Kazemi",
        imgUrl: "img/boardmembers18/Ariana18.jpg",
        role: "Treasurer",
        email: "mailto:treasurer@ieeewatt.com",
        bio:
          "Ariana is a third year Electrical Engineering major. She enjoys going to concerts, driving down the PCH, playing piano, trying new boba places, and watching vine compilations. She is always willing to discuss opinions on new Apple products, Game of Thrones fan theories, or the newest SNL episodes. She is both an espresso and fried chicken enthusiast, and always welcomes suggestions for either!"
      },
      {
        name: "Maurene Jiang",
        imgUrl: "img/boardmembers18/Maurene18.jpg",
        role: "Corporate Relations",
        email: "mailto:corporate@ieeewatt.com",
        bio:
          "Maurene is a fourth year Computer Science major.  She is a little too obsessed with ice cream, Arizona, and her pet cat (ask her to show you pictures!).  In her spare time, you can find her running around with a camera, crying over midterms, or falling on a tennis court."
      },
      {
        name: "Samiha Rahman",
        imgUrl: "img/boardmembers18/Samiha18.jpg",
        role: "Workshops Chair",
        email: "mailto:workshops@ieeewatt.com",
        bio:
          "Samiha is a third year Computer Engineering major. She enjoying watching cat videos, playing volleyball, going to Target, and eating food with friends. While her primary dream is to become an engineer, her other goal is to finish watching the Fullmetal Alchemist: Brotherhood anime series."
      },
      {
        name: "Siranush Martirosyan",
        imgUrl: "img/boardmembers18/Siranush18.jpg",
        role: "Secretary",
        email: "mailto:secretary@ieeewatt.com",
        bio:
          "Siranush is a third year Electrical Engineering major. She loves to cook food, enjoy nature, go hiking with friends, roller-skate, join Zumba classes and dance salsa/bachata. She also watches Forensic Files and tons of Food Network shows in whatever spare time she has."
      },
      {
        name: "Ivan Gomez Siu",
        imgUrl: "img/boardmembers18/Ivan18.jpg",
        role: "Social Chair",
        email: "mailto:social@ieeewatt.com",
        bio:
          "Ivan is a third year Electrical Engineering major.  He is a big soccer fan and listens to a lot of late 90's French Shuffle.  He is a bit of a class clown and makes weird jokes.  Spirit animal has to be that kind-of-dumb dog that everyone loves."
      },
      {
        name: "Rubia Liu",
        imgUrl: "img/boardmembers/rubia.jpg",
        role: "Advocacy and Wellness Chair",
        email: "mailto:advocacywellness@ieeewatt.com",
        bio:
          "Rubia is a third year Computer Science major slowly sneaking into the Electrical Engineering major. She likes to daydream unfinished stories, coat her room with origami stars and cranes, and dismantle bigotry with passive aggression."
      },
      {
        name: "Meena Nagappan",
        imgUrl: "img/boardmembers18/Meena18.jpg",
        role: "Publicity Chair",
        email: "mailto:publicity@ieeewatt.com",
        bio:
          "Meena is a third year Electrical Engineering major. As a winner of WATT's 'Sweetest Person' Award, she loves sweet things like chocolate. She also loves watching movies, and traveling. She would love to learn more languages so she can watch more movies."
      },
      {
        name: "Tammie Yang",
        imgUrl: "img/boardmembers18/Tammie18.jpg",
        role: "Mentorship Chair",
        email: "mailto:mentorship@ieeewatt.com",
        bio:
          "Tammie's a second year Electrical Engineering major who will HYPE YOU UP (unless she's running on 3 hours of sleep or dead). She enjoys reading, making bad jokes, playing random instruments like the recorder, and fantasizing about traveling the world."
      },
      {
        name: "Justine Bailey",
        imgUrl: "img/boardmembers18/Justine18.jpg",
        role: "Events Coordinator",
        email: "mailto:events@ieeewatt.com",
        bio:
          "Justine is a second year electrical engineering student. As a native SoCal resident, she loves everything to do with the beach. She is excited to help WATT grow as a club this year."
      },
      {
        name: "Erin Pool",
        imgUrl: "img/boardmembers18/Erin18.jpg",
        role: "Webmaster",
        email: "mailto:webmaster@ieeewatt.com",
        bio:
          "Erin is a second year Electrical Engineering major. She loves to embroider and cross stitch, hang with friends, make bad EE puns, and enjoy gelato from 1919. Most likely to be spotted falling off her pennyboard somewhere on campus."
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
