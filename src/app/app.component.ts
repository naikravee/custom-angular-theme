import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDark: boolean;

  ngOnInit() {
    this.isDark = false;
  }

  toggleTheme() {
    this.isDark = !this.isDark;
  }


}




