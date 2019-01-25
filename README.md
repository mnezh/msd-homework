# msd-homework
Homework for MSD Czech Republic s.r.o

## Objectives
### DONE: Test automation
Use your most preferred test automation framework to automate test without using automation recorders or code generators: 
Go to your favorite e-shop, navigate to some category and add two
most expensive items to the shopping cart from this category.
Provide code from implementation.
### DONE: Coding
Write a program in any programming language that counts backwards from value provided by user to 1 and prints: “Agile” if the number is divisible by 5, “Software” if the
number is divisible by 3, “Testing” if the number is divisible by both,
or prints just the number if none of those cases are true.

## Prerequisites
* node.js LTS (project uses 10.15.0)

## Installation
* checkout the repository
* in the repository directory run:
```
npm i
```

## Testing the code
* `npm run test` should execute Jest tests of coding objective
* `npm run lint` should execute eslint
* `npm run audit` should check dependency vulnerabilities
Pre-commit hook executes all `npm run` testing targets to prevent commiting broken code.

## Running the delivered code
Make sure you've installed all dependencies via `npm i`

### Coding objective
* `bin/countdown [number]` should print expected output
```
./bin/countdown 3
Software
2
1
```
* `bin/countdown` should print usage information
```
./bin/countdown
Usage: countdown [number]
  number - positive integer
```

### Web UI testing objective
Webdriver.io with standalone Chrome executor was used as a test driver.
The test is implemented in Mocha, application and screen abstraction layer is provided.

Use `npm run web-test` command to run the test.

See the sample spec reporter output for test execution:
```
$ npm run web-test
Stdout:

"spec" Reporter:
------------------------------------------------------------------
[chrome #0-0] Spec: /Users/andrey.mishustin/Gits/mnezh/msd-homework/test/web-automation/guitarShop.spec.js
[chrome #0-0] Running: chrome
[chrome #0-0]
[chrome #0-0] Buy two most expensive basses
[chrome #0-0]    ✓ I click Bass Guitars
[chrome #0-0]    ✓ I expand Electric Bass Guitars
[chrome #0-0]    ✓ I list offers from most expensive
[chrome #0-0]    ✓ I order most expensive bass
[chrome #0-0]    ✓ I order second most expensive bass
[chrome #0-0]    ✓ I go to shopping cart
[chrome #0-0]    ✓ I see two items in cart
[chrome #0-0]
[chrome #0-0] 7 passing (9.3s)


Stdout:
2019-01-25T13:47:49.922Z INFO wdio-cli:Launcher: Run onPrepare hook
2019-01-25T13:47:51.717Z INFO wdio-local-runner: Start worker 0-0 with arg: 
2019-01-25T13:48:02.963Z DEBUG wdio-local-runner: Runner 0-0 finished with exit code 0

Test Suites:	 1 passed, 1 total (100% completed)
Time:		 🕒  13.11s
```