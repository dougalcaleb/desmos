export class DataStore{
	constructor() {
		this.playback = 1;
		this.mode = "drone";
		this.bpm = 60;
		
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
		
		this.noteLengths = {
			"whole": float('%.3f'%(60000 / bpm / 1000 / (100 / scale) * 20 * speed * 2)),
			"dothalf": float('%.3f'%(60000 / bpm / 2 / 1000 / (100 / scale) * 20 * speed * 2)) + float('%.3f'%(60000 / bpm / 4 / 1000 / (100 / scale) * 20 * speed * 2)),
			"half": float('%.3f' % (60000 / bpm / 2 / 1000 / (100 / scale) * 20 * speed * 2)),
			"dotquarter": float('%.3f'%(60000 / bpm / 4 / 1000 / (100 / scale) * 20 * speed * 2)) + float('%.3f'%(60000 / bpm / 8 / 1000 / (100 / scale) * 20 * speed * 2)),
			"quarter": float('%.3f'%(60000 / bpm / 4 / 1000 / (100 / scale) * 20 * speed * 2)),
			"8th": float('%.3f'%(60000 / bpm / 8 / 1000 / (100 / scale) * 20 * speed * 2)),
			"16th": float('%.3f'%(60000 / bpm / 16 / 1000 / (100 / scale) * 20 * speed * 2)),
			"32nd": float('%.3f'%(60000 / bpm / 32 / 1000 / (100 / scale) * 20 * speed * 2)),
		
			"notePause": float('%.3f'%(60000 / bpm / 64 / 1000 / scale * 10))
		}
	}


}