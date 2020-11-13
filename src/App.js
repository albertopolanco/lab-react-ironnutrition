import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsList from './foods.json';
import FoodBox from "./components/FoodBox"
import AddFood from "./components/AddFood"
import Search from "./components/Search"

class App extends Component {
  state = {
    foods: foodsList,
    filteredFoodsList: foodsList
  }
  addOneFood = oneFood => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.unshift(oneFood)
    this.setState({
      // hay que poner filteredFoodList que esta mapeado en la linea 40
      foods: foodsCopy, filteredFoodsList: foodsCopy
    })
  }


  filterFoods = foodName => {
    const otraFoodsCopy = [...this.state.foods]
    const foodNameList = foodName.toLowerCase()
    const filteredFoods = otraFoodsCopy.filter(food => {
      return food.name.toLowerCase().includes(foodNameList);
    })

    this.setState({ filteredFoodsList: filteredFoods });
  }


  render() {
    return (
      <div className="App">
        <AddFood addTheFood={(e) => this.addOneFood(e)} />
        <Search filterFoods={this.filterFoods} />
        {this.state.filteredFoodsList.map((oneFood, index) => {
          return (
            <FoodBox key={index} name={oneFood.name} image={oneFood.image} calories={oneFood.calories} quantity={oneFood.quantity} />
          )
        })}
      </div>
    )
  }
}
export default App;