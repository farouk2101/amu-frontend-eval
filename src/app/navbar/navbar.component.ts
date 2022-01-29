import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-dark bg-dark">
    <a href="" class="navbar-brand">GestionApp</a>
  </nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
