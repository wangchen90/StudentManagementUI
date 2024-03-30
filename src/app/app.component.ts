import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentManagement';

  openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: "Dashboard",
      link: "dashboard",
      icon: "fa-solid fa-book",
      sub_menu: [],
    },
    {
      link_name: "Dept Config",
      link: "department",
      icon: " fa-solid fa-house ",
      sub_menu: [],
    },
    {
      link_name: "Sem Config",
      link: "semester",
      icon: " fa-solid fa-file",
      sub_menu: [],
    },
    {
      link_name: "Student Config",
      link: "student",
      icon: " fa-solid fa-folder ",
      sub_menu: [],
    }

  ];

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }
}
