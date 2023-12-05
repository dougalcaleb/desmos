let Store;

export class uiHandler {

	constructor() {

	}

	static setup(store) {
		Store = store;
		uiHandler.listeners();
	}

	static listeners() {
		document.querySelector("#playback-input").addEventListener("input", (event) => {
			Store.playback = Math.pow(2, event.target.value)
			document.querySelector("#playback-speed-title").innerText = `Playback Speed (${Store.playback}x)`;
		});

		document.querySelector("#mode-drone").addEventListener("click", (event) => {
			Store.mode = "drone";
			document.querySelector("#mode-sine").classList.remove("setting-button-active");
			event.target.classList.add("setting-button-active");
		});

		document.querySelector("#mode-sine").addEventListener("click", (event) => {
			Store.mode = "sine";
			document.querySelector("#mode-drone").classList.remove("setting-button-active");
			event.target.classList.add("setting-button-active");
		});

		document.querySelector("#bpm-input").addEventListener("input", (event) => {
			Store.bpm = event.target.value;
		});
	}
}