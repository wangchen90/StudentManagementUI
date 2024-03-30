import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { HotToastService } from '@ngneat/hot-toast';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent implements OnInit {
  user: any;

  departmentFormGroup!: FormGroup;

  DepartmentData: any = [];
  searchText: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 5;

  textAddorEdit = {
    title: "Add Department",
    button: "Add"
  }


  constructor(private apiService: ApiService, private toast: HotToastService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllDepartment()
    this.departmentForm();
  }


  departmentForm() {
    this.departmentFormGroup = this.fb.group({
      department_id: [0, Validators.required],
      department_name: ['', Validators.required]
    })
  }

  getAllDepartment() {
    this.apiService.InitiateGetRequest("User/GetAllDepartment").subscribe((res: any) => {
      if (res.result)
        console.log(res);
      this.DepartmentData = res.result;
     
      // console.log("departmentdata", this.DepartmentData)
    })
  }

  AddEditDepartment() {
    if (this.departmentFormGroup.valid) {
      if (this.textAddorEdit.button == "Add") {
        this.addDepartment();
      }
      else {
        this.updateDepartment();
      }
    }
  }

  addDepartment() {
    this.apiService.InitiatePostRequest("User/AddDepartment", this.departmentFormGroup.value).subscribe((res) => {
      console.log(res)
      if (res) {
        this.toast.success("Department Added Successfully");
        this.ResetFormValues();
        this.getAllDepartment();
      }
    })
  }

  
  fetchDataOnEdit(department: any) {
    console.log(department);
    console.log(this.departmentFormGroup);

    this.textAddorEdit.title = "Edit Department";
    this.textAddorEdit.button = "Update";

    this.departmentFormGroup.setValue({
      department_id: department.department_id,
      department_name: department.department_name
    })
  }

  updateDepartment() {
    this.apiService.initiatePutRequest("User/UpdateDepartment", this.departmentFormGroup.value).subscribe((res: any) => {
      console.log(res)
      if (res) {
        this.toast.success("User Updated Successfully");
        this.ResetFormValues();
        this.getAllDepartment();
      }
    })
  }

  deleteDepartment(department_id: any, number: any) {
    this.apiService.initiateDeleteRequest(`User/DeleteDepartment?departmentId=${department_id}`).subscribe((res: any) => {
      console.log(res)
      if (res) {
        this.getAllDepartment();
        console.log(this.DepartmentData);
        this.toast.success("User Deleted Successfully");
      }
    }, (error) => {
      this.toast.error("User Deleted Unsuccessfully");
    })
  }

  ResetFormValues() {
    this.textAddorEdit.title = "Add New Department";
    this.textAddorEdit.button = "Add";
    this.departmentFormGroup.reset();
  }

}

