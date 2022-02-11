import { EspecialidadEntity, EspecialidadRepository } from '../model/especialidad.entity';
import { EspecialidadWebRepositoryMapper } from './mapper/especialidad-web-repository.mapper';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { EspecialidadModel } from '../model/especialidad.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadWebRepository extends EspecialidadRepository {
  mapper = new EspecialidadWebRepositoryMapper();
  constructor(private http: HttpClient) {
    super();
  }

  getEspecialiadById(id: number): Observable<EspecialidadModel> {
    return this.http
      .get<EspecialidadEntity>(`http://localhost:5000/api/especialidad/${id}`)
      .pipe(
        map(this.mapper.mapFrom)
      );
  }

  getAllEspecialidades(): Observable<EspecialidadModel> {
    return this.http
      .get<EspecialidadEntity[]>('http://localhost:5000/api/especialidad')
      .pipe(
        mergeMap((item) => item)
      )
      .pipe(
        map(this.mapper.mapFrom)
      );
  }

  postEspecialidad(especialidad: EspecialidadModel): Observable<any> {
    return this.http.post('http://localhost:5000/api/especialidad', especialidad);
  }

  putEspecialidad(especialidad: EspecialidadModel): Observable<any> {
    return this.http.put('http://localhost:5000/api/especialidad', especialidad);
  }

  deleteEspecialiadById(id: number): Observable<any> {
    return this.http
      .delete(`http://localhost:5000/api/especialidad/${id}`);
  }

}
