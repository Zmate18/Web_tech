// Lenyíló ablak
$(document).ready(function(){
    justToggleSlide();
});

function justToggleSlide(){

    $('.toggleThis').click(function() {
        $(this).closest('.scroll').toggleClass('active');
        $(this).closest('.scroll').find('.content').stop().slideToggle();
    });
}

// Form ellenőrzés
function validateForm(){
    let nameField = document.forms["newsletterForm"]["name"].value;
    let emailField = document.forms["newsletterForm"]["email"].value;
    const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let errorMessage = "";

    if (nameField == "") {
        document.getElementById("name").style.outline = "1px solid red";
        errorMessage += "Név mező üres!<br>";
    }
    else {
        document.getElementById("name").style.outline = "none";
    }

    if (emailField == "") {
        document.getElementById("email").style.outline = "1px solid red";
        errorMessage += "Email mező üres!<br>"
    }
    else {
        document.getElementById("email").style.outline = "none";
    }

    if (!emailReg.test(emailField)) {
        document.getElementById("email").style.outline = "1px solid red";
        errorMessage += "Email formátuma nem megfelelő!<br>"
    }
    else {
        document.getElementById("email").style.outline = "none";
    }

    if (errorMessage.length > 0) {
        document.getElementById("errors").innerHTML = errorMessage;
        return false;
    }
    else {
        alert("Sikeresen feliratkoztál hírlevelünkre!");
        return true;
    }
}


