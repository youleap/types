/**
 * @description A data type which represents the filtered data output from the dynamic form.
 * @type FilteredData
 * @example
 * ```
 *  import type { FilteredData } from '@youleap/types';
 *  import { DataGrid } from '@mui/x-data-grid';
 *
 *  interface UserInterface {
 *      id: string;
 *      name: string;
 *      avatar: string;
 *      age: number;
 *  }
 *
 *  interface Props {
 *      users: FilteredData<UserInterface>;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const rows: GridRowsProp = props.users;
 *      const columns: Array<GridColDef> = [
 *          { field: "id", headerName: "ID", width: 50},
 *          { field: "name", headerName: "Name", width: 150},
 *          { field: "avatar", headerName: "Avatar", width: 150},
 *          { field: "age", headerName: "Age", width: 150},
 *      ]
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
export type FilteredData<DataSchema = Record<string, unknown>> = Readonly<
  Array<DataSchema>
>;
