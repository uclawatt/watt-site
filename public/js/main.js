document.addEventListener("DOMContentLoaded", function(event) {
    var eventsSource = $("#events-template").html();
    var eventsTemplate = Handlebars.compile(eventsSource);
    var officersSource = $("#officers-template").html();
    var officersTemplate = Handlebars.compile(officersSource);

    // <div class="row home-row">
    //     <div class="col xs-3 sm-3 md-2 home-date">
    //         10/3/17
    //     </div>
    //     <div class="col xs-21 sm-21 md-22">
    //         <p class="home-event-name">Fall General Meeting</p>
    //         <p>Maxwell Room | Welcome to WATT! It's time to kick off the year with some exciting announcements of our upcoming events as well as games to ignite friendships, both old and new. New members are welcome! *There may be free pizza*</p>
    //     </div>
    // </div>
    // <div class="row home-row">
    //     <div class="col xs-3 sm-3 md-2 home-date">
    //         10/10/17
    //     </div>
    //     <div class="col xs-21 sm-21 md-22">
    //         <p class="home-event-name">Ice-Breaking and Blocking</p>
    //         <p>Bottom of Janss Steps | Come and meet some fellow engineers at our first event of the school year! Get a chance to make some new WATT friends and race them down the Janss Steps' hill! *Diddy Riese will be provided!*</p>
    //     </div>
    // </div>
    // <div class="row home-row">
    //     <div class="col xs-3 sm-3 md-2 home-date">
    //         10/13/17
    //     </div>
    //     <div class="col xs-21 sm-21 md-22">
    //         <p class="home-event-name">Mentorship Reveal</p>
    //         <p>Boelter 4760 | All aboard the HogWATTs express! If you applied to be a part of the mentorship program come join us for an evening of icebreakers, pizza, and fun! You'll be sorted into houses and meet your family for the rest of the year!</p>
    //     </div>
    // </div>
    // <div class="row home-row">
    //     <div class="col xs-3 sm-3 md-2 home-date">
    //         10/19/17
    //     </div>
    //     <div class="col xs-21 sm-21 md-22">
    //         <p class="home-event-name">Wearables Worshop</p>
    //         <p>Boelter 4760 | All aboard the HogWATTs express! If you applied to be a part of the mentorship program come join us for an evening of icebreakers, pizza, and fun! You'll be sorted into houses and meet your family for the rest of the year!</p>
    //     </div>
    // </div>
    // <div class="row home-row">
    //     <div class="col xs-3 sm-3 md-2 home-date">
    //         11/7/17
    //     </div>
    //     <div class="col xs-21 sm-21 md-22">
    //         <p class="home-event-name">Study Session</p>
    //         <p>Need a place on campus to study for midterms? Come by and join other fellow members in the struggle of the midterm season. Snacks will be provided! Update: The room has been changed to the Faraday Room. See you all there!</p>
    //     </div>
    // </div>
    // <div class="row home-row">
    //     <div class="col xs-3 sm-3 md-2 home-date">
    //         11/14/17
    //     </div>
    //     <div class="col xs-21 sm-21 md-22">
    //         <p class="home-event-name">Depression and Anxiety Workshop</p>
    //         <p>What are depression and anxiety? How does it feel to you or people you know who have depression or anxiety? What are some tips to make us or others feel better when depressed or anxious? Take a deep breath, and come share your story. We will be alternating between a presentation and discussion. Food to boost your mood will be provided (nuts, dark chocolate, green tea)!</p>
    //     </div>
    // </div>
    // <div class="row home-row">
    //     <div class="col xs-3 sm-3 md-2 home-date">
    //         11/17/17
    //     </div>
    //     <div class="col xs-21 sm-21 md-22">
    //         <p class="home-event-name">Board Games and Riddles</p>
    //         <p>Swing by for a chance to play board games and get your mind blown with some fun riddles! Bring riddles to share and enjoy fun board and card games. Also a great way to self-care and meet some cool people during midterm season. Snacks and games will be provided!</p>
    //     </div>
    // </div>



    // var dataObj = {
    //     events: [
    //         {name: "WATT Winter GM", eventUrl: "https://www.facebook.com/events/543293826036231/", date: "1/11/18", location: "Maxwell Room (Eng IV 57-124)", description: "*Welcome back! It’s time to kick off the new year with some exciting announcements of our upcoming socials, info sessions, and workshops as well as some games to ignite friendships, both old and new. New members are welcome! Diddy Riese will be provided!"},
    //         {name: "Athena Hacks", eventUrl: "https://www.facebook.com/events/141764676445799/", date: "2/24/18", location: "USC Leavey Library", description: "*AthenaHacks 2.0 is happening! Join us on Feb 24-25 for a weekend filled with learning, exploring new topics, and building! AthenaHacks is Southern California's largest all-female hackathon. We work to make it an open and supportive environment for beginners or experienced hackers alike."},
    // {name: "Google Resume Workshop", eventUrl: "https://www.facebook.com/events/1568474673239901/", date: "1/16/18", location: "Engineering 6 Room 289", description: "*Want advice and practical suggestions for improving your resume? Join Google engineers and recruiters for a resume review session that will cover topics ranging from formatting and content selection, to techniques to highlight your skills. This will be an interactive session so please bring a copy of your resume. *RSVP at goo.gl/jREQpX *Note: the location has been changed to Eng VI Room 289."},
    // {name: "Uber Interview Workshop", eventUrl: "https://www.facebook.com/events/932627573552109/", date: "1/22/18", location: "Engr IV Room 53-125", description: "Ever wonder how to ace a technical interview? Need advice on how to tackle coding questions? Join WATT and Uber representatives for a technical interview workshop where you'll go through some example coding questions and also learn tips on what interviewers look for!*There will be food!!"},
    // {name: "Oath Info Session", eventUrl: "https://www.facebook.com/events/1751602825134901/", date: "1/24/18", location: "Engr IV Room 53-125", description: "Oath is a diverse house of more than 50 media and technology brands that engages more than a billion people around the world. The Oath portfolio includes Yahoo Sports, Yahoo Finance, Yahoo Mail, Tumblr, HuffPost, AOL.com, and more, with a mission to build brands people love.*We move fast, show our personality, and are relentlessly focused on inspiring and delighting our users every day. But don't take our word for it, come join us to hear first hand from our engineers about their experiences. *Food, drinks, swag, and a raffle ticket for a chance to win a prize will be available to students who arrive early!"},
    // {name: "LGBTQ Terminology Workshop", eventUrl: "https://www.facebook.com/events/579906702360037/", date: "1/30/18", location: "Engr IFV Room 67-124", description: "Come learn about LUG, Uhauling, a hundred footer, cruising, lipstick lesbian, pillow princess, and all the code words that you GBF or queer friends use 😉 and enjoy some dark chocolate and fruits (no gay pun intended)"},
    //     ],
    // };

    var dataObj = {
        events: [
            {name: "Women in Engineering Stayover Program (WESP)", eventUrl: "https://www.facebook.com/events/389786131444989/", date: "4/14/18", location: "Los Angeles, California 90024", description: "Come join us for our annual Women in Engineering Stayover Program! Host a prospective student and share with them why you LOVE being a Bruin and be a part of the reason they choose to be an engineer at UCLA! WESP includes: A special opening presentation by Dean Jayathi Murthy, an exciting scavenger hunt, a Diddy Riese ice sandwich party, a photobooth, and much more! *I know many of us had someone who inspired us to be engineers here, YOU can be that inspiration for someone else! *If you are an undergraduate ENGINEERING, PHYSICAL SCIENCE, or MATH major living on the hill, visit this link: https://reslife.ucla.edu/yield/freshman *And sign up under the option 'Women in Engineering Stayover Program hosted by Society for Women Engineers (SWE)'" },
            {name: "Intel Dinner", eventUrl: "https://www.facebook.com/events/1713695465318149/", date: "2/13/18", location: "Engr IV Room 53-125", description: "Join Intel team members, from Programmable Solutions Group, Fab Sort Manufacturing, Client Computing, Data Center & Tech Manufacturing. All STEM students welcome. Olive Garden will be served! Bring your resume! *Please RSVP as there is limited space.*https://goo.gl/forms/gj3jmSo4ax7u8x0l2"},
            {name: "Study Session", eventUrl: "https://www.facebook.com/events/173845570009004/", date: "2/20/18", location: "Engr IV Room 67-124", description: "Need a place on campus to study for midterms? Come by and join other fellow members in the struggle of midterm season. Snacks will be provided!"},
        ],
        officers: [
            {name: "Allison Doami", imgUrl: "img/boardmembers/allison.jpg", role: "External Co-President", email: "mailto:externalpresident@ieeewatt.com", bio: "Allison is a third year Electrical Engineering major. She is an avid frisbee, tennis, and soccer player who also loves to play the violin, piano, and ukulele in her spare time. Catch her making weird faces as she's doing her homework or eating Ike's in Westwood when she gets sick of campus food."},
            {name: "Tanvi Rane", imgUrl: "img/boardmembers/tanvi.jpg", role: "Internal Co-President", email: "mailto:internalpresident@ieeewatt.com", bio: "Tanvi is a fourth year Electrical Engineering major. She loves math, food, memes, dance, and her friends. As a chronic over-commiter, she has held many leadership positions in her time at UCLA, so for the sake of her sanity, she is slowly learning to say 'no' and prioritize her committments."},
            {name: "Katrina Wijaya", imgUrl: "img/boardmembers/katrina.jpg", role: "Secretary", email: "mailto:secretary@ieeewatt.com", bio: "Katrina is a third year Computer Science major. You can usually find her navigating through Boelter with Google Maps. She’s currently either thinking about food, eating food, or planning what food she’ll eat next. Alongside her passion for food, Katrina develops her (lacking) artistic skills through origami, nail art, and Pictionary."},
            {name: "Siranush Martirosyan", imgUrl: "img/boardmembers/siranush.jpg", role: "Treasurer", email: "mailto:treasurer@ieeewatt.com", bio: "Siranush is a second year Electrical Engineer interested in solar energy and electric vehicles. She loves to roller-skate, hike, latin dance, cook, travel, get inspired from nature and learn different languages."},
            {name: "Meena Nagappan", imgUrl: "img/boardmembers/meena.jpg", role: "Mentorship Chair", email: "mailto:mentorship@ieeewatt.com", bio: "Meena is a second year Electrical Engineering major. She loves chocolate, watching movies, and traveling. She would love to learn more languages so she can watch more movies."},
            {name: "Alejandra Uribe", imgUrl: "img/boardmembers/ale.jpg", role: "Social Chair", email: "mailto:social@ieeewatt.com", bio: "Alejandra is a second year Mathematics of Computation major. During her free time she enjoys playing the ukulele, watching Game of Thrones, and teaching people math."},
            {name: "Catherine Cheng", imgUrl: "img/boardmembers/catherine.jpg", role: "Advocacy and Wellness Chair", email: "mailto:advocacywellness@ieeewatt.com", bio: "Catherine is an EE senior at UCLA, engineering to help LGBTQ, mental health patients, and sexual assault survivors. She made an iOS self-care app, Mood Buddy, to help people with their emotional well being."},
            {name: "Jennifer Seki", imgUrl: "img/boardmembers/jennifer.jpg", role: "Events Coordinator", email: "mailto:events@ieeewatt.com", bio: "Second year Electrical Engineering major. Loves soccer, traveling, and food. Yearns to travel and eat more, but devastated by the cost."},
            {name: "Tanzeela Khan", imgUrl: "img/boardmembers/tanzeela.jpg", role: "Webmaster", email: "mailto:webmaster@ieeewatt.com", bio: "Tanzeela is a third year Computer Science and Engineering major. She loves hiking, singing terribly, watching musicals, and dj-ing. She's currently planning her escape."},
            {name: "Maurene Jiang", imgUrl: "img/boardmembers/maurene.jpg", role: "Corporate Relations", email: "mailto:corporate@ieeewatt.com", bio: "Third year Computer Science major with an unhealthy Salt & Straw obsession and slightly annoying love for cacti"},
            {name: "Melissa Cox", imgUrl: "img/boardmembers/melissa.jpg", role: "Publicity Chair", email: "mailto:publicity@ieeewatt.com", bio: "Melissa is a second year Computer Science major. She loves art, karaoke, and videogames. She does not like pollution, the quarter system, and comic sans. She hopes to travel to new destinations, especially natural wonders."},
            {name: "Rubia Liu", imgUrl: "img/boardmembers/rubia.jpg", role: "Workshops Chair", email: "mailto:workshops@ieeewatt.com", bio: "Rubia is a second year Computer Science major slowly sneaking into the Electrical Engineering major. She likes to daydream unfinished stories, coat her room with origami stars and cranes, and dismantle bigotry with passive aggression."},
        ]
    };

    $.each(dataObj.events,function(i,item){reformatToPs(i,item);})
    $('#events-mount').html(eventsTemplate({
        events: dataObj.events
    }));

    $('#officers-mount').html(officersTemplate({
        officers: dataObj.officers
    }));
    //
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

function reformatToPs(i, item){
    var list = item.description.split('*');
    var html = '';
     for(var i=0; i<list.length; i++) {
        html += '<p>' + list[i] + '</p>';
      }
    // html += '</ul>';
    item.description = html;
}
