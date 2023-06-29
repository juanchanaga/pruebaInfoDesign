export interface Fecha {
  fInicial: string,
  fFinal: string
}

export interface Tramos {
  Linea: string,
  consumo_residencial: number,
  consumo_comercial: number,
  consumo_industrial: number,
  perdidas_residencial: number,
  perdidas_comercial: number,
  perdidas_industrial: number,
  costo_residencial: number,
  costo_comercial: number,
  costo_industrial: number
}

export interface TramosCliente {
  TipoConsumo: string,
  Linea: string,
  Perdidas: number
}
