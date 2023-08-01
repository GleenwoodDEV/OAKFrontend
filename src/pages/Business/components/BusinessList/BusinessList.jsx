import styles from "./BusinessList.module.scss";
import BusinessNoInfoCap from "../BusinessNoInfoCap";
import BusinessListItem from "../BusinessListItem/BusinessListItem";
import { useEffect, useState } from "react";

const BusinessList = (props) => {
  const { data, onSelectBusiness } = props;

  if (!data || data.length === 0) {
    return <BusinessNoInfoCap />;
  }

  return (
    <div className={styles.business_items}>
      {data.map((item) => (
        <BusinessListItem
          key={item.id}
          info={item}
          onSelectBusiness={onSelectBusiness}
        />
      ))}
    </div>
  );
};

export default BusinessList;
