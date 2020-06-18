export default class Messenger {
	port: number;

	constructor(port: number) {
		this.port = port;
	}

	public messagePrint(): string {
		return `Node & Express server running on port: ${this.port}`;
	}
}