/**
 * @description A field type for JsonField which will return the field name and value, can be used with only two types of generics, `unknown` or `unknown[]`.
 * @type JsonField
 * @example
 * ```
 *  import type { JsonField } from '@youleap/types';
 *
 *  interface Props {
 *      created: JsonField<unknown>;
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
 *                  <input type="JsonField" checked=${inStock.value}/>
 *              </div>
 *          </div>
 *      )
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type JsonField<ValueType extends unknown> = Readonly<{
  field: string;
  value: ValueType;
}>;
