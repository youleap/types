/**
 * @description A field type for LongTextField which will return the field name and value, can be used with only two types of generics, `string` or `string[]`.
 * @type LongTextField
 * @example
 * ```
 *  import type { LongTextField } from '@youleap/types';
 *
 *  interface Props {
 *      description: LongTextField<string>;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const { description } = props;
 *      return (
 *          <div>
 *              <h1>Product Description</h1>
 *              <p>${description.value}</p>
 *          </div>
 *      )
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type LongTextField<ValueType extends string | Array<string>> = Readonly<{
  field: string;
  value: ValueType;
}>;
