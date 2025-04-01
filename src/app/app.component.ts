import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PhotoGalaryComponent } from "./photo-galary/photo-galary.component";
import { FormbtnComponent } from './formbtn/formbtn.component'; // Import the component
import { YojnaDetComponent } from './yojna-det/yojna-det.component';
import { FooterComponent } from "./footer/footer.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, PhotoGalaryComponent, FormbtnComponent, YojnaDetComponent, FooterComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PMSolarPump';
}
