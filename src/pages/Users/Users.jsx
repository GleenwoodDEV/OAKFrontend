import Table from "../../components/ui/Table";
import InputSearch from "../../components/ui/InputSearch";
import styles from "./Users.module.scss";
import Pagination from "./components/Pagination";
import { useGetUsersQuery } from "../../store/api/UsersApi";
import { useState } from "react";
import { useEffect } from "react";
import UsersTableRow from "./components/UsersTableRow/UsersTableRow";

const Users = () => {
  const { isLoading, data } = useGetUsersQuery();

  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const headersAll = Object.keys(data[0]);
    const filteredHeaders = headersAll.filter((item) => item !== "role");

    setHeaders([...filteredHeaders, ""]);
  }, [isLoading, data]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.wrapper}>
          <InputSearch />
          <Table headers={headers}>
            {data.map((rowData) => (
              <UsersTableRow
                key={rowData.id}
                rowData={rowData}
                handleSaveEditRow={() => console.log("a")}
              />
            ))}
          </Table>
          <Pagination />
        </div>
      )}
    </>
  );
};
export default Users;
