import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher.model';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }
  TeacherObj:Teacher = new Teacher();
  TeacherObjs:Array<Teacher>=new Array <Teacher>();
  AddTeacher(){
    this.TeacherObjs.push(this.TeacherObj);
    this.TeacherObj=new Teacher();
  }

}

