import { Command } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs';
const program = new Command();

const questions =  [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the course?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the course?',
    },
    {
        type: 'input',
        name: 'price',
        message: 'What is the price of the course?',
    },
    {
        type: 'input',
        name: 'instructor',
        message: 'What is the instructor of the course?',
    },
];
const filePath = './courses.json';
program
  .name('codeZone-courses-manager')
  .description('CLI to make courses')
  .version('1.0.0');

program
.command('add')
.alias('a')
.description("Add a course")
.action(() => {
    inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers)
      if(fs.existsSync(filePath)){
        fs.readFile(filePath,'utf-8',(err,data) => {
            if(err){
                console.log(err);
                process.exit();
            }
            console.log("Courses List: ",data);
            const courses = JSON.parse(data);
            courses.push(answers);
            fs.writeFile(filePath, JSON.stringify(courses),'utf-8', (err) => {
                if(err){
                    console.log(err);
                }
                console.log("Course added successfully!");
              })
        })
      }else{
        fs.writeFile(filePath, JSON.stringify([answers]),'utf-8', (err) => {
            if(err){
                console.log(err);
            }
            console.log("Course added successfully!");
          })
      }
    })
})

program
.command('list')
.alias('l')
.description("list all courses")
.action(() => {
    fs.readFile(filePath,'utf-8', (err,data) => {
        if(err){
            console.log(err);
            process.exit();
        }
        console.table(JSON.parse(data));
    })
})

  program.parse(process.argv);
