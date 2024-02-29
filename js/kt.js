function ktUserName() {
    let regex = /^[a-z0-9_\.]{3,16}$/;
    let chuoi = document.getElementById("UserName").value;
    let kq = regex.test(chuoi);
    if (kq == true) {
        document.getElementById("kqUserName").innerHTML = "Hợp lệ ";
    } else {
        document.getElementById("kqUserName").innerHTML = "Không hợp lệ ";
    }
}

function ktPassword() {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let chuoi = document.getElementById("Password").value;
    let kq = regex.test(chuoi);
    if (kq == true) {
        document.getElementById("kqPassword").innerHTML = "Hợp lệ ";
    } else {
        document.getElementById("kqPassword").innerHTML = "Không hợp lệ ";
    }
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("Password");
    const passwordToggle = document.getElementById("password-toggle");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        passwordToggle.textContent = "Show";
    }
}

function ktemail() {
    let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let chuoi = document.getElementById("email").value;
    let kq = regex.test(chuoi);
    if (kq == true) {
        document.getElementById("kqemail").innerHTML = "Hợp lệ ";
    } else {
        document.getElementById("kqemail").innerHTML = "Không hợp lệ ";
    }
}


function ktIPv4() {
    let regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i;
    let chuoi = document.getElementById("IPv4").value;
    let kq = regex.test(chuoi);
    if (kq == true) {
        document.getElementById("kqIPv4").innerHTML = "Hợp lệ ";
    } else {
        document.getElementById("kqIPv4").innerHTML = "Không hợp lệ ";
    }
}

function ktHex() {
    let regex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;
    let chuoi = document.getElementById("Hex").value;
    let kq = regex.test(chuoi);
    if (kq == true) {
        document.getElementById("kqHex").innerHTML = "Hợp lệ ";
    } else {
        document.getElementById("kqHex").innerHTML = "Không hợp lệ ";
    }
}

function ktSLUG() {
    let regex = /^[a-z0-9-]+$/;
    let chuoi = document.getElementById("SLUG").value;
    let kq = regex.test(chuoi);
    if (kq == true) {
        document.getElementById("kqSLUG").innerHTML = "Hợp lệ ";
    } else {
        document.getElementById("kqSLUG").innerHTML = "Không hợp lệ ";
    }
}

function ktURL() {
    let regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/;
    let chuoi = document.getElementById("URL").value;
    let kq = regex.test(chuoi);
    if (kq == true) {
        document.getElementById("kqURL").innerHTML = "Hợp lệ ";
    } else {
        document.getElementById("kqURL").innerHTML = "Không hợp lệ ";
    }
}

function ktHTML() {
    let regex = /^<([a-z\d]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)$/;
    let chuoi = document.getElementById("HTML").value;
    let kq = regex.test(chuoi);
    if (kq == true) {
        document.getElementById("kqHTML").innerHTML = "Hợp lệ ";
    } else {
        document.getElementById("kqHTML").innerHTML = "Không hợp lệ ";
    }
}