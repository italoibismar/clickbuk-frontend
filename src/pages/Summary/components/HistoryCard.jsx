import propTypes from "prop-types"

import IconComponent from "../../../components/Icons/Categories/CategoryIcon";

const HistoryCard = ({icon, title, amount, color}) => {
    return ( 
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div style={{ backgroundColor: `${color}18` }} className="h-10 w-10 flex items-center justify-center rounded-full">
                    <IconComponent name={icon} color={color} size={24} />
                </div>
                <span className="text-sm font-bold text-gray-900 dark:text-gray-50">{title}</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-gray-50">{amount}</span>
        </div> 
     );
}
 
export default HistoryCard;

HistoryCard.propTypes = {
    icon: propTypes.string,
    title: propTypes.string,
    amount: propTypes.string,
    color: propTypes.string
}