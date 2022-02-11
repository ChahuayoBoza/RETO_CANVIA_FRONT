import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/base/use-case';
import { EspecialidadModel } from '../model/especialidad.model';
import { EspecialidadWebRepository } from '../repository/especialidad-web.repository';

@Injectable({
  providedIn: 'root'
})
export class PutEspecialidadUsecase implements UseCase<EspecialidadModel, any> {
  constructor(private especialidadRepository: EspecialidadWebRepository) {
  }

  execute(especialidad: EspecialidadModel): Observable<any> {
    return this.especialidadRepository.putEspecialidad(especialidad);
  }
}
