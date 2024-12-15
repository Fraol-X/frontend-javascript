
# TypeScript

This project introduces TypeScript, a strongly typed programming language that builds on JavaScript, adding static typing and other useful features. The tasks aim to deepen your understanding of TypeScript fundamentals and advanced features, such as interfaces, classes, declaration merging, namespaces, and nominal typing.

---

## Project Tasks Overview

### 0. **Creating an Interface for a Student**
- Define a `Student` interface with properties: `firstName`, `lastName`, `age`, and `location`.
- Render a table using TypeScript and Vanilla JavaScript to display students' first names and locations.

### 1. **Building a Teacher Interface**
- Create a `Teacher` interface with attributes, including optional and dynamic properties.
- Implement immutability for `firstName` and `lastName`.

### 2. **Extending the Teacher Interface**
- Extend the `Teacher` interface to create a `Directors` interface with an additional property `numberOfReports`.

### 3. **Printing Teachers**
- Write a function `printTeacher` to format and display a teacher's name in a specific format.

### 4. **Writing a Class**
- Create a `StudentClass` with methods to display a student's name and describe their work.

### 5. **Advanced Types - Part 1**
- Implement interfaces for `Director` and `Teacher`, each with specific methods.
- Create a function `createEmployee` to return instances of `Director` or `Teacher` based on a salary threshold.

### 6. **Employee-Specific Functions**
- Implement functions to differentiate between `Director` and `Teacher` and execute tasks specific to their roles.

### 7. **String Literal Types**
- Define a `Subjects` type allowing only `Math` or `History` values.
- Write a function `teachClass` to display messages based on the subject.

### 8. **Ambient Namespaces**
- Use an ambient namespace to define types and integrate a library (`crud.js`) for database operations.

### 9. **Namespace & Declaration Merging**
- Work with namespaces to define `Teacher` and `Subject` interfaces and classes.
- Use declaration merging to extend the `Teacher` interface with additional attributes.

### 10. **Updating Subjects**
- Create `Cpp`, `Java`, and `React` classes with methods to display subject requirements and available teachers.

### 11. **Brand Convention & Nominal Typing**
- Define `MajorCredits` and `MinorCredits` interfaces with unique brand properties.
- Write functions to sum credit values while maintaining type safety.

---

## Requirements
- Use TypeScript `.ts` files for all tasks.
- No TypeScript compilation errors should be present.
- Implement tasks using the provided configuration files:
  - `package.json`
  - `tsconfig.json`
  - `webpack.config.js`
  - `.eslintrc.js`

---

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/alx-frontend-javascript/0x04-TypeScript.git
2. Navigate to the respective task directory.
3. Install dependencies: npm install
4. npm run build


