let Store;

export class uiHandler {

	rowEven = true;
	rowName = null;

	constructor() {

	}

	static setup(store) {
		uiHandler.rowName = getRowName();
		console.log(uiHandler.rowName);
		Store = store;
		uiHandler.listeners();
		uiHandler.noteBoard();
	}

	static listeners() {
		document.querySelector("#playback-input").addEventListener("input", (event) => {
			Store.playback = Math.pow(2, event.target.value);
			const decMap = {
				"8": "8",
				"4": "4",
				"2": "2",
				"1": "1",
				"0.5": "1/2",
				"0.25": "1/4",
				"0.125": "1/8",
				"0.0625": "1/16",
				"0.03125": "1/32"
			}
			document.querySelector("#playback-speed-title").innerText = `PLAYBACK SPEED (${decMap[Store.playback]}x)`;
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

		document.querySelector("#bpm-input").addEventListener("keydown", (event) => {
			if (event.key == "Enter") {
				event.target.blur();
			}
		});

		document.querySelector("#bpm-input").addEventListener("blur", (event) => {
			if (Number(event.target.value) > Number(event.target.max)) {
				event.target.value = event.target.max;
			} else if (Number(event.target.value) < Number(event.target.min)) {
				event.target.value = event.target.min;
			}
		});
	}

	static noteBoard() {
		for (let a = 0; a < Store.noteNames.length; a++) {
			let noteRow = document.createElement("div");
			noteRow.classList.add("note-row");
			noteRow.style.background = getRowColor(uiHandler.rowEven);
			uiHandler.rowEven = !uiHandler.rowEven;
			noteRow.innerHTML = Store.noteNames[a][0] + (Store.noteNames[a][1] != "" ? "/" + Store.noteNames[a][1] : "");
			document.querySelector("#board-note-wrap").appendChild(noteRow);
		}
	}
}

function getRowColor(row) {
	return row ? "#191919" : "#282828";
	// return row ? "#363636" : "#282828";
}

function* getRowName() {
	for (let a = 0; a < Store.noteNames.length; a++) {
		yield Store.noteNames[a][0] + Store.noteNames[a][1] != "" ? "/" + Store.noteNames[1] : "";
	}
}