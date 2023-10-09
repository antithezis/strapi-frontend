import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from "../components/filters/filters.component";
import { PieChartComponent } from "../components/pie-chart/pie-chart.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { WidgetComponent } from "../components/widget/widget.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, FiltersComponent, PieChartComponent, SidebarComponent, WidgetComponent]
})
export class DashboardComponent {

}
