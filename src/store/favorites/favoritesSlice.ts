import {createSlice} from "@reduxjs/toolkit";

export interface ResipeSchema {
    id: string;
    name: string;
}

const initialState: ResipeSchema[] = [{name: 'Борщ', id: 'srqw23asd123'}]
export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        toggleToFavorites: (state, {payload: recipe}) => {
            const isExist = state.some(item => item.id === recipe.id)
            const index = state.findIndex(item => item.id === recipe.id)
            isExist ? state.splice(index, 1) : state.push(recipe)
        }
    }
})

export const {actions, reducer} = favoritesSlice
