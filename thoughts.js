const cloud = document.querySelector(".thought-cloud");
const thoughts = document.querySelectorAll(".thought");
const hint = document.querySelector(".thought-hint");

cloud.addEventListener("mouseenter", () => {

    thoughts[0].style.left = "5%";
    thoughts[0].style.top = "20px";
    thoughts[0].style.transform = "rotate(-3deg)";

    thoughts[1].style.left = "55%";
    thoughts[1].style.top = "40px";
    thoughts[1].style.transform = "rotate(3deg)";

    thoughts[2].style.left = "30%";
    thoughts[2].style.top = "190px";
    thoughts[2].style.transform = "rotate(-2deg)";

    thoughts[3].style.left = "65%";
    thoughts[3].style.top = "230px";
    thoughts[3].style.transform = "rotate(4deg)";

    thoughts[4].style.left = "8%";
    thoughts[4].style.top = "360px";
    thoughts[4].style.transform = "rotate(3deg)";

    thoughts[5].style.left = "48%";
    thoughts[5].style.top = "400px";
    thoughts[5].style.transform = "rotate(-4deg)";

    hint.style.opacity = "0";
});


cloud.addEventListener("mouseleave", () => {

    thoughts[0].style.left = "40%";
    thoughts[0].style.top = "170px";
    thoughts[0].style.transform = "rotate(-8deg)";

    thoughts[1].style.left = "43%";
    thoughts[1].style.top = "200px";
    thoughts[1].style.transform = "rotate(6deg)";

    thoughts[2].style.left = "39%";
    thoughts[2].style.top = "215px";
    thoughts[2].style.transform = "rotate(-3deg)";

    thoughts[3].style.left = "42%";
    thoughts[3].style.top = "185px";
    thoughts[3].style.transform = "rotate(10deg)";

    thoughts[4].style.left = "41%";
    thoughts[4].style.top = "215px";
    thoughts[4].style.transform = "rotate(-12deg)";

    thoughts[5].style.left = "44%";
    thoughts[5].style.top = "250px";
    thoughts[5].style.transform = "rotate(4deg)";

    hint.style.opacity = "1";
});