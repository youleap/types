/**
 * @description A field type for ArrayField which will return the field name and value as an array, can be used with multiple generic types such as `string`, `string[]`, `number`, `number[]`, `boolean` or `boolean[]`.
 * @type ArrayField
 * @example
 * ```jsx
 *  import type { ArrayField } from '@youleap/types';
 *
 *  interface Props {
 *      productsColors: ArrayField<string>;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const { productsColors } = props;
 *      return (
 *        <ul>
 *          {
 *            productColors.value.map(color => {
 *              return <li>{color}</li>;
 *            });
 *          }
 *        </ul>
 *      )
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type ArrayField<
  ValueType extends
    | string
    | boolean
    | number
    | Array<string>
    | Array<boolean>
    | Array<number>
> = Readonly<{
  field: string;
  value: Array<ValueType>;
}>;
