//_ 1. variables
//? you can embed any javascript variables within JSX by enclosing
// it in curly braces . The value of the variable will be inserted into the DOM at the respective location.
// _ expressions =>
// using curly braces you cann also embed any valid javascript expression within JSX.
// ? 3 function calls =>
// you can also call functions within JSX by embedding the function call within curly braces.
//? 4 solutions can be better as it prevents cluttering of variable outside and encapsultes such logic inside a funtion
// One another benifite is also that , you can also pass some dynamic values as function parameter

React does not render `false` ,`null`
`undefine` , or `NaN` in the DOM . These values , when used in JSX , will result in nothing being displayed.

However, `0` and empty strings (`""`) are exceptions:

- **`0`** is rendered in the DOM because it is considered a valid React node . This means that if `0` is the result an ecpression, it will appear in your UI .

- **Empty string ** (`"`) are also considered valid
  and are rendered as well .

## import Export

Default Export : A file can have only one default export,
Default Import : When importing a default export , you can name the import whatever you like .

Nmae Export :
A file can have multiple named exports.
Each named export must be explicitly exported.

## short circuit evalution in react js

for logical or operator
const result = false || 'Hello' ; // 'Hello'
const result2 = true || 'World'; // true

## logical and operator

const result = true && 'Hello' ; // 'Hello'
const result2 = false && 'World'; // false

## nullish coalescing

const result = null ?? 'Hello' // 'Hello'
const result2 = undefined ?? 'World' ; // 'World'
const result3 = " ?? 'Fallback'; //"

## hooks rule in react js

it start with use**\_**(useState,useEffects,useReducer)
used at the top level of component
call hooks only from react function components or custom hook. do not call hooks from regular js function or in class components.
you can create your own custom hook

## useState() hook in react

it is a fundamental hook in react that allow you to add state manaegment to your functional components. it lets you store and update values that changes over time , enabling dynamic and interactive user interface.
const [count , setCount] = useState(0)
47

# 1 ) Functions passed to useState() and setState() runs twice during development mode to prevent developers from running side effects

react.js compare previous state and new state using object.is(),if it find both same then it will ignore re-rendering.

### use state challenge

## controlled Vs uncontrolled
