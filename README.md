# msd-homework
Homework for MSD Czech Republic s.r.o

## Objectives
### TODO: Test automation
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
Pre-commit hook executes both `npm run` testing targets to prevent commiting broken code.

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
