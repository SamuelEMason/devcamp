class Subject {
	constructor() {
		this.observers = [];
	}

	subscribe = (fn) => {
		this.observers.push(fn);
	};

	unsubscribe = (target) => {
		this.observers = this.observers.filter((fn) => fn != target);
	};

	fire = () => {
		this.observers.forEach((fn) => fn());
	};
}

module.exports = Subject;