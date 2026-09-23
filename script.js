const factButton = document.querySelector("#fact-button");
const funFact = document.querySelector("#fun-fact");
const themeButton = document.querySelector("#theme-button");
const shuffleButton = document.querySelector("#shuffle-button");
const surpriseButton = document.querySelector("#surprise-button");
const spotlightButton = document.querySelector("#spotlight-button");
const expandButton = document.querySelector("#expand-button");
const orbitButton = document.querySelector("#orbit-button");
const pictureHolder = document.querySelector(".picture-holder");
const visitEffects = ["rise", "glow", "drift"];
const visitAccents = ["#22d3ee", "#fbbf24", "#a78bfa", "#fb7185"];
const randomEffect = visitEffects[Math.floor(Math.random() * visitEffects.length)];
const randomAccent = visitAccents[Math.floor(Math.random() * visitAccents.length)];

document.body.classList.add(`visit-${randomEffect}`);
document.body.style.setProperty("--visit-accent", randomAccent);

factButton.addEventListener("click", () => {
	funFact.hidden = !funFact.hidden;
	factButton.textContent = funFact.hidden ? "Show a fun fact" : "Hide the fun fact";
});

themeButton.addEventListener("click", () => {
	document.body.classList.toggle("light-mode");
	themeButton.textContent = document.body.classList.contains("light-mode")
		? "Use dark theme"
		: "Switch theme";
});

shuffleButton.addEventListener("click", () => {
	const pictures = Array.from(pictureHolder.children);

	for (let index = pictures.length - 1; index > 0; index -= 1) {
		const randomIndex = Math.floor(Math.random() * (index + 1));
		[pictures[index], pictures[randomIndex]] = [pictures[randomIndex], pictures[index]];
	}

	pictures.forEach((picture) => pictureHolder.appendChild(picture));
	shuffleButton.textContent = "Pictures shuffled";
});

surpriseButton.addEventListener("click", () => {
	document.body.classList.toggle("party-mode");
	surpriseButton.textContent = document.body.classList.contains("party-mode")
		? "Calm it down"
		: "Surprise me";
});

spotlightButton.addEventListener("click", () => {
	document.body.classList.toggle("spotlight-mode");
	spotlightButton.textContent = document.body.classList.contains("spotlight-mode")
		? "Show all sections"
		: "Spotlight gallery";
});

expandButton.addEventListener("click", () => {
	document.body.classList.toggle("expanded-mode");
	expandButton.textContent = document.body.classList.contains("expanded-mode")
		? "Shrink layout"
		: "Expand layout";
});

orbitButton.addEventListener("click", () => {
	document.body.classList.toggle("orbit-mode");
	orbitButton.textContent = document.body.classList.contains("orbit-mode")
		? "Stop orbit"
		: "Orbit pictures";
});
