# Running PACMAN Tests 
Follow the instructions below for either JavaScript or Python code.
Feel free to add new test cases inside the js_test or py_test directories, and update the test specs accordingly.

## Javascript tests
1. Place files to test inside the js_test directory. Make sure the test scripts are in the first level of js_test.
2. Run `npm i` in the js_test directory if this is your first time running the jasmine test.
3. If you don't have jasmine installed globally, run `npm install -g jasmine` before proceeding.
4. Run `jasmine spec/PacmanSpec.js ../pacman` from the js_test directory.
5. Make sure the pacman function is exported: the end of the `pacman.js` file should have `module.exports.pacman = pacman;`.

### Understanding the test run (JS)
The output will return results for 6 tests, including runtimes for each and a total runtime. If the candidate followed instructions accurately, all the tests should pass and the runtime should be reasonable (< 15 seconds). If you notice some failed tests DON'T immediately assume the candidate's code is completely wrong - it may be because the code isn't formatted correctly or there are some minor errors. Take a look at the code manually.


## Python tests
1. Place files to test inside the py_test directory. Make sure the test scripts are in the first level of js_test.
2. Usage (from the py_test directory):
  `python pacman.ut.py [submission.py]`
Arguments:
  `[submission.py]`
    Path of the pacman.py file you want to test.

### Understanding the test run (Python)
The output will return results from 2 groups of tests - runtime and accuracy. The runtime test will always fail, it is used just to show the actual runtime. The accuracy test will return the output from 5 unit tests. If the candidate followed instructions accurately, all the accuracy tests should pass and the runtime should be reasonable (< 1 second). If you notice some failed tests DON'T immediately assume the candidate's code is completely wrong - it may be because the code isn't formatted correctly or there are some minor errors. Take a look at the code manually.