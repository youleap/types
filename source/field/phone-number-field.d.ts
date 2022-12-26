/**
 * @description A field type for PhoneNumberField which will return the field name and value, can be used with only two types of generics, `string` or `string[]`.
 * @type PhoneNumberField
 * @example
 * ```
 *  import type { PhoneNumberField } from '@youleap/types';
 *
 *  interface Props {
 *      clientPhoneNumber: PhoneNumberField<string>;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const { clientPhoneNumber } = props;
 *      return {
 *          <div>
 *              <h1>User Profile</h1>
 *              <p>Phone Number: {clientPhoneNumber}</p>
 *          </dvi>
 *      }
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type PhoneNumberField<ValueType> = Readonly<{
  field: string;
  value: ValueType extends Array<string>
    ? ValueType
    : ValueType extends string
    ? ValueType
    : never;
}>;
