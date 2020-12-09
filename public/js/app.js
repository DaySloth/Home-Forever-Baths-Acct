//Main page
$('#paidInFullBtn').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('paid');
    if ($('#notPaidInFullBtn').hasClass('unpaid')) {
        $('#notPaidInFullBtn').toggleClass('unpaid');
        $('#paymentReceivedDiv').toggleClass('hide');
    }
});

$('#notPaidInFullBtn').click(function (e) {
    e.preventDefault();
    if ($('#paidInFullBtn').hasClass('paid')) {
        $('#paidInFullBtn').toggleClass('paid');
    }
    $(this).toggleClass('unpaid');
    $('#paymentReceivedDiv').toggleClass('hide');
});

const fees = [];

$('#addFeeBtn').click(function (e) {
    e.preventDefault();
    fees.push($('#feeInput').val());
    $('#feeInput').val("");
    loadFees();
});

function loadFees() {
    $("#feesDiv").html("");
    fees.forEach(el => {
        $("#feesDiv").append(`<div class="item feeItem">$<span>${el}</span> <button class="ui icon button delFeeBtn"><i class="close icon"></i></button>`);
    })
}

$(document).on('click', '.delFeeBtn', function (e) {
    e.preventDefault();
    let fee = $(this)[0].parentElement.children[0].innerText
    if (fees.includes(fee)) {
        fees.splice(fees.indexOf(fee), 1);
        loadFees();
    }
});

$('#installForm').on("submit", (event) => {
    event.preventDefault();
    let installPrice = parseInt($('#installPrice').val());
    let specialOpts = [];
    let submitFees = [];
    let paymentStatus;
    let paymentReceived;

    if ($('#virtualOpt').is(":checked")) {
        specialOpts.push("Virtual");
    };
    if ($('#digitalOpt').is(":checked")) {
        specialOpts.push("Digital");
    };
    if ($('#hoaOpt').is(":checked")) {
        specialOpts.push("HOA");
    };

    if (fees.length !== 0) {
        fees.forEach(amount => {
            submitFees.push(parseInt(amount));
        });
    };

    if ($('#paidInFullBtn').hasClass('paid')) {
        paymentStatus = "Paid";
        paymentReceived = installPrice;
    } else if ($('#notPaidInFullBtn').hasClass('unpaid')) {
        paymentStatus = "Outstanding";
        paymentReceived = parseInt($("#paymentReceivedInput").val());
    }

    function calcInstallAmount() {
        let feeTotal = 0;
        submitFees.forEach(fee => {
            feeTotal = + fee
        });

        return installPrice - feeTotal;
    };

    const installObj = {
        install_date: $('#installDate').val(),
        install_name: $('#installName').val(),
        install_type: $('#installType').val(),
        price: installPrice,
        special_options: specialOpts,
        salesman: $('#salesman').val(),
        installer: $('#installerName').val(),
        fees: submitFees,
        payment_status: paymentStatus,
        payment_received: paymentReceived,
        outstanding_balance: (installPrice - paymentReceived),
        payment_method: $('#paymentMethod').val(),
        total_install_amount: calcInstallAmount(),
        notes: $('#installNotes').val(),
    };

    $.post('/api/install', installObj)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
});


// Install details page

$("#goBackBtn").click(e => {
    e.preventDefault();
    window.history.back();
});








//User Register / Login

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
            .then(response => {
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

    //call to login
    $.post('/user/login', userObj)
        .then(response => {
            window.location.href = "/";
        })
        .catch((error) => {
            $('#errorMessage').html(error.responseText);
        });
});

$('#deleteForm').on("submit", (event) => {
    event.preventDefault();

    const deleteObj = {
        uuid: $("#uuid").val(),
        password: $("#password").val()
    }

    //call to login
    $.ajax({
        url: '/user/delete',
        type: 'DELETE',
        data: deleteObj
    })
        .then(response => {
            $('#errorMessage').html("");
            $('#successMessage').html(`Successfully deleted <span class='deletedName'>${response.first_name} ${response.last_name}<span> <br> <a href='/login'> return to login</a>`);
        })
        .catch((error) => {
            $('#successMessage').html("");
            $('#errorMessage').html(error.responseText);
        });

});