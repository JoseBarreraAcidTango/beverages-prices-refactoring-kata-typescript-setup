import { describe, expect, it } from "vitest"
import { Coffee } from "./Coffee.js"
import { HotChocolate } from "./HotChocolate.js"
import { HotChocolateWithCream } from "./HotChocolateWithCream.js"
import { Tea } from "./Tea.js"
import { TeaWithMilk } from "./TeaWithMilk.js"

describe("Beverages Prices", () => {
  it("computes coffee price", () => {
    const coffee = new Coffee()
    expect(coffee.price()).toBeCloseTo(1.2)
  })

  it("computes tea price", () => {
    const tea = new Tea()
    expect(tea.price()).toBeCloseTo(1.5)
  })

  it("computes hot chocolate price", () => {
    const hotChocolate = new HotChocolate()
    expect(hotChocolate.price()).toBeCloseTo(1.45)
  })

  it("computes tea with milk price", () => {
    const teaWithMilk = new TeaWithMilk()
    expect(teaWithMilk.price()).toBeCloseTo(1.6)
  })

  it("computes coffee with milk price", () => {
    const coffeeWithMilk = new Coffee()
    coffeeWithMilk.supplements[0].isAdded = true
    expect(coffeeWithMilk.price()).toBeCloseTo(1.3)
  })

  it("computes coffee with milk and cream price", () => {
    const coffeeWithMilkAndCream = new Coffee()
    coffeeWithMilkAndCream.supplements[0].isAdded = true
    coffeeWithMilkAndCream.supplements[1].isAdded = true
    expect(coffeeWithMilkAndCream.price()).toBeCloseTo(1.45)
  })

  it("computes hot chocolate with cream price", () => {
    const hotChocolateWithCream = new HotChocolateWithCream()
    expect(hotChocolateWithCream.price()).toBeCloseTo(1.6)
  })
})
