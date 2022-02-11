import { Mapper } from 'src/app/core/base/mapper';
import { EspecialidadEntity } from '../../model/especialidad.entity';
import { EspecialidadModel } from '../../model/especialidad.model';

export class EspecialidadWebRepositoryMapper extends Mapper <EspecialidadEntity, EspecialidadModel> {
  mapFrom(param: EspecialidadEntity): EspecialidadModel {
    return {
      id: param.id,
      nombre: param.nombre,
      descripcion: param.descripcion,
      estado: param.estado
    };
  }

  mapTo(param: EspecialidadModel): EspecialidadEntity {
    return {
      id: 0,
      nombre: param.nombre,
      descripcion: param.descripcion,
      estado: param.estado
    };
  }
}
