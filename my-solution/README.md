# [Add up the Numbers from a Single NumberengeName](https://edabit.com/challenge/4gzDuDkompAqujpRi)

  if you type in a number it takes all the numbers lower then that number
  and adds them together.
  
  *EXAMPLE:*
  
    *4=> 4+3+2+1=10*
  
  Afterwards it gives you a answer.

## Syntax

> addUp(`number`, `number`, ...) -> `number`

### Parameters

**number**: `number`

>number is the parameter for my function "addUp" i choose number because this
>parameter will always be replaced with a number otherwise it won't work.

### Return Value: `number`

>The return value of my function is always a number because it always takes a
>number as a argument and after that it takes all the numbers lower then that
>number and add them all together and returns the total value.

## Test Case

### This is my solution

    ```js

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
    
    ```

## Use Cases

If someone wants to solve a problem involving math then he can use this.

If you cant to make a secret code/challenge for someone.

## Retrospective

Make more tests because if you have the wrong code but it works for the one test
that you have made you will have a problem.

### Continue Doing

Make more then 1 test.

### Start Doing

Learn more about jest so that you don't waste time on finding a solution.

Start to plan first so that you can find the problem faster.

### Stop Doing

Stop Jumping right in to solving stuff.
