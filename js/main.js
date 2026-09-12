await Promise.all(
    [...document.querySelectorAll("[data-component]")].map(async element => {
        element.innerHTML = await (
            await fetch(element.dataset.component)
        ).text();
    })
);

const imgElement = document.getElementById("coverimage");
if (img) {
    const hour = new Date().getHours();

    const githubLink = "https://nothenrymoon.github.io/images/header_banner/";
    const imageChosen = "";
    
    if (hour >= 6 && hour < 12) {
        imageChosen = "afternoon.jpg";
    } else if (hour >= 12 && hour < 18) {
        imageChosen = "afternoon.jpg";
    } else if (hour >= 18 && hour < 22) {
        imageChosen = "afternoon.jpg";
    } else {
        imageChosen = "afternoon.jpg";
    }

    imgElement.src = githubLink.concat(imageChosen);

    console.log("Hello, world!");
    console.log(githubLink.concat(imageChosen););
}