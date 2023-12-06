let Store;

export class TuneMaker {
	constructor() {

	}

	static setup(store) {
		Store = store;
	}

	// note: [ pitch, length, joiner ]

	static convert() {
		let tuneStr = "f(x)=\\left\\{"
		if (Store.mode == "drone") {
			let firstIt = true;
			let pos = 0;
			Store.tune.forEach(note => {
				if (!firstIt) {
					tuneStr += ", ";
				}
				firstIt = false;

				tuneStr += `${pos}<x<${pos + note[1] - note[2]}: ${note[0]}`;
				pos += note[1];
				pos = Number(pos.toFixed(3));
			});
		} else if (Store.mode == "sine") {
			let firstIt = true;
			let pos = 0;
			Store.tune.forEach(note => {
				if (!firstIt) {
					tuneStr += ", ";
				}
				firstIt = false;

				tuneStr += `${pos}<x<${pos + note[1] - note[2]}: ${Store.sineFunc} + ${note[0]}`;
				pos += note[1];
				pos = Number(pos.toFixed(3));
			});
		}
		tuneStr += "\\right\\}";
		return tuneStr;
	}
}