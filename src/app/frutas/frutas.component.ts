import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fruta } from '../fruta';
import { ServicioFrutaService } from '../servicio-fruta.service';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent {
  listaFruta!: Fruta[];
  constructor(private servicioHttp:ServicioFrutaService){
    this.servicioHttp.leerProductos().subscribe(x=>this.listaFruta=x);
  }
actualizarProducto(_t50: NgForm) {
}
crearProducto(_t50: NgForm) {
}
//objeto de la clase fruta para recoger todos los campos del formulario de inserción
prod!: Fruta;
// selectedProduct!:Fruta;
//identificar el contenido de cada atributo del valor seleccionado para insertar, modificar o eliminar
selectedProduct: Fruta = {
   id: '',
   nombre: '',
   precio: 0,
   unidades:0,
   imagen:''
}
}
