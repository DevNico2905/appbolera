import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aside-bar',
  imports: [RouterLink],
  templateUrl: './aside-bar.html',
  styleUrl: './aside-bar.css',
  standalone: true
})
export class AsideBar {}
