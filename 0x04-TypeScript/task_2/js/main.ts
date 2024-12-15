 //Task 5. Advanced types Part 1
 interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
    workFromHome() {
      return "Working from home";
    }
    getCoffeeBreak() {
      return "Getting a coffee break";
    }
    workDirectorTasks() {
      return "Getting to director tasks";
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome() {
      return "Cannot work from home";
    }
    getCoffeeBreak() {
      return "Cannot have a break";
    }
    workTeacherTasks() {
      return "Getting to work";
    }
  }
  
  function createEmployee(salary: number | string): Teacher | Director {
    return typeof salary === "number" && salary < 500
      ? new Teacher()
      : new Director();
  }
  
  console.log(createEmployee(200));
  console.log(createEmployee(1000));
  console.log(createEmployee('$500'));

  // task 6. Creating functions specific to employees
  //Implement Type Guards
  function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  function executeWork(employee: Teacher | Director): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }
  }
  
  const director = new Director();
  const teacher = new Teacher();
  
  console.log(executeWork(director));
  console.log(executeWork(teacher));
  
  // task 7. String literal types
  enum Subjects {
    Math = "Math",
    History = "History",
  }
  
  function teachClass(todayClass: Subjects): string {
    if (todayClass === Subjects.Math) {
      return "Teaching Math";
    } else {
      return "Teaching History";
    }
  }
  
  console.log(teachClass(Subjects.Math));
  console.log(teachClass(Subjects.History));

  
  
 
