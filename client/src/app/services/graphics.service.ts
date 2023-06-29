import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Fecha} from "../models/Graphics";

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {
  }

  getTramos(fechas: Fecha) {
    return this.http.post(`${this.API_URI}/tramos`, fechas)
  }

  getCliente(fechas: Fecha) {
    return this.http.post(`${this.API_URI}/cliente`, fechas)
  }

  getTramosCliente(fechas: Fecha) {
    return this.http.post(`${this.API_URI}/tramos-cliente`, fechas)
  }
}
