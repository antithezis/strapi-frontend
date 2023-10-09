import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calendar, CalendarModule } from 'primeng/calendar';

const primeNgModules = [

  CalendarModule

]

@Component({
  selector: 'app-filters',
  standalone: true,
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  imports: [CommonModule, primeNgModules]
})


export class FiltersComponent {

}
