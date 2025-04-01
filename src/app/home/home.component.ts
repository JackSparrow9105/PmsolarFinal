import { Component } from '@angular/core';
import { PhotoGalaryComponent } from '../photo-galary/photo-galary.component';
import { FormbtnComponent } from '../formbtn/formbtn.component';
import { YojnaDetComponent } from '../yojna-det/yojna-det.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PhotoGalaryComponent,FormbtnComponent,YojnaDetComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
