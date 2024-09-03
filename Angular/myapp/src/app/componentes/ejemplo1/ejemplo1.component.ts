import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MaterialModule } from '../../modulos/material/material.module';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.scss'
})
export class Ejemplo1Component implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    window.alert('Imagen cambiada, alerta disparada desde el componente hijo')
  }
  @Input() imagenDelPadre: string = '';
  @Output() emisor = new EventEmitter<string>();
  imagen = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  nombre = '';
  nombres = ['Andres', 'Juan Carlos', 'Lorena', 'Verónica']
  
  setName(){
    this.nombre = 'Darth Vader';
  }
}
