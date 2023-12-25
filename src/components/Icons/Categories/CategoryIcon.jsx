import propTypes from "prop-types";

import Food from "./expense/Food";
import Income from "./income/Income";
// import Expense from "./Expense";
import Clothes from "./expense/Clothes";
import Education from "./expense/Education";
import Fun from "./expense/Fun";
import Grocery from "./expense/Grocery";
import Home from "./expense/Home";
import Others from "./expense/Others";
import Transport from "./expense/Transport";
import Travel from "./expense/Travel";
import Minus from "./expense/Minus";
import Chart from "./expense/Chart";
import Payment from "./expense/Payment";
import Add from "./expense/Add";
import Expense from "../Expense";
import Star from "../Star";

const CategoryIcon = (props) => {
  switch (props.name) {
    case "food":
      return <Food {...props} />;
    case "add":
      return <Add {...props} />;
    case "income":
      return <Income {...props} />;
    case "minus":
      return <Minus {...props} />;
    case "clothes":
      return <Clothes {...props} />
    case "education":
      return <Education {...props} />
    case "expense":
      return <Expense {...props} />
    case "fun":
      return <Fun {...props} />;
    case "grocery":
      return <Grocery {...props} />;
    case "home":
      return <Home {...props} />;
    case "others":
      return <Others {...props} />
    case "transport":
      return <Transport {...props} />
    case "travel":
      return <Travel {...props} />
    case "chart":
      return <Chart {...props} />
    case "star":
      return <Star {...props} />
    case "payment":
      return <Payment {...props} />
    default:
      return <Payment {...props} />
  }
};

export default CategoryIcon;

CategoryIcon.propTypes = {
  props: propTypes.string,
  name: propTypes.string
}