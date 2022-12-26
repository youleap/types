/**
 * @description A field type for EmailField which will return the field name and value, can be used with only two types of generics, `string` or `string[]`.
 * @type EmailField
 * @example
 * ```
 *  import type { EmailField } from '@youleap/types';
 *
 *  interface Props {
 *      userEmail: EmailField<string>;
 *  }
*
*  function ExampleComponent(props: Props) {
  *      const { userEmail } = props;
  *      return (
  *          <div>
  *              <h1>User Profile</h1>
  *              <p>Authenticate User</p>
 *              <button onClick={()=>authenticateUser(userEmail.value)}>Send Authentication Email</button>
 *          </div>
 *      )
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type EmailField<ValueType> = Readonly<{
  field: string;
  value: ValueType extends Array<string>
    ? ValueType
    : ValueType extends string
    ? ValueType
    : never;
}>;
