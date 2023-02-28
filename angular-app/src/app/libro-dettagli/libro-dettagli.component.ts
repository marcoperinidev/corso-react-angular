import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-libro-dettagli',
  templateUrl: './libro-dettagli.component.html',
  styleUrls: ['./libro-dettagli.component.css']
})
export class LibroDettagliComponent {
  @Input() public libro: Libro | undefined
}
