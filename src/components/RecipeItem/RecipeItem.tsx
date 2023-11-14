import {actions, ResipeSchema} from "../../store/favorites/favoritesSlice";
import {useDispatch, useSelector} from "react-redux";

export const RecipeItem = ({recipe}: ResipeSchema) => {
    const {name, id} = recipe;
    const {favorites} = useSelector(state => state)
    const dispatch = useDispatch();

    const isExist = favorites.some(item => item.id === id)

    return (
        <div className={'recipe-item'}>
            <h2>{name}</h2>
            <button onClick={() => dispatch(actions.toggleToFavorites(recipe))}  className={'recipe-btn'}>
                {isExist ? 'Убрать из избранного' : 'Добавить в избранное'}
            </button>
        </div>
    )
}
