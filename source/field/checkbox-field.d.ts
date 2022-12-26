/**
 * @description A field type for CheckboxField which will return the field name and value, can be used with only two types of generics, `boolean` or `boolean[]`.
 * @type CheckboxField
 * @example
 * ```
 *  import type { CheckboxField } from '@youleap/types';
 *
 *  interface Props {
 *      inStock: CheckboxField<boolean>;
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
 *                  <input type="checkbox" checked=${inStock.value}/>
 *              </div>
 *          </div>
 *      )
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type CheckboxField<ValueType> = Readonly<{
  field: string;
  value: ValueType extends Array<boolean>
    ? ValueType
    : ValueType extends boolean
    ? ValueType
    : never;
}>;
