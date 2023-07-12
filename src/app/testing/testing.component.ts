import { Component } from '@angular/core';

@Component({
  
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {

 

























  // for hide and show
  status=false;
  bname="Show"; 
  //for view more and less
  content=false;
  gname="Show more"; 
  //increment function
  increase=0;
  
 
 // Array Variable
 studentname = ['monika', 'amrish', 'sakthisadhana', 'thanuja'];
value=0;
d=[""];
 constructor(){
  this.studentname.push("xyz");
  this.studentname.sort().reverse();
  this.studentname.unshift("xyz");
  this.studentname.shift();
  this.value=this.studentname.length;
  this.studentname.splice(0,3,"sweety","shalini");
  this.d=this.studentname.concat(['aaa','bbb']);

 }
 fun(){
  this.status=!this.status;

  if(this.status==true){
    this.bname="Hide";
  }
  else{
    this.bname="Show";
  }
 }

 gun(){
  this.content=!this.content;

  if(this.content==true){
    this.gname="Show less";
  }
  else{
    this.gname="Show more";
  }
 }
 increment(){
  // this.increase++;
  // this.increase+=1;
  this.increase=this.increase+1;
 }
 decrement(){
  this.increase--;
 }
 
}