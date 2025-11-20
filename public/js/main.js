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
        name: "Jacqueline Duong",
        imgUrl: "img/boardmember24/headshots/jpg/Jackie.jpg",
        role: "President (She/Her)",
        bio:
          "Jacqueline is a fourth-year Electrical Engineering major from Yorba Linda, CA. With a passion for music, she is perpetually listening to Spotify. On campus, her favorite activity is relaxing at Spritzker Plaza, an experience she has cherished even though she has only done it once."
      },
      {
        name: "Anika Lima",
        imgUrl: "img/boardmember24/headshots/jpg/Anika.jpg",
        role: "Internal Vice President (She/Her)",
        bio:
          "Anika is a fourth-year Electrical Engineering major from Tustin, CA. Formerly a small crochet business owner, she brings creativity and passion to everything she does. On campus, she loves spending time at the botanical garden."
      },
      {
        name: "Christine Yang",
        imgUrl: "img/boardmember24/headshots/jpg/Christine.jpg",
        role: "External Vice President (She/Her)",
        bio:
        "Christine is a spirited junior Electrical Engineering major from San Jose, CA. Standing at 5'1\", she proudly holds the title of the tallest in her family. On campus, she finds endless adventure in getting lost in Boelter for the millionth time, relishing every twist and turn along the way."
      },
      {
        name: "Jessie Chan",
        imgUrl: "img/boardmember24/headshots/jpg/Jessie.jpg",
        role: "Technical Workshops (She/Her)",
        bio:
          "Jessie is a second-year Electrical Engineering major from Pleasanton, CA. Remarkably double-jointed in both elbows, she brings a unique flexibility to everything she does. Her favorite song is \"Bad\" by Wave to Earth, which never fails to energize her."
      },
      {
        name: "Taruni Mananm",
        imgUrl: "img/boardmember24/headshots/jpg/Taruni.jpg",
        role: "Technical Workshops (She/Her)",
        bio:
          "Taruni is a second-year Electrical Engineering major from San Diego, CA. Known for her love of Taco Bell, she jokingly says she lives there. On campus, she delights in exploring the various coffee spots, savoring each visit as a small daily adventure."
      },
      {
        name: "Eugenia Cho ",
        imgUrl: "img/boardmember24/headshots/jpg/Eugenia.jpg",
        role: "Corporate Relations Co-Chair (She/Her)",
        bio:
          "Eugenia is a third-year Electrical Engineering major from Los Altos, CA. She finds peace and inspiration during late night walks on campus, accompanied by her favorite music. These tranquil strolls are her way of unwinding and reflecting."
      },
      {
        name: "Megan Jacob",
        imgUrl: "img/boardmember24/headshots/jpg/Megan.jpg",
        role: "Corporate Relations Co-Chair (She/Her)",
        bio:
        "Megan is a third-year Computer Science major from San Ramon, CA. With an impressive track record of never breaking a bone, she embraces life's challenges with enthusiasm. On campus, her sanctuary is the sculpture garden."
      },
      {
        name: "Sophia Beninati",
        imgUrl: "img/boardmember24/headshots/jpg/Sophia.jpg",
        role: "Outreach (She/Her)",
        bio:
        "Sophia is a dynamic third-year Electrical Engineering major from Charlotte, NC. Impressively multilingual, she can speak German and Chinese (kind of). On campus, her favorite morning ritual is heading to Jimmy's for a delicious breakfast to kickstart her day."
      },
      {
        name: "Amy Tran",
        imgUrl: "img/boardmember24/headshots/jpg/Amy.jpg",
        role: "Outreach (She/Her)",
        bio:
        "Amy is a second-year Physiological Sciences major from Cerritos, CA. A big fan of motorsport, especially in formula categories, she enjoys getting a matcha from Kerckhoff and sitting on the patio, working and eavesdropping on campus."
      },
      {
        name: "Heidi Hu",
        imgUrl: "img/boardmember24/headshots/jpg/Heidi.jpg",
        role: "Mentorship (She/Her)",
        bio:
          "Heidi is a second-year Electrical Engineering major from Santa Clara, CA. She has a special fondness for Miffy, the beloved bunny character. Her favorite song is \"Peach Eyes\" by Wave to Earth, which adds a sweet touch to her day."
      },
      {
        name: "Sydney Dang",
        imgUrl: "img/boardmember24/headshots/jpg/Sydney.jpg",
        role: "Mentorship (She/Her)",
        bio:
          "Sydney  is a second-year Cognitive Science major from Corona, CA. She’s an avid listener of Animal Crossing background music, finding its soothing tunes a perfect backdrop for her day. Her favorite song is \"Collision\" by Stray Kids, which adds a burst of energy to her playlist."
      },
      {
        name: "Diya Cowlagi",
        imgUrl: "img/boardmember25/headshots/Diya.png",
        role: "Inclusive Excellence (She/Her)",
        bio:
          "Diya is a second-year Computer Engineering major hailing from Pittsburgh, PA. Not only is she a tech enthusiast, but she’s also a certified belayer, always ready for a rock-climbing adventure. On campus, you'll often find her soaking up the vibrant atmosphere at Kerckhoff."
      },
      {
        name: "Alexa Fakhimi",
        imgUrl: "img/boardmember25/Alexa.png",
        role: "Publicity (She/Her)",
        bio:
          "Alexa is a third-year Electrical Engineering major from San Diego, CA. With a travel history of 25 countries, she brings a global perspective to her studies. The favorite part of her day is drinking a refreshing iced matcha latte."
      },
      {
        name: "Nikitha Ambatipudi",
        imgUrl: "img/boardmember24/headshots/jpg/Nikitha.jpg",
        role: "Internal Affairs (She/Her)",
        bio:
          "Nikitha is a second-year Computer Engineering major from Glendale, CA. A true fan of pop culture, she and her family have named their cars after iconic Harry Potter and Star Wars characters. On campus, she loves diving into the excitement of various sporting events, cheering on her fellow Bruins."
      },
      {
        name: "Saachi Bhayani",
        imgUrl: "img/boardmember24/headshots/jpg/Saachi.jpg",
        role: "Social (She/Her)",
        bio:
          "Saachi is an adventurous third-year Electrical Engineering major from Pleasanton, CA. Driven by curiosity and a sense of adventure, she once backpacked through Europe simply because she was bored. On campus, she enjoys relaxing in the Royce Hall arches, soaking in the architectural beauty and vibrant atmosphere."
      },
      {
        name: "Sophie Zhu",
        imgUrl: "img/boardmember24/headshots/jpg/Sophie.jpg",
        role: "Treasurer (She/Her)",
        bio:
          "Sophie is a second-year Computer Science and Engineering major from Los Angeles, CA. She has successfully made every recipe she’s tried. Her favorite song is \"Car Crash\" by eaJ, which adds a unique rhythm to her life."
      },
      {
        name: "Nina Kerr",
        imgUrl: "img/boardmember24/headshots/jpg/Nina.jpg",
        role: "Secretary (She/Her)",
        bio:
          "Nina is a vibrant second-year Computer Engineering major from Menlo Park, CA. She has a passion for playing volleyball and discovering the best gluten-free restaurants. On campus, she loves having picnics with her friends on the lawn by the Tongva steps, where they enjoy the sunshine and each other's company."
      },
      {
        name: "Katie Wang",
        imgUrl: "img/boardmember24/headshots/jpg/Katie.jpg",
        role: "Events Coordinator (She/Her)",
        bio:
        "Katie is a second-year Electrical Engineering major from Modesto, CA. She loves collecting keychains. On campus, her favorite thing to do is to sit outside with friends. "
      },
      {
        name: "Harmony Hsu",
        imgUrl: "img/boardmember24/headshots/jpg/Harmony.jpg",
        role: "Webmaster (She/Her)",
        bio:
          "Harmony is a third-year Electrical Engineering major from Palmdale, CA. A standout moment in her life is when she hit a golf ball on the driving range with such distance and speed that it qualified for the Professional Golfers' Association (PGA) tour."
      },
      {
        name: "Ava Asamani",
        imgUrl: "img/boardmember24/headshots/jpg/Ava.jpg",
        role: "Graduate Advisor (She/Her)",
        bio:
          "Ava is a first year M.S./Ph.D. student in Electrical and Computer Engineering. She finished her undergraduate degree in Electrical Engineering at UCLA in 2024. In her free time she enjoys hiking, traveling and watching movies. She is so excited to be WATT's graduate advisor this year!"
      }
      
   
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

  // $("#sponsors-mount").html(
  //   sponsorsTemplate({
  //     sponsors: dataObj.sponsors
  //   })
  // );

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
