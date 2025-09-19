import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/service/auth/auth.service';
import { ɵInternalFormsSharedModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { InputLoginComponent } from '../../../shared/input-login/input-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
}
