import React from 'react'
import Counter from './Counter'
import InputState from './InputState'
import Toggle from './Toggle'
import ShowHide from './ShowHide'
import MultipleState from './MultipleState'
import ObjectState from './ObjectState'
import Fruits from './Fruits'
import AddFruit from './AddFruit'
import RemoveFruit from './RemoveFruit'
import TodoList from './TodoList'
import PreviousState from './PreviousState'
import StateProject from './StateProject'

function App() {
  return (
    <div>
      <h1>React State</h1>

      {/* Example 1 */}
      <Counter />
      <br />


      {/* Example 2 */}
      <InputState />
      <br />


      {/* Example 3 */}
      <Toggle />
      <br />

      {/* Example 4 */}
      <ShowHide />
      <br />

      {/* Example 5 */}
      <MultipleState />
      <br />

      {/* Example 6 */}
      <ObjectState />
      <br />

      {/* Example 7 */}
      <Fruits />
      <br />

      {/* Example 8 */}
      <AddFruit />
      <br />

      {/* Example 9 */}
      <RemoveFruit />
      <br />

      {/* Todo Project */}
      <TodoList />
      <br />

      {/* using the previous state. */}
      <PreviousState />
      <br />

      {/* State Project */}
      <StateProject />
    </div>
  )
}

export default App