import DUMMY_MEALS from "../constants/dummy-meals"
import MealItem from "./MealItem";
import Card from '../UI/Card'

const MealList = (props) => {

    const MealListDisplay = DUMMY_MEALS.map((item) => <MealItem item={item} />);

    return (
        <Card>
            {MealListDisplay}
        </Card>
    );
}

export default MealList;