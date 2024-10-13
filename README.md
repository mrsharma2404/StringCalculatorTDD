# StringCalculatorTDD

String Calculator is a function which takes multiple numbers separated by a delimiter and give you sum of all numbers as output.

TDD - Test-driven development (TDD) is a software development method that involves writing automated tests before writing code

1. code is written on this file ./StringCalculator.ts
2. Test cases are written in ./StringCalculator.test.ts

### Development Setup

## Steps to run test case

### Step 1 - Clone the repo

```
git clone git@github.com:mrsharma2404/StringCalculatorTDD.git
```

### Step 2 - Select required node version

```
nvm use
```

### Step 3 - Install dependencies

```
npm i
```

### Step 4 - Run test cases

```
npm test
```

## Steps to run file

### Step 1 - Install Dependencies

To run the TypeScript file, ensure you have ts-node and typescript installed globally. You can do this by running:

```
npm install -g ts-node typescript
```

### Step 2 - Call the Function

Open the StringCalculator.ts file, and call the desired function. Use console.log to display the output, for example:

```
console.log(StringCalculator("1,2,3")); // 6
```

### Step 3 - Run the TypeScript File

```
ts-node StringCalculator.ts
```
