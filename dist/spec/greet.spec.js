"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = __importDefault(require("../greet"));
describe("greet function", () => {
    it("should return 'Hello John' when given 'John'", () => {
        const result = (0, greet_1.default)("John");
        expect(result).toBe("Hello John");
    });
    it("should return 'Hello Alice' when given 'Alice'", () => {
        const result = (0, greet_1.default)("Alice");
        expect(result).toBe("Hello Alice");
    });
    it("should return 'Hello World' when given an empty string", () => {
        const result = (0, greet_1.default)("");
        expect(result).toBe("Hello World");
    });
});
