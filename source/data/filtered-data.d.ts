/**
 * @description A data type which represents the filtered data output from the dynamic form.
 * @type FilteredData
 * @example
 * ```
 *  import type { FilteredData } from '@youleap/types';
 *
 *  interface Props {
 *      users: FilteredData;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const { users } = props;
 *      const rows: GridRowsProp = users.map((user, index) => {
 *          return {id: index, ...user};
 *      });
 *
 *      const columns: Array<GridColDef> = Object.keys(users[0]).map(key => {
 *          return { field: key, headerName: key, width: 150 };
 *      });
 *
 *      return (
 *          <div>
 *              <h1>User List</h1>
 *              <DataGrid rows={rows} columns={columns} />
 *          </div>
 *      )
 *  }
 * ```
 * @category Data
 * @readonly
 */
export type FilteredData = Readonly<Array<Record<string, unknown>>>;
