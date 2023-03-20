# ES6 BASICS

## File Descriptions

### [0-constants.js](/0-constants.js)
~ function taskFirst instantiate variables using 'const'
~ function taskNext instantiates variables using 'let'

### [1-block-scoped.js](./1-block-scoped.js)
~ script that modifies function taskBlock so that the variables aren't overwritten inside the conditional block

### [2-arrow.js](./2-arrow.js)
~ Function that uses ES6's arrow syntax of function add

### [3-default-parameter.js](./3-default-parameter.js)
~ Condeses internals of a function to line 1, without changing the name of each function/variable

### [4-rest-parameter.js](./4-rest-parameter.js)
~ Modifies function to return number of arguments passed to it using rest parameter syntax

### [5-spread-operator.js](./5-spread-operator.js)
~ Script that, using spread syntax, concatenates 2 arrays and each character of a string, With function body being one line.

### [6-string-interpolation.js](./6-string-interpolation.js)
~ Script that uses a template literal to substitute the variables defined

### [7-getBudgetObject.js](./7-getBudgetObject.js)
~ Function modified so that the budget object uses keyname instead of having same keys and variable names.

### [8-getBudgetCurrentYear.js](./8-getBudgetCurrentYear.js)
~ Function modified to use ES6 computed property names on the budget object

### [9-getFullBudget.js](./9-getFullBudget.js)
~ Function modified to use ES6 method properties in the fullBudget object.

### [10.loops.js](./10-loops.js)
~ Function modified to use ES6’s for...of operator.

### [11-createEmployeesObject.js](./11-createEmployeesObject.js)
~ Function that receives two arguments:
                            ~ departmentName(String)
                            ~ employees(Array of strings)
### [12-createReportObject.js](./12-createReportObject.js)
~ Script containing function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject

### [100-createIteratorObject.js](./100-createIteratorObject.js)
~ Script containing a function named createIteratorObject, that will take into argument a report Object created with the previous function createReportObject. This function will return an iterator to go through every employee in every department.

### [101-iterateThroughObject.js](./101-iterateThroughObject.js)
~ Script containig a function named iterateThroughObject. The function’s parameter reportWithIterator is the return value from createIteratorObject.
