export type BriqIdentifier = string;

export class BriqID {
  public static generateID(id: BriqIdentifier): string {
    if (id) {
      return id.toString().toLowerCase().replace(/\s+/g, '_');
    } else {
      return null;
    }
  }
}
