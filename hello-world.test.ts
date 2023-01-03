import {helloWorld} from "./hello-world";

it('helloWorld should return correct string', function () {
    expect(helloWorld()).toBe('hello world');
});