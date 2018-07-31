document.addEventListener("DOMContentLoaded", function(event) {
  // Animate loader off screen
  $(".se-pre-con").fadeOut(1250);

//   // Fade in Nav on scroll
//   $(window).scroll(function() {
//     // 100 = The point you would like to fade the nav in.

//     if ($(window).scrollTop() > 100) {
//       $(".bg").addClass("show");
//     } else {
//       $(".bg").removeClass("show");
//     }
//   });

//   $(".scroll").on("click", function(e) {
//     e.preventDefault();

//     $("html, body").animate(
//       {
//         scrollTop: $(this.hash).offset().top
//       },
//       500
//     );
//   });

  var eventsSource = $("#events-template").html();
  var eventsTemplate = Handlebars.compile(eventsSource);
  var officersSource = $("#officers-template").html();
  var officersTemplate = Handlebars.compile(officersSource);
  var projectsSource = $("#projects-template").html();
  var projectsTemplate = Handlebars.compile(projectsSource);
  var sponsorsSource = $("#sponsors-template").html();
  var sponsorsTemplate = Handlebars.compile(sponsorsSource());

  var dataObj = {
    events: [
      {
        name: "WATTches Series: Circuit",
        eventUrl: "https://www.facebook.com/events/1167368630070856/",
        date: "5/4/18",
        location: "Engr IV 47-124",
        time: "6 PM - 7 PM",
        description:
          "WATT is a hosting a 4-part workshop called WATTches! You’ll be making an LED watch using clock modules and MCUs in teams of 2. Sound interesting? Make sure to sign up by this Friday 5/4! Sound intimidating? Don’t worry! We’ll be teaching from a completely amateur level, so all skills levels and majors are welcome. * You’ll be building the full circuit and learning how to use all the parts."
      },
      {
        name: "Northrop Grumman Tour",
        eventUrl: "https://www.facebook.com/events/371421390028511/",
        date: "5/11/18",
        location: "De Neve Turnaround",
        time: "11 AM - 3 PM",
        description:
          "Come join WATT as we tour Northrop Grumman's campus on Friday, May 11th from noon-3pm! We will meet at De Neve Turnaround at 11am to arrange transportation to the campus. Northrop employees will take us around the site to learn more about the company and view the labs and projects that make Northrop unique! Lunch will be provided! *US Citizenship Required *BE SURE TO RSVP BY MAY 2ND *RSVP at tinyurl.com/ngcwatt"
      }
    ],
    officers: [
      {
        name: "Allison Doami",
        imgUrl: "img/boardmembers/allison.jpg",
        role: "External Co-President",
        email: "mailto:externalpresident@ieeewatt.com",
        bio:
          "Allison is a third year Electrical Engineering major. She is an avid frisbee, tennis, and soccer player who also loves to play the violin, piano, and ukulele in her spare time. Catch her making weird faces as she's doing her homework or eating Ike's in Westwood when she gets sick of campus food."
      },
      {
        name: "Tanvi Rane",
        imgUrl: "img/boardmembers/tanvi.jpg",
        role: "Internal Co-President",
        email: "mailto:internalpresident@ieeewatt.com",
        bio:
          "Tanvi is a fourth year Electrical Engineering major. She loves math, food, memes, dance, and her friends. As a chronic over-commiter, she has held many leadership positions in her time at UCLA, so for the sake of her sanity, she is slowly learning to say 'no' and prioritize her committments."
      },
      {
        name: "Katrina Wijaya",
        imgUrl: "img/boardmembers/katrina.jpg",
        role: "Secretary",
        email: "mailto:secretary@ieeewatt.com",
        bio:
          "Katrina is a third year Computer Science major. You can usually find her navigating through Boelter with Google Maps. She’s currently either thinking about food, eating food, or planning what food she’ll eat next. Alongside her passion for food, Katrina develops her (lacking) artistic skills through origami, nail art, and Pictionary."
      },
      {
        name: "Siranush Martirosyan",
        imgUrl: "img/boardmembers/siranush.jpg",
        role: "Treasurer",
        email: "mailto:treasurer@ieeewatt.com",
        bio:
          "Siranush is a second year Electrical Engineer interested in solar energy and electric vehicles. She loves to roller-skate, hike, latin dance, cook, travel, get inspired from nature and learn different languages."
      },
      {
        name: "Meena Nagappan",
        imgUrl: "img/boardmembers/meena.jpg",
        role: "Mentorship Chair",
        email: "mailto:mentorship@ieeewatt.com",
        bio:
          "Meena is a second year Electrical Engineering major. She loves chocolate, watching movies, and traveling. She would love to learn more languages so she can watch more movies."
      },
      {
        name: "Alejandra Uribe",
        imgUrl: "img/boardmembers/ale.jpg",
        role: "Social Chair",
        email: "mailto:social@ieeewatt.com",
        bio:
          "Alejandra is a second year Mathematics of Computation major. During her free time she enjoys playing the ukulele, watching Game of Thrones, and teaching people math."
      },
      {
        name: "Catherine Cheng",
        imgUrl: "img/boardmembers/catherine.jpg",
        role: "Advocacy and Wellness Chair",
        email: "mailto:advocacywellness@ieeewatt.com",
        bio:
          "Catherine is an EE senior at UCLA, engineering to help LGBTQ, mental health patients, and sexual assault survivors. She made an iOS self-care app, Mood Buddy, to help people with their emotional well being."
      },
      {
        name: "Jennifer Seki",
        imgUrl: "img/boardmembers/jennifer.jpg",
        role: "Events Coordinator",
        email: "mailto:events@ieeewatt.com",
        bio:
          "Second year Electrical Engineering major. Loves soccer, traveling, and food. Yearns to travel and eat more, but devastated by the cost."
      },
      {
        name: "Tanzeela Khan",
        imgUrl: "img/boardmembers/tanzeela.jpg",
        role: "Webmaster",
        email: "mailto:webmaster@ieeewatt.com",
        bio:
          "Tanzeela is a third year Computer Science and Engineering major. She loves hiking, singing terribly, watching musicals, and dj-ing. She's currently planning her escape."
      },
      {
        name: "Maurene Jiang",
        imgUrl: "img/boardmembers/maurene.jpg",
        role: "Corporate Relations",
        email: "mailto:corporate@ieeewatt.com",
        bio:
          "Third year Computer Science major with an unhealthy Salt & Straw obsession and slightly annoying love for cacti"
      },
      {
        name: "Melissa Cox",
        imgUrl: "img/boardmembers/melissa.jpg",
        role: "Publicity Chair",
        email: "mailto:publicity@ieeewatt.com",
        bio:
          "Melissa is a second year Computer Science major. She loves art, karaoke, and videogames. She does not like pollution, the quarter system, and comic sans. She hopes to travel to new destinations, especially natural wonders."
      },
      {
        name: "Rubia Liu",
        imgUrl: "img/boardmembers/rubia.jpg",
        role: "Workshops Chair",
        email: "mailto:workshops@ieeewatt.com",
        bio:
          "Rubia is a second year Computer Science major slowly sneaking into the Electrical Engineering major. She likes to daydream unfinished stories, coat her room with origami stars and cranes, and dismantle bigotry with passive aggression."
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
        imgUrl: "",
        alt: "",
        class: ""
      },
      {
        imgUrl: "",
        alt: "",
        class: ""
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

  // (function($) {window.fnames = new Array();
  //     window.ftypes = new Array();
  //     fnames[0]='EMAIL';
  //     ftypes[0]='email';
  //     fnames[1]='FNAME';
  //     ftypes[1]='text';
  //     fnames[2]='LNAME';
  //     ftypes[2]='text';
  // }(jQuery));
  // var $mcj = jQuery.noConflict(true);

  //     console.log("Hello")
  //
  //     // JavaScript
  //     // window.sr = ScrollReveal();
  //     // console.log("yes");
  //     // sr.reveal('.foo');
  //     // console.log("pls");
  //     // sr.reveal('.bar');
  //
  //     // interval passed to reveal
  // window.sr = ScrollReveal({ duration: 2000 });
  // console.log("da fuck")
  // sr.reveal('.page-content', 50);

  // showImage() {
  //   var theImages = [ 'img/fun1.jpg', 'img/fun1.jpg', 'img/fun1.jpg', 'img/fun1.jpg', 'img/fun1.jpg' ];
  //   var img = theImages[Math.round(Math.random() * (theImages.length - 1))];
  //   document.getElementById('splash').innerHTML = '<img src="' + img + '">');
  // }
  //
  // showImage();

  // window.onload = choosePic;
  //
  // var myPix = new Array("img/fun1.jpg","img/fun2.jpg","img/fun3.jpg");
  //
  // function choosePic() {
  //     randomNum = Math.floor((Math.random() * myPix.length));
  //     document.getElementById("myPicture").src = myPix[randomNum];
  // }
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
