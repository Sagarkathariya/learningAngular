import { Component, OnInit } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'College-System';
}
// export class StudentComponent{
//   StudentObj:Student=new Student();
//   StudentObjs:Array<Student>=new Array <Student>();
//   AddStudent(){
//     this.StudentObjs.push(this.StudentObj);
//     this.StudentObj=new Student();
//   }
// }
