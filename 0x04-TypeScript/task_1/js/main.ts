interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience ?: number;
    location: string;
    [key: string]: any
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  }

  console.log(teacher3);



  interface Directors extends Teacher{
    numberOfReports: number
  }

const director1: Directors = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
    numberOfReports: 21
  }

  console.log(director1);

interface printTeacher{
      (firstName: string, lastName: string): string;
}

function printTeacher(firstName:string, lastName:string) {
    return `${firstName.charAt(0)}. ${lastName}`
}

console.log((printTeacher("Sbusiso", "Mdlalose")));

// Define an interface for the constructor
export interface Studentconstructor {
    firstName: string;
    lastName: string;
}
export interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

export class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor({firstName, lastName}: Studentconstructor){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working'
    }

    displayName(): string {
        return this.firstName
    }
}
