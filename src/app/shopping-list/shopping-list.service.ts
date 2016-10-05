import { Ingredient } from "../shared";

export class ShoppingListService {

  private items : Ingredient[] = [];

  constructor() { }

  public getItems(): Ingredient[] {
    return this.items;
  }

  public addItems(items: Ingredient[]): void {
    Array.prototype.push.apply(this.items, items);
  }

}
