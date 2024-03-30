import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http' ;
import { UserRegistrationComponent } from './userRegistration/userRegistration.component';
import { HotToastModule, provideHotToastConfig } from '@ngneat/hot-toast';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SemComponent } from './semester/sem.component';
import { DepartmentComponent } from './department/department.component';
import { StudentComponent } from './student/student.component';
import { SearchFilterPipe } from './department/search-filter-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotFoundComponent } from './Not-Found/Not-Found.component';
@NgModule({
  declarations: [							
    AppComponent,
    UserloginComponent,
      UserRegistrationComponent,
      DashboardComponent,
      SemComponent,
      DepartmentComponent,
      StudentComponent,
      SearchFilterPipe,
      NotFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
    
  ],
  providers: [
    provideHotToastConfig()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
