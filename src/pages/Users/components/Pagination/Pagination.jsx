import { PaginationLeft, PaginationRight } from "../../../../assets/icons";
import styles from "./Pagination.module.scss";

const Pagination = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        <PaginationLeft className={styles.item}/>
        <div className={styles.item}>
            <div className={styles.countBlock}>
                1
            </div>
        </div>
        <PaginationRight className={styles.item}/>
      </div>
    </div>
  );
};

export default Pagination;
