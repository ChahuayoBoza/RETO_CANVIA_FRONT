import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/base/use-case';
import { EspecialidadModel } from '../model/especialidad.model';
import { EspecialidadWebRepository } from '../repository/especialidad-web.repository';

@Injectable({
  providedIn: 'root'
})
export class GetAllEspecialidadesUseCase implements UseCase<void, EspecialidadModel> {
  constructor(private especialidadRepository: EspecialidadWebRepository) {
  }
  execute(params: void): Observable<EspecialidadModel> {
    return this.especialidadRepository.getAllEspecialidades();
  }
}
