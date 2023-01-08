import { SelectOptions } from "../utility/select-options";

/**
 * @description A field type for MultiSelectField which will return the field name, value as an array of strings and their possible options. The type can be used with only two types of generics, `string` or `string[]`.
 * @type MultiSelectField
 * @see `SelectOptions` for the full type of the available field options.
 * @example
 * ```
 *  import type { MultiSelectField } from '@youleap/types';
 *
 *  interface Props {
 *      condiments: MultiSelectField<string>;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const { condiments } = props;
 *      return (
 *          <div>
 *              <h1>Cheeseburger</h1>
 *              <p>
 *                  Available Condiments:
 *                  <select>
 *                      {
 *                          condiments.value.map(condiment=> {
 *                              return <option value={condiment}>{condiment}</option>
 *                          });
 *                      }
 *                  </select>
 *              </p>
 *          </div>
 *      )
 *  }
 * ```
 * @category Field
 * @readonly
 */
export type MultiSelectField<ValueType extends string | Array<string>> =
  Readonly<{
    field: string;
    value: Array<ValueType>;
    options: Array<SelectOptions>;
  }>;
