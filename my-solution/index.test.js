const addUp = require('./index');

describe('adds all the numbers lower then the given number and the given number', () =>{
    test('1' , () => {
        expect(addUp(4)).toBe(10);
    });
    test('2' , () => {
        expect(addUp(13)).toBe(91);
    });
    test('3' , () => {
        expect(addUp(600)).toBe(180300);
    });
    test('4' , () => {
        expect(addUp(0)).toBe(0);
    });
    test('5' , () => {
        expect(addUp(1000)).toBe(500500);
    });
    test('6' , () => {
        expect(addUp(1)).toBe(1);
    });
})