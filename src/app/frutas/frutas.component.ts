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
  listaFruta!: Fruta[];
  constructor(private servicioHttp:ServicioFrutaService){
    this.servicioHttp.leerProductos().subscribe(x=>this.listaFruta=x);
  }
seleccionar(fruta: Fruta) {
  this.selectedProduct=fruta;

}
eliminar(id: string) {
  this.servicioHttp.deleteProduct(id).subscribe((product: Fruta)=>{

		this.servicioHttp.leerProductos().subscribe(x=>this.listaFruta=x);
    alert("Eliminado "+id);
  })


 }

actualizarProducto() {
  this.servicioHttp.updateProduct(this.selectedProduct).subscribe((producto:Fruta)=>{

    this.prod = producto;
    this.servicioHttp.leerProductos().subscribe(x=>this.listaFruta=x);
    alert("Actualizado "+this.selectedProduct.nombre);})
}
crearProducto() {
  if (this.selectedProduct.id!==''){
    this.servicioHttp.createProduct(this.selectedProduct).subscribe((producto:Fruta)=>{
      this.prod = producto;
      this.servicioHttp.leerProductos().subscribe(x=>this.listaFruta=x);
      alert("Creado nuevo producto "+this.selectedProduct.nombre);
    });

  }else
  {
    alert("Faltan contenidos")
  }

}

}
