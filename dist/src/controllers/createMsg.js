"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Messenger {
    constructor(port) {
        this.port = port;
    }
    messagePrint() {
        return `Node & Express server running on port: ${this.port}`;
    }
}
exports.default = Messenger;
