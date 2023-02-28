import { Component } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-lista-libri',
  templateUrl: './lista-libri.component.html',
  // template: `<h3>Template Lista Libri</h3>`,
  styleUrls: ['./lista-libri.component.css']
})
export class ListaLibriComponent {

  libri: Libro[] = [
  new Libro('Fight Club', 'Chuck Palaniuk', 'Penguin Books'),
  new Libro('The Shining', 'Stephen King', 'Mondadori'),
  new Libro('The Stand', 'Stephen King', 'Penguin Books')
  ]



  libroSelezionato: Libro | undefined

  selezionaLibro(libro: Libro) {
    this.libroSelezionato = libro
  }
}
