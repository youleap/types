/**
 * @description A data type which represents the a specific query param "query_data" in the current page.
 * @type QueryData
 * @example
 * ```
 *  import type { QueryData, FilteredData } from '@youleap/types';
 *  import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
 *
 *  interface Props {
 *      userId: QueryData;
 *      users: FilteredData;
 *  }
 *
 *  function ExampleComponent(props: Props) {
 *      const { users, userId } = props;
 *
 *      const user = users.find(user => user.id === userId);
 *
 *      return (
 *          <>
 *              { user != null ?
 *                  <div>
 *                      <img src={user.avatar} alt="user avatar" />
 *                      <h1>Welcome {user.name}!</h1>
 *                  </div>
 *                  :
 *                  <div>
 *                      Could not load user.
 *                  </div>
 *              }
 *          </>
 *      )
 *  }
 * ```
 * @category Data
 * @readonly
 */
export type QueryData = Readonly<string>;
