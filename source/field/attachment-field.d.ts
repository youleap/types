/**
 * @description A field type for AttachmentField which will return the field name and value, can be used with only two types of generics, `string` or `string[]`.
 * @type AttachmentField
 * @example
 * ```
 *  import type { AttachmentField } from '@youleap/types';
 *
 *  interface Props {
 *      downloadLink: AttachmentField<string>;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const { downloadLink } = props;
 *      return <h3>Download at: <a href={downloadLink.value}>Click</a></h3>
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type AttachmentField<ValueType> = Readonly<{
  field: string;
  value: ValueType extends Array<string>
    ? ValueType
    : ValueType extends string
    ? ValueType
    : never;
}>;
