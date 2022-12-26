/**
 * @description A field type for DateField which will return the field name and value, can be used with only two types of generics, `Date` or `Date[]`.
 * @type DateField
 * @example
 * ```
 *  import type { DateField } from '@youleap/types';
 *
 *  interface Props {
 *      created: DateField<Date>;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const { inStock } = props;
 *      return (
 *          <div>
 *              <h1>Random Product Name</h1>
 *              <p>Random Product Description</p>
 *              <div>
 *                  Product Stock Status:
 *                  <input type="DateField" checked=${inStock.value}/>
 *              </div>
 *          </div>
 *      )
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type DateField<ValueType> = Readonly<{
  field: string;
  value: ValueType extends Array<Date>
    ? ValueType
    : ValueType extends Date
    ? ValueType
    : never;
}>;
