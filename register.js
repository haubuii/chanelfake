function register() {

    document.getElementById("form-sign-in").style.display = "none";
    document.getElementById("form-register").style.display = "block";

    $('.register').addClass('border-register');
    $('.sign-in').removeClass('border-sign-in');
}

function signin() {

    document.getElementById("form-sign-in").style.display = "block";
    document.getElementById("form-register").style.display = "none";
    $('.register').removeClass('border-register-2');
    $('.register').removeClass('border-register');
    $('.sign-in').addClass('border-sign-in');
}

var list_user = localStorage.getItem("json_list_user");

if (list_user == null) {
    list_user = [];
    json_list_user = [];
    var admin = {
        username: "admin",
        email: "admin",
        fullname: "admin",
        sex: "admin",
        nationality: "admin",
        birthday_month: "admin",
        birthday_day: "admin",
        password: "admin"
    };
    list_user.push(admin)
    json_list_user = JSON.stringify(list_user);
    localStorage.setItem("json_list_user", json_list_user);
}
list_user = [];

function check_register() {


    var user_name = document.getElementById('username').value;
    var check;
    if (user_name == "") {
        $('#username').addClass('err_border');
        document.getElementById('username_err').innerHTML = "Username can't be left blank"
        check = false;

    } else {
        $('#username').removeClass('err_border');
        document.getElementById('username_err').innerHTML = ""
        check = true;
    }

    var email = document.getElementById('email').value;


    if (!isEmail(email)) {
        $('#email').addClass('err_border');
        document.getElementById('email_err').innerHTML = "Email not be invalid ";
        check = false;
    } else {
        $('#email').removeClass('err_border');
        document.getElementById('email_err').innerHTML = ""
        check = true;
    }

    var name = document.getElementById('name').value;
    if (name == "") {
        $('#name').addClass('err_border');
        document.getElementById('name_err').innerHTML = "Name can't be left blank";
        check = false;
    } else {
        $('#name').removeClass('err_border');
        document.getElementById('name_err').innerHTML = ""
        check = true;

    }
    var password = document.getElementById('password').value;


    if (password == "") {
        $('#password').addClass('err_border');
        document.getElementById('password_err').innerHTML = "Password can't be left blank";
        check = false;
    } else {
        $('#password').removeClass('err_border');
        document.getElementById('password_err').innerHTML = ""
        check = true;

    }

    var confirm_password = document.getElementById('confirm_password').value;

    if (confirm_password == "") {
        $('#confirm_password').addClass('err_border');
        document.getElementById('confirm_password_err').innerHTML = "Confirm Password can't be left blank"
        check = false;
    } else if (password !== confirm_password) {
        $('#confirm_password').addClass('err_border');
        document.getElementById('confirm_password_err').innerHTML = "Confirm Password not be invalid"
        check = false;
    } else {
        $('#confirm_password').removeClass('err_border');
        document.getElementById('confirm_password_err').innerHTML = ""
        check = true;

    }




    // ---------------------------------------- Select Box --------------------------------------------
    var sex = $('.sex_select')
    // console.log(sex.val())

    if (sex.val() === "" || sex.val() === null) {
        if (check_register) {
            $('.sex_select').addClass('err_border');
            document.getElementById('sex_err').innerHTML = "Please choose your Gender"
            check = false;
        }

    } else {
        $('.sex_select').removeClass('err_border');
        document.getElementById('sex_err').innerHTML = ""
        check = true;
    }
    var nationality = $('.select_nationality')
    // console.log(nationality.val())

    if (nationality.val() === "" || nationality.val() === null) {
        if (check_register) {
            $('.select_nationality').addClass('err_border');
            document.getElementById('nationality_err').innerHTML = "Please choose your Nationality";
            check = false;
        }

    } else {
        $('.select_nationality').removeClass('err_border');
        document.getElementById('nationality_err').innerHTML = "";
        check = true;
    }
    var birthday = $('.select_month')
    // console.log(birthday.val())

    if (birthday.val() === "" || birthday.val() === null) {
        if (check_register) {
            $('.select_month').addClass('err_border');
            document.getElementById('month_birthday_err').innerHTML = "Please choose Month"
            check = false;
        }

    } else {
        $('.select_month').removeClass('err_border');
        document.getElementById('month_birthday_err').innerHTML = "";
        check = true;
    }
    var birthday = $('.select_day')
    // console.log(birthday.val())

    if (birthday.val() === "" || birthday.val() === null) {
        if (check_register) {
            $('.select_day').addClass('err_border');
            document.getElementById('day_birthday_err').innerHTML = "Please choose Day"
            check = false;
        }

    } else {
        $('.select_day').removeClass('err_border');
        document.getElementById('day_birthday_err').innerHTML = "";
        check = true;
    }

    if (check) {

        var loop = (JSON.parse(localStorage.getItem("json_list_user")));
        console.log(loop)

        const username = document.querySelector("#username").value;
        const username_check = username;
        const email = document.querySelector("#email").value;
        const fullname = document.querySelector("#name").value;
        const sex = document.querySelector(".sex_select").value;
        const nationality = document.querySelector(".select_nationality").value;
        const birthday_month = document.querySelector(".select_month").value;
        const birthday_day = document.querySelector(".select_day").value;
        const password = document.querySelector("#confirm_password").value;
        var user = {
            username: username,
            email: email,
            fullname: fullname,
            sex: sex,
            nationality: nationality,
            birthday_month: birthday_month,
            birthday_day: birthday_day,
            password: password
        };


        for (var i = 0; i < loop.length; i++) {
            var check_username_same = true;
            if (loop[i].username == username_check) {
                document.getElementById('username_err').innerHTML = "This username has been taken. Please try another."
                check_username_same = false;
                break;
            }
        }
        if (check_username_same) {
            // if (check_username_same) {
                document.getElementById('username_err').innerHTML = "";
                // window.location="https://www.facebook.com/admin.admin.77715869";
                // list_user = []
                // list_user.push(user)
                var list_user_s2 = JSON.parse(localStorage.getItem("json_list_user"));
                list_user_s2.push(user)
                console.log(list_user_s2)
                json_list_user = JSON.stringify(list_user_s2);
                localStorage.setItem("json_list_user", json_list_user);
                alert("You have successfully created an account")
            // }
            
        }



    }

}
// ----------------------------------------------------- Eye ---------------------------------------------

