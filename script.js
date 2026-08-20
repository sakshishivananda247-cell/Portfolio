let btn = document.getElementById("btn");

btn.onclick = function() {
    alert("Thank you for visiting my Portfolio!");
};
function changeText() {
    document.getElementById("message").innerHTML =
        "Thank you for visiting my portfolio!";
}

function greetUser() {
    let name = document.getElementById("userName").value;

    if (name === "") {
        document.getElementById("greeting").innerHTML =
            "Please enter your name.";
    } else {
        document.getElementById("greeting").innerHTML =
            "Hello " + name + "! Welcome to my portfolio.";
    }
}

function toggleAbout() {
    let text = document.getElementById("aboutText");

    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
function greetUser() {
    let name = document.getElementById("userName").value;
    document.getElementById("greeting").innerHTML = "Hello " + name + ",Welcome to my Portfolio!";
}