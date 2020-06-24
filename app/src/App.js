import React, {useEffect} from 'react';
import './App.css';

import Layout from './layout';
import { Spinner } from 'reactstrap';
// import character sheets
import CharacterCards from './components/character';
import LocationCards from './components/locations';
import EpiCards from './components/episodes';

// acions as: actions.getData()
import * as actions from './actions';

// redux items
import {useSelector, useDispatch} from 'react-redux';

function App() {
    const dispatch = useDispatch();
    // store state
    const data = useSelector(state => state.data);
    const locData = useSelector(state => state.locData);
    const epiData = useSelector(state => state.epiData);
    const flavor = useSelector(state => state.flavor);
    const isLoading = useSelector(state => state.isFetching);
    // get data
    const fetchData = () => dispatch(actions.getData());
  // load inital data
    useEffect(() => {
        fetchData();
    }, [])

    function renderData() {
        if (flavor === 'character') {
            return data.map((char) => {
                return (<CharacterCards
                    key={char.id}
                    name={char.name}
                    status={char.status}
                    url={char.image}
                    originL={char.origin.name}/>);
            })
        } else if (flavor === 'location') {
            // locations
            return locData.map((loc) => {
              return (<LocationCards
                  key={loc.id}
                  data={loc}/>);
          })
        } else {
            // episodes
            return epiData.map((epi) => {
              return (<EpiCards
                  key={epi.id}
                  data={epi}/>);
          })
        }

    }

    return (
        <Layout className="App">
            <div className='container'>
              {/* if loading display spinner else display data in card form! */}
                {isLoading? <Spinner color="dark" className='spinner'/> : renderData() }
            </div>
        </Layout>
    );
}

export default App;