function eye() {
    var mk = document.getElementById("password_signin");
    mk.type = (mk.type === "password") ? "text" : "password";
}
// -------------------------------------------------- Check Signin ----------------------------------------------------


function check_signin() {
    var check;

    var user_name = document.getElementById('username_signin').value;
    if (user_name == "") {
        $('#username_signin').addClass('err_border');
        document.getElementById('username_signin_err').innerHTML = "Username can't be left blank";
        check = false;
    }
    // else if (user_name !== check_username) {
    //     $('#username_signin').addClass('err_border');
    //     document.getElementById('username_signin_err').innerHTML = "Username isn't connected to an account.";
    //     check = false;
    // }
    else {
        $('#username_signin').removeClass('err_border');
        document.getElementById('username_signin_err').innerHTML = ""
        check = true;
    }


    var password = document.getElementById('password_signin').value;

    if (password == "") {
        $('#password_signin').addClass('err_border');
        document.getElementById('password_signin_err').innerHTML = "Password can't be left blank";
        check = false;
    }
    // else if (check_password !== password) {
    //     $('#password_signin').addClass('err_border');
    //     document.getElementById('password_signin_err').innerHTML = "The password that you've entered is incorrect.";
    //     check = false;
    // }
    else {
        $('#password_signin').removeClass('err_border');
        document.getElementById('password_signin_err').innerHTML = ""
        check = true;
    }
    // console.log(check_signin)
    if (check) {
        var loop = (JSON.parse(localStorage.getItem("json_list_user")));
        var check_signin_ = true;
        for (var i = 0; i < loop.length; i++) {
            console.log(loop[i].password)

            if (loop[i].username != user_name || loop[i].password != password) {
                document.getElementById('password_signin_err').innerHTML = "Login failed: username or password is incorrect."
                check_signin_ = false;
            }
            else if (loop[i].username == user_name && loop[i].password == password) {
                check_signin_ = true;
                document.getElementById('password_signin_err').innerHTML = ""
                const check_admin = "admin";

                if (user_name == check_admin) {
                    window.location = "San_pham/Quan_ly_san_pham.html";                    
                }
                else {
                    window.location = "index.html";                    
                }
                break;
            }


        }
    }



}

