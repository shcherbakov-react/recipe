import {useState} from 'react'
import viteLogo from '/vite.svg'
import {RecipeItem} from "./components/RecipeItem/RecipeItem";

function App() {

    const recipeList = [{id: '12sdszd13x', name: 'Яичница',}, {id: 'srqw23asd123', name: 'Борщ'}]
    return (
        <div className="container">
            <section className={'recipe'}>
                {recipeList.map((item) => (
                    <RecipeItem key={item.id} recipe={item}/>
                ))}
            </section>
        </div>
    )
}

export default App
