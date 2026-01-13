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
        name: "Eugenia Cho",
        imgUrl: "img/boardmember25/Eugenia.png",
        role: "President",
        bio:
          "Eugenia is a fourth-year electrical engineering major from Los Altos, CA. She loves all things trinkets and has a growing Beli recommendation list."
      },
      {
        name: "Katie Wang",
        imgUrl: "img/boardmember25/Katie.png",
        role: "Internal Vice President",
        bio:
          "Katie is a third-year electrical engineering major. She loves crafting, watching films, listening to music, and all things ocean-related, especially jellyfish! Her favorite WATT events are HogWATTs House events and outreach workshops."
      },
      {
        name: "Nina Kerr",
        imgUrl: "img/boardmember25/Nina.png",
        role: "External Vice President",
        bio:
        "Nina is a 3rd year computer engineering student. She loves spending time with her friends and family, being outdoors whether that means backpacking, skiing, or running, and finding fun new gluten free restaurants and bakeries to try in LA!"
      },
      {
        name: "Jessie Chan",
        imgUrl: "img/boardmember25/Jessie.jpg",
        role: "Technical Workshops",
        bio:
          "Jessie is a third-year electrical engineering major. In her free time, she enjoys playing her musical instruments and baking."
      },
      {
        name: "Emma Cao",
        imgUrl: "img/boardmember25/Emma.jpg",
        role: "Technical Workshops",
        bio:
          "Emma Cao is a second-year electrical engineering major from Palo Alto, CA. Her hobbies include going on long runs and playing all kinds of video games."
      },
      {
        name: "Heidi Hu",
        imgUrl: "img/boardmember25/Heidi.jpg",
        role: "Corporate Relations",
        bio:
          "Heidi is a third-year electrical engineer major from Santa Clara, CA. She finds a lot of joy in trying new food spots, particularly for brunch, and going on hikes and walks out in nature!"
      },
      {
        name: "Priya Soneji",
        imgUrl: "img/boardmember25/Priya.jpg",
        role: "Corporate Relations",
        bio:
        "Priya is a second-year electrical engineering major from Knoxville, TN. She enjoys all outdoor activities, especially skiing and tennis. You might catch her out on a spontaneous midnight walk or sipping various teas in a lounge."
      },
      {
        name: "Bella McDonald",
        imgUrl: "img/boardmember25/Bella.jpg",
        role: "Outreach",
        bio:
        "Bella is a 2nd year electrical engineering major. She always enjoys getting good food with friends, and she likes to spend time outside, so you can find her at the beach or Sunset Rec when the sun comes out."
      },
      {
        name: "Sydney Dang",
        imgUrl: "img/boardmember25/Sydney.jpg",
        role: "Outreach",
        bio:
        "Sydney is a 3rd year Psychobiology student and aspiring dentist. She loves working with children and students, especially through WATT’s Outreach events! You can find her at the newest cafes trying a matcha latte with no sweetener or on the tennis courts destroying her friends:D"
      },
      {
        name: "Michelle Murillo",
        imgUrl: "img/boardmember25/Michelle.jpg",
        role: "Mentorship",
        bio:
          "Michelle is a fourth-year electrical engineering major from San Diego, CA. She loves going to concerts and cozying up on weekends. When she can, she’ll go hiking or plan future trips."
      },
      {
        name: "Kyra Koh",
        imgUrl: "img/boardmember25/Kyra.jpg",
        role: "Mentorship",
        bio:
          "Kyra is a third-year electrical engineering major from Singapore. She is a fan of trains, buses and bikes, as well as visiting food spots and museums in any city that she visits."
      },
      {
        name: "Diya Cowlagi",
        imgUrl: "img/boardmember25/Diya.jpg",
        role: "Inclusive Excellence",
        bio:
          "Diya is a third-year applied math major from Pittsburgh, PA. She loves listening to audiobooks on Audible and watching reality TV!"
      },
      {
        name: "Amy Tran",
        imgUrl: "img/boardmember25/Amy.jpg",
        role: "Publicity",
        bio:
          "Amy is a third-year physiological science major and premed student. You can probably find her with a camera, listening to music, or doing all things nature-related! She also loves attending WATT’s cute workshops and outreach events at local schools!"
      },
      {
        name: "Zitong Wang",
        imgUrl: "img/boardmember25/Zitong.jpg",
        role: "Internal Affairs & Social",
        bio:
          "Zitong is a second-year electrical engineering major from Los Gatos, CA. She’s an avid fan of Chagee and honestly anything food related."
      },
      {
        name: "Sophie Zhu",
        imgUrl: "img/boardmember25/Sophie.jpg",
        role: "Treasurer (She/Her)",
        bio:
          "Sophie is a third-year Computer Science and Engineering major from Los Angeles. She loves trying new restaurants, exploring, and making things, whether it’s baking, models, crocheting, or anything using her hands!"
      },
      {
        name: "Alexa Fakhimi",
        imgUrl: "img/boardmember25/Alexa.jpg",
        role: "Secretary & Webmaster",
        bio:
          "Alexa is a fourth-year electrical engineering major from San Diego, CA. In her free time, she likes to try new matcha places and restaurants, go outside, and hang out with friends."
      },
      {
        name: "Saachi Bhayani",
        imgUrl: "mg/boardmember24/headshots/jpg/Saachi.jpg",
        role: "Events Coordinator",
        bio:
        "Saachi is a third-year Electrical Engineering major from Pleasanton, CA. The favorite part of her morning is her rejuvenating hot latte."
      },
      {
        name: "Ava Asamani",
        imgUrl: "img/boardmember24/headshots/jpg/Ava.jpg",
        role: "Graduate Advisor",
        bio:
          "Ava is a second year M.S./Ph.D. student in Electrical and Computer Engineering. She was an officer of WATT during her undergraduate degree and now helps out as a graduate advisor. Her PhD focuses on optimizing coding schemes of digital communication systems. In her free time she enjoys cooking, traveling and reading."
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
