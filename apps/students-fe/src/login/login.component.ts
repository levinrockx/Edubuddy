import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';
import { InputComponent } from '../shared/input/input.component';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, CardComponent, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent { }
