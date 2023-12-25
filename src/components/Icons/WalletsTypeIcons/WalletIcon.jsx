import propTypes from "prop-types";

import CashIcon from "./CashIcon";
import CheckingIcon from "./CheckingIcon";
import InvestmentIcon from "./InvestmentIcon";

const WalletIcon = (props) => {
  switch (props.name) {
    case "CASH":
        return <CashIcon {...props} />;
    case "INVESTMENT":
        return <InvestmentIcon {...props} />;
    case "CHECKING":
        return <CheckingIcon {...props} />;

    default:
      return <CashIcon {...props} />
  }
};

export default WalletIcon;

WalletIcon.propTypes = {
  props: propTypes.string,
  name: propTypes.string
}