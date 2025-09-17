import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'share-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  constructor(
    private router : Router
  ){}

  goToRegisterForm(){
    this.router.navigate(['/register-new-user']);
  }
}
