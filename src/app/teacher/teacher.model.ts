import { Component } from "@angular/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



export class Teacher{    
    name:string="";
    address:string="";
    contact:string="";
    age:number=0; 
  }
  export class TeacherViewModel extends Teacher{
    index: number=0;
    isNew:boolean=true;
    isDirty:boolean=false;
    ageColor:string="Green";
  
    get _name():string {
      return this.name;
    }
    set _name(value:string) {
      this.isDirty=true;
      this.name = value;
    }
    get _address():string {
      return this.address;
    }
    set _address(value:string) {
      this.isDirty=true;
      this.address = value;
    }
    get _contact():string {
      return this.contact;
    }
    set _contact(value:string) {
      this.isDirty=true;
      this.contact = value;
    }
    get _age():number {
      return this.age;
    }
    set _age(value:number) {
      this.isDirty=true;
      this.age = value;
      if(value>16){
        this.ageColor = "Yellow";
      }
      if(value>16 && value<=50){
        this.ageColor = "yellow";
      }
      if(value<=16){
        this.ageColor = "Red";
      }
    }
  }