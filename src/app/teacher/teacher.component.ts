import { Component, OnInit } from '@angular/core';
import { TeacherViewModel } from '../teacher/teacher.model';
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

  DeleteTeacher(_TeacherObjs:TeacherViewModel){
    var thDel:boolean=window.confirm("Are you sure you want to delete?");
    if(thDel==true){
      this.TeacherObjs.splice(_TeacherObjs.index, 1 );
      // console.log(_TeacherObjs);
      this.TeacherObj=new TeacherViewModel();//to clear text from the form
    }  

}

UpdateStudent(){
  var thEdit:TeacherViewModel=this.TeacherObjs[this.TeacherObjs.index];
   thEdit.name=this.StudentObj.name;
   thEdit.address=this.StudentObj.address; 
   thEdit.contact=this.StudentObj.contact;
   thEdit.age=this.StudentObj.age;
   this.StudentObj=new StudentViewModel();
 }

}
