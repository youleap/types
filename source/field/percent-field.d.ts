import { PrecisionOptions } from "../utility/precision-options";

/**
 * @description A field type for PercentField which will return the field name and value, can be used with only two types of generics, `number` or `number[]`.
 * @type PercentField
 * @see `PrecisionOptions` for the full type of the available field precision options.
 * @example
 * ```
 *  import type { PercentField } from '@youleap/types';
 *
 *  interface Props {
 *      precipitation: PercentField<number>;
 *      humidity: PercentField<number>;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const { precipitation, humidity } = props;
 *      return (
 *          <div>
 *              <h1>Weather Forecast</h1>
 *              <ul>
 *                  <li>Precipitation: {precipitation.value}%</li>
 *                  <li>Humidity: {humidity.value}%</li>
 *              </ul>
 *          </div>
 *      )
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type PercentField<ValueType extends number | Array<number>> = Readonly<{
  field: string;
  value: ValueType;
  precision: PrecisionOptions;
}>;
