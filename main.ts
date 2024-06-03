#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

class Student{
    name: string
    constructor(n:string){
        this.name=n
    }
}


class person{
    students: Student[]=[]
    addStudent(obj: Student){
        this.students.push(obj)
    }
}
const persons = new person()


const programStart = async (person:person)=>{
    do{
        console.log("Welcome");
        const ans = await inquirer.prompt([{
            name:'select',
            message:'Whom would you like to intern with:',
            type:'list',
            choices:['staff','student','exit']
        }])
        if(ans.select === 'staff'){
            console.log(chalk.italic.yellow("You approach the staff room. Please feel free to ask anything!"));

            
        }else if (ans.select === 'student'){
            const ans = await inquirer.prompt([{
                name:'student',
                message:'Enter the student`s name you wish to meet with?',
                type:'input'
            }])
            const student = persons.students.find(val => val.name == ans.student)
         if(!student){
            const name = new Student (ans.student)
            persons.addStudent(name)
            console.log(chalk.italic.blueBright(`Hello I am ${name.name}. Nice to meet you`));
            console.log(chalk.green.italic("New student added."));
            console.log(chalk.gray.bold("Current student list"));
            console.log(persons.students);
         }else{
            console.log(chalk.italic.cyanBright(`Hello I am ${student.name}. Happy to see you again.`));
            console.log(chalk.redBright("Existing student list"));
            console.log(persons.students);
            
         }
        }else if(ans.select == 'exit'){
            console.log(chalk.redBright("Exiting..."));
            process.exit()
            
        }
        
    } while(true);
}

programStart(persons)



