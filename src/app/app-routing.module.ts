import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserRegistrationComponent } from './userRegistration/userRegistration.component';
import { DepartmentComponent } from './department/department.component';
import { SemComponent } from './semester/sem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { NotFoundComponent } from './Not-Found/Not-Found.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path:"", component:DashboardComponent, pathMatch:"full"},
  { path:"register", component:UserRegistrationComponent, pathMatch:"full"},
  { path:"login",canActivate:[authGuard], component:UserloginComponent, pathMatch:"full" },
  { path:"dashboard", component:DashboardComponent, pathMatch:"full"},
  { path:"department", component:DepartmentComponent, pathMatch:"full"},
  { path:"semester", component:SemComponent, pathMatch:"full"},
  { path:"student", component:StudentComponent, pathMatch:"full"},
   {path: '**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
