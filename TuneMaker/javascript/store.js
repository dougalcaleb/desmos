export class DataStore{
	constructor() {
		this.playback = 1;
		this.mode = "drone";
		this.bpm = 60;
		this.scale = 10;

		this.tune = [];

		this.sineCompression = 1e9;
		this.sineFunc = `sin(${this.sineCompression}x) + `;

		this.notes = {
			"e": 1.01,
			"f": 2,
			"f#": 3,
			"g": 4,
			"g#": 5,
			"a": 6,
			"a#": 7,
			"b": 8,
			"c": 9,
			"c#": 10,
			"d": 11,
			"d#": 12,
			"e5": 13,
		
			"gb": 3,
			"ab": 5,
			"bb": 7,
			"db": 10,
			"eb": 12,
		
			"rest": 15,
		}

		this.noteNames = [
			["E", ""],
			["F", ""],
			["F&#9839;", "G&#9837;"],
			["G", ""],
			["G&#9839;", "A&#9837;"],
			["A", ""],
			["A&#9839;", "B&#9837;"],
			["B", ""],
			["C", ""],
			["C&#9839;", "D&#9837;"],
			["D", ""],
			["D&#9839;", "E&#9837;"],
			["E", ""],
			["&#119101;", ""]
		]
		
		this.noteLengths = {
			"whole": Number((60000 / this.bpm / 1000 / (100 / this.scale) * 20 * this.playback * 2).toFixed(3)),
			"dothalf": Number((60000 / this.bpm / 2 / 1000 / (100 / this.scale) * 20 * this.playback * 2).toFixed(3)) + Number((60000 / this.bpm / 4 / 1000 / (100 / this.scale) * 20 * this.playback * 2).toFixed(3)),
			"half": Number((60000 / this.bpm / 2 / 1000 / (100 / this.scale) * 20 * this.playback * 2).toFixed(3)),
			"dotquarter": Number((60000 / this.bpm / 4 / 1000 / (100 / this.scale) * 20 * this.playback * 2).toFixed(3)) + Number((60000 / this.bpm / 8 / 1000 / (100 / this.scale) * 20 * this.playback * 2).toFixed(3)),
			"quarter": Number((60000 / this.bpm / 4 / 1000 / (100 / this.scale) * 20 * this.playback * 2).toFixed(3)),
			"8th": Number((60000 / this.bpm / 8 / 1000 / (100 / this.scale) * 20 * this.playback * 2).toFixed(3)),
			"16th": Number((60000 / this.bpm / 16 / 1000 / (100 / this.scale) * 20 * this.playback * 2).toFixed(3)),
			"32nd": Number((60000 / this.bpm / 32 / 1000 / (100 / this.scale) * 20 * this.playback * 2).toFixed(3)),
		
			"pause": Number((60000 / this.bpm / 64 / 1000 / this.scale * 10).toFixed(3))
		}
	}


}