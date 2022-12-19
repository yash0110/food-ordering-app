import DUMMY_MEALS from "../../store/dummy-meals"
import MealItem from "./MealItem";
import Card from '../UI/Card'

const MealList = (props) => {

    const MealListDisplay = DUMMY_MEALS.map((item) => <MealItem key={item.id} item={item} />);

    return (
        <Card>
            <ul>
                {MealListDisplay}
            </ul>
        </Card>
    );
}

export default MealList;