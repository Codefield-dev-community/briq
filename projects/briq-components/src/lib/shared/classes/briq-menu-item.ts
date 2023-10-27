export class BriqMenuItem {
  rolesAllowed: string[];

  constructor(public id: string | number, public label: string, public url: string, public icon?: string) {}

  setRolesAllowed(roles: string[]) {
    this.rolesAllowed = roles;
    return this;
  }
}
