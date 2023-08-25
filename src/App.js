
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmout } from './features/Counter/counterSlice'
import { addRole, setName } from './features/User/userSlice'
function App() {
  const roles = useSelector((state) => state.root.user.roles)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div style={{ marginLeft: "45%" }}>
        <h3>Counter:</h3>
        <p>{roles}</p>
        <div >
          <button onClick={() => dispatch(increment())}>increment</button>
          <button onClick={() => dispatch(decrement())}>decrement</button>
          <button onClick={() => dispatch(incrementByAmout(2))}>ByAmount</button>
          <button onClick={() => dispatch(addRole("eeeeee"))}>Add Role</button>

        </div>
      </div>
    </div>
  );
}

export default App;
