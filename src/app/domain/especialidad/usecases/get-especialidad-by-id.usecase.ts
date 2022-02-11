import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/base/use-case';
import { EspecialidadRepository } from '../model/especialidad.entity';
import { EspecialidadModel } from '../model/especialidad.model';

@Injectable({
  providedIn: 'root'
})
export class GetEspecialidadByIdUsecase implements UseCase<number, EspecialidadModel> {
  constructor(private especialidadRepository: EspecialidadRepository) {
  }

  execute(params: number): Observable<EspecialidadModel> {
    return this.especialidadRepository.getEspecialiadById(params);
  }
}
