import Table from "../../components/ui/Table";
import InputSearch from "../../components/ui/InputSearch";
import styles from "./Users.module.scss";
import Pagination from "./components/Pagination";
import { useGetUsersQuery } from "../../store/api/UsersApi";
import { useState } from "react";
import { useEffect } from "react";
import UsersTableRow from "./components/UsersTableRow/UsersTableRow";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const headers = ["", "Name", "Email", "Phone", "Status", " "];

const Users = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [searchValue, setSearchValue] = useState("");
  const { isLoading, data } = useGetUsersQuery(searchValue);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  if (!isLoggedIn) {
    console.log(isLoggedIn);
    return <Navigate to="/login" />;
  }

  return (
    <>
      {isLoading ? (
        <div className={styles.spinner}>
          <ThreeDots color="#adbeba" width="60" />
        </div>
      ) : (
        <div className={styles.wrapper}>
          <InputSearch value={searchValue} onChange={handleSearch} />

          {data.length > 0 ? (
            <>
              <Table headers={headers}>
                {data.map((rowData) => (
                  <UsersTableRow key={rowData.id} rowData={rowData} />
                ))}
              </Table>
              <Pagination />
            </>
          ) : (
            <div className={styles.noDataCap}>No data</div>
          )}
        </div>
      )}
    </>
  );
};
export default Users;
