import { SelectOptions } from "../utility/select-options";

/**
 * @description A field type for SingleSelectField which will return the field name, value and their possible options. The type can be used with only two types of generics, `string` or `string[]`.
 * @type SingleSelectField
 * @see `SelectOptions` for the full type of the available field options.
 * @example
 * ```
 *  import type { SingleSelectField } from '@youleap/types';
 *
 *  interface Props {
 *      language: SingleSelectField<string>;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const { language } = props;
 *      return (
 *          <p>Website Language: {language.value}</p>
 *          <div>
 *              Available Languages:
 *              <ul>
 *                  {
 *                      language.options.map(lang => {
 *                          return <li>{lang}</li>
 *                      });
 *                  }
 *              </ul>
 *          </div>
 *      )
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type SingleSelectField<ValueType extends string | Array<string>> =
  Readonly<{
    field: string;
    value: ValueType;
    options: Array<SelectOptions>;
  }>;
