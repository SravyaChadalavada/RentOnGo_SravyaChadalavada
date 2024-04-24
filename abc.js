$(document).ready(function() {
    // Function to handle hashchange event
    $(window).on("hashchange", function () {
        if (location.hash.slice(1) === "signup") {
            $(".page").addClass("extend");
            $("#login").removeClass("active");
            $("#signup").addClass("active");
        } else {
            $(".page").removeClass("extend");
            $("#login").addClass("active");
            $("#signup").removeClass("active");
        }
    });

    // Trigger hashchange event on page load
    $(window).trigger("hashchange");

    // Function to validate login form
    function validateLoginForm() {
        var name = document.getElementById("logName").value;
        var password = document.getElementById("logPassword").value;
        if (name === "" || password === "") {
            document.getElementById("errorMsg").innerHTML = "Please fill the required fields";
            return false;
        } else if (password.length < 8) {
            document.getElementById("errorMsg").innerHTML = "Your password must include at least 8 characters";
            return false;
        } else {
            // For demonstration purposes, alert is used instead of redirecting to homepage
            alert("Successfully logged in");
            return true;
        }
    }

    // Function to validate signup form
    function validateSignupForm() {
        var mail = document.getElementById("signEmail").value;
        var name = document.getElementById("signName").value;
        var password = document.getElementById("signPassword").value;
        if (mail === "" || name === "" || password === "") {
            document.getElementById("errorMsg").innerHTML = "Please fill the required fields";
            return false;
        } else if (password.length < 8) {
            document.getElementById("errorMsg").innerHTML = "Your password must include at least 8 characters";
            return false;
        } else {
            // For demonstration purposes, alert is used instead of redirecting or performing other actions
            alert("Successfully signed up");
            return true;
        }
    }

    // Event listeners for form submission
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        validateLoginForm(); // Call validateLoginForm function
    });

    document.getElementById("signupForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        validateSignupForm(); // Call validateSignupForm function
    });
});
