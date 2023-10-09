import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  private el = inject(ElementRef)

  isExpanded = true;

  items = [
    { icon: 'pi pi-home', label: 'Inicio' },
    { icon: 'pi pi-calendar', label: 'Calendario' },
    { icon: 'pi pi-users', label: 'Usuarios' },
    { icon: 'pi pi-envelope', label: 'Mensajes' },
    { icon: 'pi pi-cog', label: 'Configuración' }
  ];

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (this.isExpanded && !this.el.nativeElement.contains(event.target)) {
      this.isExpanded = false;
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isExpanded = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isExpanded = false;
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
