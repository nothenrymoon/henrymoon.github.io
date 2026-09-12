document.querySelectorAll("[data-component]").forEach(async element => {
    const response = await fetch(element.dataset.component);
    element.innerHTML = await response.text();

    // Run scripts contained inside the component
    element.querySelectorAll("script").forEach(oldScript => {
        const newScript = document.createElement("script");

        [...oldScript.attributes].forEach(attribute => {
            newScript.setAttribute(attribute.name, attribute.value);
        });

        newScript.textContent = oldScript.textContent;
        oldScript.replaceWith(newScript);
    });
});