import propTypes from "prop-types";

import List from "./List";
import Category from "./Category";
import Summary from "./Summary";
import DotsVertical from "./DotsVertical";
import User from "./User";
import Support from "./Support";
import Exit from "./Exit";
import Moon from "./Moon";
import Sun from "./Sun";
import Transaction from "./Transaction";
import Income from "./Income";
import Expense from "./Expense";
import ChevronDown from "./ChevronDown";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import Filter from "./Filter";
import Edit from "./Edit";
import Trash from "./Trash";
import Hidden from "./Hidden";
import Bank from "./Bank";
import Close from "./Close";
import Date from "./Date";
import ArrowCircleIncome from "./ArrowCircleIncome";
import ArrowCircleExpence from "./ArrowCircleExpence";
import Transfer from "./Transfer";
import Star from "./Star";

const Icon = (props) => {
  switch (props.name) {
    case "list":
      return <List {...props} />;
    case "category":
      return <Category {...props} />;
    case "summary":
      return <Summary {...props} />;
    case "dots-vertical":
      return <DotsVertical {...props} />;
    case "user":
      return <User {...props} />;
    case "support":
      return <Support {...props} />;
    case "exit":
      return <Exit {...props} />;
    case "moon":
      return <Moon {...props} />;
    case "sun":
      return <Sun {...props} />
    case "transaction":
      return <Transaction {...props} />
    case "income":
      return <Income {...props} />
    case "expense":
      return <Expense {...props} />
    case "chevron-down":
      return <ChevronDown {...props} />
    case "filter":
      return <Filter {...props} />
    case "chevron-rigth":
      return <ChevronRight {...props} />
    case "chevron-left":
      return <ChevronLeft {...props} />
    case "edit":
      return <Edit {...props} />
    case "trash":
      return <Trash {...props} /> 
    case "hidden":
      return <Hidden {...props} />
    case "bank":
      return <Bank {...props} />
    case "close":
      return <Close {...props} />
    case "date":
      return <Date {...props} />
    case "arrow-circle-income":
      return <ArrowCircleIncome {...props} />
    case "arrow-circle-expense":
      return <ArrowCircleExpence {...props} />
    case "transfer":
      return <Transfer {...props} />
    case "star":
      return <Star {...props} />    
    default:
      return <Income {...props} />
  }
};

export default Icon;

Icon.propTypes = {
  props: propTypes.string,
  name: propTypes.string
}