import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruta } from './fruta';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioFrutaService {
  constructor(private httpClient:HttpClient) { }
  leerProductos():Observable<Fruta[]>{
    return this.httpClient.get<Fruta[]>('http://moralo.atwebpages.com/menuAjax/productos2/index.php');
}
     createProduct(fruta: Fruta): Observable<Fruta>{

          return this.httpClient.post<Fruta>('http://moralo.atwebpages.com/menuAjax/productos2/create_product.php', Fruta);
      }
      updateProduct(fruta: Fruta){
          return this.httpClient.put<Fruta>('http://moralo.atwebpages.com/menuAjax/productos2/update_product.php', Fruta);
      }
      deleteProduct(id: string){
          return this.httpClient.delete<Fruta>('http://moralo.atwebpages.com/menuAjax/productos2/delete_product.php/?id='+id);
      }
}
