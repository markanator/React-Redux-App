import React,{useEffect} from 'react';
import './App.css';

import Layout from './layout';

// import character sheets
import CharacterCards from './components/character';

// acions as: actions.getData()
import * as actions from './actions';

// redux items
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  // store state
  const data = useSelector(state => state.data);
  const isFetching = useSelector(state => state.isFetching);
  const error = useSelector(state => state.error);

  // get data
  const fetchData = ()=> dispatch(actions.getData());


  useEffect(() => {
    fetchData();
  },[])

  return (
    <Layout className="App">
      <div className='container'>

      
      {data.map((char)=>{
        return (<CharacterCards
          key={char.id}
          name={char.name}
          status={char.status}
          url={char.image}
          originL={char.origin.name}/>);
      })}
    </div>
    </Layout>
  );
}

export default App;
