//User Register / Login

function storeUser(user) {

}

$('#password, #confirmPassword').on('keyup', function () {
    if ($('#password').val() == $('#confirmPassword').val()) {
        $('#message').html('Passwords Match').css('color', 'green');
    } else
        $('#message').html("Passwords Don't Match").css('color', 'red');
});

$('#registerForm').on("submit", (event) => {
    event.preventDefault();
    if ($('#password').val() === $('#confirmPassword').val()) {

        const userObj = {
            uuid: $('#uuid').val(),
            first_name: ($('#firstName').val()).toUpperCase(),
            last_name: ($('#lastName').val()).toUpperCase(),
            email: ($('#email').val()).toUpperCase(),
            password: $('#password').val(),
        };

        $.post('/user/register', userObj)
            .then(response=>{
                console.log("hi");
                window.location.href = "/";
            })
            .catch((error) => {
                console.log(error.responseText);
                $('#message').html("");
                $('#errorMessage').html(error.responseText);
            });

    } else {
        //giving a validity error on the confirm password
        $('#message').html("Passwords Need To Match").css('color', 'red');
    }
});

$('#loginForm').on("submit", (event) => {
    event.preventDefault();
    const userObj = {
        email: ($('#email').val()).toUpperCase(),
        password: $('#password').val(),
    };
    console.log(userObj);
    //call to login
    //$.post("/user/login")
    //redirect
});