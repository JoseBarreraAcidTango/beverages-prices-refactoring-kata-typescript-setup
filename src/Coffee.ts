import { Beverage } from "./Beverage.js"
import { Supplement } from "./Supplement.js"
import { Milk } from "./Milk.js"
import { Cream } from "./Cream.js"

export class Coffee implements Beverage {
  supplements: Supplement[] = [new Milk(), new Cream()]
  price(): number {
    return 1.2 + this.supplements.reduce((acc, supplement) => acc + (supplement.isAdded ? supplement.price : 0), 0)
  }
}
