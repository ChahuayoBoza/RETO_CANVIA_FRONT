import { Observable } from 'rxjs';
import { EspecialidadModel } from './especialidad.model';

export abstract class EspecialidadRepository {
  abstract getEspecialiadById(id: number): Observable<EspecialidadModel>;
  abstract getAllEspecialidades(): Observable<EspecialidadModel>;
}

export interface EspecialidadEntity {
  id?: number;
  nombre: string;
  descripcion: string;
  estado?: boolean;
}