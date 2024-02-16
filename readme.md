Picture a scenario where your manager informs you that the code you've developed is set to be released into production tomorrow. How confident do you feel about the quality of your work? Testing your code before its release becomes crucial in building that confidence.

In this instance, I'll illustrate the process of unit testing JavaScript code using Jasmine, a widely-used testing tool. The math.js file encompasses straightforward functions – add, subtract, multiply, and divide – designed to operate on two numbers.

Within the math.spec.js file, two Jasmine tests are crafted using describe and it blocks. The initial test validates the accuracy of the add and subtract functions when applied to positive numbers. Meanwhile, the second test ensures the add and subtract functions handle negative numbers appropriately.

Fabonaci, factorial, and bubbleSort algorithms also tested using jasmine.

To execute these tests, simply run the command npx jasmine in your terminal or bash environment.