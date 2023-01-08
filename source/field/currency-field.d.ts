import { PrecisionOptions } from "./percent-field";
import { CurrencySymbols } from "../utility/currency-symbols";

/**
 * @description A field type for CurrencyField which will return the field name and value, can be used with only two types of generics, `number` or `number[]`.
 * @type CurrencyField
 * @see `CurrencySymbols` for the full type of the available field currency symbols.
 * @example
 * ```
 *  import type { CurrencyField } from '@youleap/types';
 *
 *  interface Props {
 *      price: CurrencyField<number>;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const { price } = props;
 *      return (
 *          <div>
 *              <h1>Random Product Name</h1>
 *              <p>Random Product Description</p>
 *              <p>Price {price.value}{price.currencyType}</p>
 *          </div>
 *      )
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type CurrencyField<ValueType extends number | Array<number>> = Readonly<{
  field: string;
  value: ValueType;
  precision: PrecisionOptions;
  currencySymbol: CurrencySymbols;
}>;
