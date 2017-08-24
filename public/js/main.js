document.addEventListener("DOMContentLoaded", function(event) {



    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            var target = $(this).attr('href');
            $('.parallax').animate({
                scrollTop: $(target).offset().top + $('.parallax').scrollTop()
            }, 2500);
            return false;
        });
    });

    $(document).ready(function () {
        $(".navbar-nav li a").click(function(event) {
            $(".navbar-collapse").collapse('hide');
        });
    });
    
    // var user, to, subject, text;
    // $("#send_email").click(function () {
    //     // enter your email account that you want to recieve emails at.
    //     to = "alexonej@gmail.com";
    //     name = $("#name").val();
    //     user = $("#user_email").val();
    //     text = $("#textarea1").val();
    //     // $("#message").text("Sending E-mail...Please wait");
    //     $.get("http://localhost:8080/send", {
    //         to: to,
    //         name: name,
    //         user: user,
    //         text: text
    //     }, function (data) {
    //         if (data == "sent") {
    //             console.log("Email sent");
    //         }
    //     });
    // });
    //
    // $('.modal-trigger').leanModal();


    // var from,to,subject,text;
    // $("#send_email").click(function(){
    //     console.log("haah main");
    //     to=$("#to").val();
    //     subject=$("#subject").val();
    //     text=$("#content").val();
    //     $("#message").text("Sending E-mail...Please wait");
    //     $.get("http://localhost:5000/send",{to:to,subject:subject,text:text},function(data){
    //     if(data=="sent")
    //     {
    //         $("#message").empty().html("Email is been sent at "+to+" . Please check inbox!");
    //     }});
    // });


    // var submitButton = document.getElementById("submit_form");
    // var form = document.getElementById("email_form");
    // form.addEventListener("submit", function (e) {
    //     setTimeout(function() {
    //         submitButton.value = "Sending...";
    //         submitButton.disabled = true;
    //     }, 1);
    // });

    // Y axis scroll speed
    // var velocity = 0.5;
    //
    // function update(){
    //     var pos = $(window).scrollTop();
    //     $('.container').each(function() {
    //         var $element = $(this);
    //         // subtract some from the height b/c of the padding
    //         var height = $element.height()-18;
    //         $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
    //     });
    // };
    //
    // $(window).bind('scroll', update);

    // $('.parallax').parallax();

    // $('.parallax-window').parallax({imageSrc: 'img/group-photo.jpg'});



});
