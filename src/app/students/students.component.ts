import { Component } from '@angular/core';
import studentsData from '../../students.json';  
import employeesData from '../../employees.json'; 
import myData from './data.json';  

interface Student {  
  id: Number;  
  name: String;  
  email: String;  
  gender: String;  
}  
interface Employee{
  id: Number;  
  firstName: String;  
  lastName: String;  
  photo: String;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent {
  students: Student[] = studentsData;
  employees: Employee[] = employeesData;
  mydatas: any = myData;
  gid=0;

  gallery = [
    {photo: 'https://jsonformatter.org/img/Robert-Downey-Jr.jpg', gid: 1}, 
    {photo: 'https://jsonformatter.org/img/Maria-Sharapova.jpg', gid: 2}, 
    {photo: 'https://jsonformatter.org/img/Robert-Downey-Jr.jpg', gid: 1}, 
    {photo: 'https://jsonformatter.org/img/Maria-Sharapova.jpg', gid: 2},
    {photo: 'https://jsonformatter.org/img/tom-cruise.jpg', gid: 3}
  ];

  constructor() { }

  isGalleryType(g: any): boolean {
    if(g.gid === this.gid){
      return true;
    }
    else if(this.gid === 0){
      return true;
    }
    else{
      return false;
    }
  }
  fun(gid:any){
    this.gid=gid;
  }
}
