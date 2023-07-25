import {
  PinBarSVG,
  PinCafeSVG,
  PinClubSVG,
  PinRestaurantSVG,
} from "../../../../assets/icons";
import { BusinessType } from "../BusinessAddItem/BusinessAddItem";

const MapPinIcon = (props) => {
  switch (props.type) {
    case BusinessType.bar:
      return <PinBarSVG />;

    case BusinessType.cafe:
      return <PinCafeSVG />;

    case BusinessType.restaurant:
      return <PinRestaurantSVG />;

    case BusinessType.club:
      return <PinClubSVG />;

    default:
      return null;
  }
};

export default MapPinIcon;
