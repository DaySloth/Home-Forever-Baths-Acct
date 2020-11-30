//User Register / Login

$('#registerForm').on("submit", (event) => {
    event.preventDefault();
    if($('#password').val() === $('#confirmPassword').val()){
        //resetting validity for passwords matching
        $('#confirmPassword').setCustomValidity('');

        const userObj = {
            uuid: $('#uuid').val(),
            first_name: ($('#firstName').val()).toUpperCase(),
            last_name: ($('#lastName').val()).toUpperCase(),
            email: ($('#email').val()).toUpperCase(),
            password: $('#password').val(),
        };
        console.log(userObj);
    }else {
        //giving a validity error on the confirm password
        $('#confirmPassword').setCustomValidity('Passwords must be matching')
    }
    
    //call to register
    //$.post("/user/register")
    //redirect
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