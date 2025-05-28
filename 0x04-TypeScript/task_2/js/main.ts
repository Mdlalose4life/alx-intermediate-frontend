// Define interfaces
export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Implementing classes
  export class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  export class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
  
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  
  // Factory function to create employees
  export function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }

  export function isDirector(employees: Director | Teacher): string {
    return employees instanceof Director
  }

  export function executeWork(employees: Director | Teacher): string {
    if (isDirector(employees)) {
        return employees.workDirectorTasks()
    } else {
        return employees.workTeacherTasks()
    }
  }

  // Define the string literal type
  type Subjects = 'Math' | 'History'

  function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math'){
      return 'Teaching Math'
    } else {
      return 'Teaching History'
    }
  }
