/**
 * @description A field type for NumberField which will return the field name and value, can be used with only two types of generics, `number` or `number[]`.
 * @type NumberField
 * @example
 * ```
 *  import type { NumberField } from '@youleap/types';
 *
 *  interface Props {
 *      daysWithoutAccident: NumberField<number>;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const { daysWithoutAccident } = props;
 *      return (
 *          <div>
 *              <h1>Nuclear Power Plant</h1>
 *              <p>{ daysWithoutAccident } days went by without a catastrophic accident, WOHOO!</p>
 *          </div>
 *      )
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type NumberField<ValueType> = Readonly<{
  field: string;
  value: ValueType extends Array<number>
    ? ValueType
    : ValueType extends number
    ? ValueType
    : never;
}>;
