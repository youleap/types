/**
 * @description A field type for UrlField which will return the field name and value, can be used with only two types of generics, `string` or `string[]`.
 * @type UrlField
 * @example
 * ```
 *  import type { UrlField } from '@youleap/types';
 *
 *  interface Props {
 *      websiteEndpoint: UrlField<string>;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const { websiteEndpoint } = props;
 *      return <h3>Visit us <a href={websiteEndpoint.value} target="_blank">Here</a></h3>
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type UrlField<ValueType> = Readonly<{
  field: string;
  value: ValueType extends Array<string>
    ? ValueType
    : ValueType extends string
    ? ValueType
    : never;
}>;
