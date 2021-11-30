interface Person {
    firstName: string;
    lastName: string;
    salary: number;
  }
  let customer: Person = {
    firstName: "Raju",
    lastName: "Ram",
    salary: 50000
  };
  console.log(customer);
  console.log(customer.firstName);
  console.log(customer.lastName);
  console.log(customer.salary);
  
  interface IStudent {
    stdName: string;
    stdId: number;
    stdMarks: number;
    greet: () => string;
  }
  let SPerson: IStudent = {
    stdName: "suraj",
    stdId: 20,
    stdMarks: 88,
    greet: (): string => {
      return "hello";
    }
  };
  
  console.log(SPerson);
  console.log(SPerson.stdId);
  console.log(SPerson.stdName);
  console.log(SPerson.stdMarks);
  console.log(SPerson.greet());
  
  let sum = (a: string, b: string, c?: string) => {
    return `${a} ${b} ${c}`;
  };
  console.log("hello", "hi");
  console.log("hello", "hi", "hey");
  console.log(sum("Lion", "Tiger", "Panter"));
  