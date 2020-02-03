# QAC | JavaScript Conventions

## 🔰 DocBlock | JavaScript Documentation Standards

JSDoc is a markup language used to annotate JavaScript source code files. Using comments containing JSDoc, programmers can add documentation describing the application programming interface of the code they're creating.

* [JSDoc](https://jsdoc.app/)

### Single Line Comments

```js
// Extract the array values.
```

### Multi-Line Comments

```js
/**
 * This is a comment that is long enough to warrant being stretched over
 * the span of multiple lines. You'll notice this follows basically
 * the same format as the JSDoc wrapping and comment block style.
 */
```

### Class

```js
/**
 * @class ClassName
 *
 * @description Here you can describe this class.
 *
 * @author First and Last Name | Github User
 */
```

### Functions

```js
/**
* @function nameFunction
*
* @description Here you can describe this function.
*
* @author First and Last Name | Github User
*
* @param {string} test - Example param test.
*
* @returns {Promise<any>}
*
* @example nameFunction('testValue');
*/
```

### Interfaces

```js
/**
 * @interface NameInterfaceType
 *
 * @description Here you can describe this interface.
 *
 * @author First and Last Name | Github User
 *
 * @property {string} key - Example key property.
 */
```

## ⭐️ Lintings | JavaScript Style Guide

### What is a style guide

A style guide is a set of standards that outline how code should be written and organized.
A style guide contains general rules about “how to write” code, e.g. which quotes to use, how many spaces to indent, where to put line breaks, etc. A lot of minor things.

### Why a style guide is must

Each developer writes code differently. That’s fine, until we are working on our code.
As count of developers increase 5->10->20->50, things get messy when all are working on common codebase.
Style guides are created so new developers can get up to speed on a code base quickly, and then write code that other developers can understand quickly and easily!

* [ESLint](https://eslint.org/)
* [Airbnb Style Guide](https://airbnb.io/projects/javascript/)

## 💎 Data Type | JavaScript Expression

TypeScript is mainly about adding types to JavaScript. That means that TypeScript requires you to accurately describe the format of your objects and your data. When you do that, that means that the compiler can investigate your code and discover errors. It can see that you are trying to call a function with the wrong kinds of arguments, or reference a variable that is not accessible in the current scope.

* [TypeScript](https://www.typescriptlang.org/)
