import styles from "./Table.module.scss";

const Table = (props) => {
  const { headers, children } = props;
  return (
    <div className={styles.tablewrapper}>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
