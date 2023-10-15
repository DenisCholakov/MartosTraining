document.getElementById("home_button").addEventListener("click", () => {
    hideAllSections();
    document.getElementById("home_section").style.display = "block";
});

document.getElementById("people_button").addEventListener("click", async () => {
    hideAllSections();
    document.getElementById("people_section").style.display = "block";
    const contentEl = document.getElementById("people_content");

    try {
        const response = await fetch("https://swapi.dev/api/people");

        if(!response.ok) {
            const error = await response.json();
            alert(error);
        }

        const data = await response.json();
        
        contentEl.innerHTML = data.results.map(toPersonCard).join("");

    } catch (error) {
        alert(error.message);
    }
});

document.getElementById("planets_button").addEventListener("click", () => {
    hideAllSections();
    document.getElementById("planets_section").style.display = "block";
});

document.getElementById("species_button").addEventListener("click", () => {
    hideAllSections();
    document.getElementById("species_section").style.display = "block";
});

document.getElementById("starships_button").addEventListener("click", () => {
    hideAllSections();
    document.getElementById("starships_section").style.display = "block";
});

document.querySelector("button.search_button").addEventListener("click", async () => {
    const searchText = document.querySelector("input.search_input").value;
    const contentEl = document.getElementById("people_content");

    try {
        const response  = await fetch(`https://swapi.dev/api/people?search=${searchText}`);

        if (!response.ok) {
            const error = await response.json();
            alert(error);
        }

        const data = await response.json();
        contentEl.innerHTML = data.results.map(toPersonCard).join("");
    } catch (error) {
        alert(error.message);
    }
})


const hideAllSections = () => {
    document.querySelectorAll("section").forEach(s => s.style.display = "none");
};

const toPersonCard = (person) => {
    return `<div class="person_card">
        <h3>${person.name}</h3>
        <p>height: ${person.height}</p>
        <p>mass: ${person.mass}</p>
    </div>`
}

hideAllSections();