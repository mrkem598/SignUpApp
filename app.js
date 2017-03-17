
    // Needed to create this function to readCookies. Essentially it splits up the cookie list
    /*creating our cookies function*/
    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    }

    // Now I am going to Capture Button Click
    $("#add-user").on("click", function(event) {
      event.preventDefault();

      // Next Capture User Inputs and store it into variables as follow!
      var name = $("#name-input").val().trim();
      var email = $("#email-input").val().trim();
      var age = $("#age-input").val().trim();
      var comment = $("#comment-input").val().trim();

      // Before I move on to the next I will be Console log each of the user inputs to confirm that  I am receiving them!
      console.log(name);
      console.log(email);
      console.log(age);
      console.log(comment);

      // here I will be displaying the Output of all of the new information into the relevant sections inside the html!
      $("#name-display").html(name);
      $("#email-input").html(email);
      $("#age-input").html(age);
      $("#comment-input").html(comment);

      // Following that I will be Clearing the previous cookie by setting it it equal to nothing and its expiration date to a past time!
      document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

      // Now I will Store all of the parameters as part of the cookie string
      document.cookie = "name=" + name;
      document.cookie = "email=" + email;
      document.cookie = "age=" + age;
      document.cookie = "comment=" + comment;

      // Here Print all the cookies
      console.log(document.cookie);

      // Recover the parameters by passing the cookie parameters of interest,
      // through a function that breaks the document.cookie
      var cookieName = readCookie("name");
      var cookieEmail = readCookie("email");
      var cookieAge = readCookie("age");
      var cookieComment = readCookie("comment");

      // Log all of the cookies to test
      console.log(cookieName);
      console.log(cookieEmail);
      console.log(cookieAge);
      console.log(cookieComment);
    });

    // By default display the content from the cookieString
    $("#name-display").html(readCookie("name"));
    $("#email-display").html(readCookie("email"));
    $("#age-display").html(readCookie("age"));
    $("#comment-display").html(readCookie("comment"));
  
