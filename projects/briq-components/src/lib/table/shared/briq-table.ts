import { BriqPersonaTableData } from '../../../../personas/shared/persona-tabledata';
import { BriqUserTableData } from '../../../../users/shared/user-tabledata';

export class BriqTableData {
  constructor(public personaTableData?: BriqPersonaTableData, public userTableData?: BriqUserTableData) {}
}