$("#username_signin").blur(function () {
    var user_name = document.getElementById('username_signin').value;
    if (user_name == "") {
        $('#username_signin').addClass('err_border');
        document.getElementById('username_signin_err').innerHTML = "Username can't be left blank"
    } else {
        $('#username_signin').removeClass('err_border');
        document.getElementById('username_signin_err').innerHTML = ""

    }
});
$("#password_signin").blur(function () {
    var password = document.getElementById('password_signin').value;
    if (password == "") {
        $('#password_signin').addClass('err_border');
        document.getElementById('password_signin_err').innerHTML = "Password can't be left blank"
    } else {
        $('#password_signin').removeClass('err_border');
        document.getElementById('password_signin_err').innerHTML = ""

    }



    // console.log(check_signin)
});

$("#username").blur(function () {
    var user_name = document.getElementById('username').value;
    if (user_name == "") {
        $('#username').addClass('err_border');
        document.getElementById('username_err').innerHTML = "Username can't be left blank"
    } else {
        $('#username').removeClass('err_border');
        document.getElementById('username_err').innerHTML = ""

    }
});
$("#name").blur(function () {

    var name = document.getElementById('name').value;
    if (name == "") {
        $('#name').addClass('err_border');
        document.getElementById('name_err').innerHTML = "Name can't be left blank"
    } else {
        $('#name').removeClass('err_border');
        document.getElementById('name_err').innerHTML = ""

    }
});
$("#password").blur(function () {
    var password = document.getElementById('password').value;
    if (password == "") {
        $('#password').addClass('err_border');
        document.getElementById('password_err').innerHTML = "Password can't be left blank"
    } else {
        $('#password').removeClass('err_border');
        document.getElementById('password_err').innerHTML = ""

    }
});

$("#confirm_password").blur(function () {
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;

    if (confirm_password == "") {
        $('#confirm_password').addClass('err_border');
        document.getElementById('confirm_password_err').innerHTML = "Confirm Password can't be left blank"
    } else if (password !== confirm_password) {
        $('#confirm_password').addClass('err_border');
        document.getElementById('confirm_password_err').innerHTML = "Confirm Password not be invalid"
    } else {
        $('#confirm_password').removeClass('err_border');
        document.getElementById('confirm_password_err').innerHTML = ""

    }
});



function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$("#email").blur(function () {
    var email = document.getElementById('email').value;

    if (!isEmail(email)) {
        $('#email').addClass('err_border');
        document.getElementById('email_err').innerHTML = "Email not be invalid ";
    } else {
        $('#email').removeClass('err_border');
        document.getElementById('email_err').innerHTML = ""
    }

});

// ---------------------------------------- Select Box --------------------------------------------


$(document).ready(function () {
    var check = false;
    $(".sex_select").click(function () {

        var sex = $('.sex_select')
        // console.log(sex.val())

        if (sex.val() === "" || sex.val() === null) {
            if (check) {
                $('.sex_select').addClass('err_border');
                document.getElementById('sex_err').innerHTML = "Please choose your Gender"
            }
            check = true;
        } else {
            $('.sex_select').removeClass('err_border');
            document.getElementById('sex_err').innerHTML = ""
        }
    });
});


$(document).ready(function () {
    var check = false;
    $(".select_nationality").click(function () {

        var nationality = $('.select_nationality')
        // console.log(nationality.val())

        if (nationality.val() === "" || nationality.val() === null) {
            if (check) {
                $('.select_nationality').addClass('err_border');
                document.getElementById('nationality_err').innerHTML = "Please choose your Nationality";
            }
            check = true;
        } else {
            $('.select_nationality').removeClass('err_border');
            document.getElementById('nationality_err').innerHTML = ""
        }
    });
});

$(document).ready(function () {
    var check = false;
    $(".select_month").click(function () {

        var birthday = $('.select_month')
        // console.log(birthday.val())

        if (birthday.val() === "" || birthday.val() === null) {
            if (check) {
                $('.select_month').addClass('err_border');
                document.getElementById('month_birthday_err').innerHTML = "Please choose Month"
            }
            check = true;
        } else {
            $('.select_month').removeClass('err_border');
            document.getElementById('month_birthday_err').innerHTML = ""
        }
    });
});

$(document).ready(function () {
    var check = false;
    $(".select_day").click(function () {

        var birthday = $('.select_day')
        // console.log(birthday.val())

        if (birthday.val() === "" || birthday.val() === null) {
            if (check) {
                $('.select_day').addClass('err_border');
                document.getElementById('day_birthday_err').innerHTML = "Please choose Day"
            }
            check = true;
        } else {
            $('.select_day').removeClass('err_border');
            document.getElementById('day_birthday_err').innerHTML = ""
        }
    });
});