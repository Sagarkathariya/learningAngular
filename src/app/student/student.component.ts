import { Component, OnInit } from '@angular/core';
import { StudentViewModel } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  StudentObj:StudentViewModel=new StudentViewModel();
  StudentObjs:Array<StudentViewModel>=new Array <StudentViewModel>();
  // add operation
  AddStudent(){
    if (this.StudentObj.name !=="" && this.StudentObj.address !=="" && this.StudentObj.contact !=="") {
    this.StudentObj.index=this.StudentObjs.length;
    this.StudentObjs.push(this.StudentObj);
    this.StudentObj=new StudentViewModel();
    } else {
      alert("All fields are required!")
      
    } 
  }
  SaveStudent(){
  if (this.StudentObj.isNew) {
      this.AddStudent();
    }else{
      this.UpdateStudent();
    }
  }
  // edit operation
  EditStudent(_StudentObj:StudentViewModel){
    var st:StudentViewModel=new StudentViewModel();
    st.index=_StudentObj.index;
    st.name=_StudentObj.name;
    st.address=_StudentObj.address;
    st.contact=_StudentObj.contact;
    st.age=_StudentObj.age;
    st.isNew=_StudentObj.isNew;
    this.StudentObj=st;
  }
  // delete operation
  DeleteStudent(_StudentObj:StudentViewModel){
    var stDel:boolean=window.confirm("Are you sure you want to delete?");
    if(stDel==true){
      this.StudentObjs.splice(_StudentObj.index, 1 );
      console.log(_StudentObj);
      this.StudentObj=new StudentViewModel();//to clear text from the form
    }  
  }
  // update operation
  UpdateStudent(){
   var stEdit:StudentViewModel=this.StudentObjs[this.StudentObj.index];
    stEdit.name=this.StudentObj.name;
    stEdit.address=this.StudentObj.address;
    stEdit.contact=this.StudentObj.contact;
    stEdit.age=this.StudentObj.age;
    this.StudentObj=new StudentViewModel();
  }

}
