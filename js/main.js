document.querySelectorAll("[data-component]").forEach(async element => {
    const response = await fetch(element.dataset.component);
    element.innerHTML = await response.text();

    const imgElement = document.getElementById("coverimage");
    if (imgElement) {
        const hour = new Date().getHours();

        const githubLink = "https://nothenrymoon.github.io/images/header_banner/";
        let imageChosen = "";
    
        if (hour >= 6 && hour < 12) {
            imageChosen = "morning.jpg";
        } else if (hour >= 12 && hour < 18) {
            imageChosen = "afternoon.jpg";
        } else if (hour >= 18 && hour < 22) {
            imageChosen = "evening.jpg";
        } else {
            imageChosen = "midnight.jpg";
        }

        imgElement.src = githubLink.concat(imageChosen);
    }
});