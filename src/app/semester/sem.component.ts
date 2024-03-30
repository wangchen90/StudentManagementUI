import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
import { HotToastService } from '@ngneat/hot-toast';
import { SearchFilterPipe } from './search-filter-pipe';

@Component({
  selector: 'app-sem',
  templateUrl: './sem.component.html',
  styleUrls: ['./sem.component.css']
})
export class SemComponent implements OnInit {
SemesterForm! : FormGroup;

SemesterData: any = [];

currentPage: number = 1;
itemsPerPage: number = 5;
searchText : string = '';

ModelTitle = {
title :"Add Semester",
Button :"Save"
}
 

  constructor(private fb: FormBuilder, private apiService : ApiService, 
    private toast : HotToastService) { }

  ngOnInit() {
    this.getAllSemester();
    this.semesterFormGroup();
  }
  
  semesterFormGroup(){
  this.SemesterForm = this.fb.group({
    semester_id: [0, Validators.required],
    semester_name: ['', Validators.required]
  })

}

fetchDataInEdit(semester:any){
console.log(semester);
 console.log(this.SemesterForm);

 this.SemesterForm.setValue({
  semester_id : semester.semester_id,
  semester_name : semester.semester_name
})
this.ModelTitle.title = "Edit Semester";
this.ModelTitle.Button = "Update";

}
resetModelAdd(){
  this.ModelTitle.title ="Add Semester";
  this.ModelTitle.Button ="Save";
  this.SemesterForm.reset();
}

 getAllSemester(){
  this.apiService.InitiateGetRequest("User/GetAllSemester").subscribe((res:any)=>{
    console.log(res.result);
    this.SemesterData = res.result;
    console.log(this.SemesterData)
    console.log("Semesterdata", this.SemesterData)
  })
 }
 

 updateAllSemester(){
  this.apiService.initiatePutRequest("User/EditSemester",this.SemesterForm.value).subscribe((res)=>{
    console.log(res);
    this.resetModelAdd();
    this.getAllSemester();
  })
 }
 AddEditSemester(){
  if(this.SemesterForm.valid){
    if(this.ModelTitle.Button == "Update"){
      this.updateAllSemester();
    }
      else{
        this.addSemester();
      }
    }
  }
  
  addSemester(){
    console.log(this.SemesterForm)
    this.apiService.InitiatePostRequest("User/AddSemester",this.SemesterForm.value).subscribe((res:any) => {
      console.log(res);
      if(res){
        this.toast.success(res.message)
      }
      this.resetModelAdd();
      this.getAllSemester();

       
        
        
      })
    }

    DeleteSemester(semester_id : any, number:any){
      this.apiService.initiateDeleteRequest(`User/DeleteSemester?id=${semester_id}`).subscribe((res:any) => {
        console.log(res);
        if(res){
          this.toast.success(res.message)
          this.getAllSemester();
        }
      })
    }
    
  }

