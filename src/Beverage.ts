import { Supplement } from './Supplement.js'

export interface Beverage {
  supplements: Supplement[]
  price(): number
}
