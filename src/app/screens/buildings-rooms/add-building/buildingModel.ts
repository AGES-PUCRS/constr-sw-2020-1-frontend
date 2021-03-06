import { RequestType } from 'src/app/models/request-type.enum';
import { InputType } from 'src/app/models/input-type.enum';
import { FormModel } from 'src/app/models/form-interface';

export const BUILDING_REGISTRATION_MODEL: FormModel = {
  title: 'Cadastro de prédios',
  requestType: RequestType.POST,
  saveEndpoint: 'https://stark-gorge-03313.herokuapp.com/buildings',
  inputs: [
    {
      inputType: InputType.Text,
      label: 'Campus',
      fieldName: 'campus',
    },
    {
      inputType: InputType.Number,
      label: 'Número de Salas',
      fieldName: 'numberOfRooms',
    },
    {
      inputType: InputType.Text,
      label: 'Nome do Predio',
      fieldName: 'buildingName',
    },
    {
      inputType: InputType.Text,
      label: 'Identificador do Prédio',
      fieldName: 'buildingID',
    },
  ],
};
