import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/base/use-case';
import { EspecialidadRepository } from '../model/especialidad.entity';
import { EspecialidadModel } from '../model/especialidad.model';
import { EspecialidadWebRepository } from '../repository/especialidad-web.repository';

@Injectable({
  providedIn: 'root'
})
export class DeleteEspecialidadByIdUsecase implements UseCase<number, any> {
  constructor(private especialidadRepository: EspecialidadWebRepository) {
  }

  execute(params: number): Observable<any> {
    return this.especialidadRepository.deleteEspecialiadById(params);
  }
}
