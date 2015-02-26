import {ObserverList} from './observer-list'

export class Subject() {
	constructor() {
		this.observers = new ObserverList();
	}

	addObserver(observer) {
		this.observers.add(observer);
	}

	removeObserver(observer) {
		this.observers.removeAt(this.observers.indexOf(observer));
	}

	notify(context) {
		for (var i = 0, length = this.observers.count(); i < length; i++) {
			this.observers.get(i).update(context);
		}
	}
}
