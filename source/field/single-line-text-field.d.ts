/**
 * @description A field type for SingleLineTextField which will return the field name and value, can be used with only two types of generics, `string` or `string[]`.
 * @type SingleLineTextField
 * @example
 * ```
 *  import type { SingleLineTextField } from '@youleap/types';
 *
 *  interface Props {
 *      clientName: SingleLineTextField<string>;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const { clientName } = props;
 *      return <h1>Howdy ${clientName.value}</h1>
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type SingleLineTextField<ValueType extends string | Array<string>> =
  Readonly<{
    field: string;
    value: ValueType;
  }>;
