export class ObserverList {
	constructor() {
		this.observerList = [];
	}

	add(obj) {
		return this.observerList.push(obj);
	}

	count() {
		return this.observerList.length;
	}

	get(index) {
		if (index > -1 && index < this.count()) {
			return this.observerList[index];
		}
	}

	indexOf(obj, startAt = 0) {
		var index = startAt;

		while(index < this.count()) {
			if (obj === this.observerList[index]) {
				return index
			}

			i++;
		}

		return -1;
	}

	removeAt(index) {
		this.observerList.splice(index, 1);
	}
}
