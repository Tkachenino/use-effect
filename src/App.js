import {useState, useEffect} from 'react';
import List from './components/List';
import Details from './components/Details';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [info, setInfo] = useState({id: null, name: ''});

  const getList = async() => {
    const response = await fetch(`${process.env.REACT_APP_FETCH}users.json`);
    const result = await response.json();
    console.log(result);
    setList(result);
  };

  useEffect(() => {
    getList();
  }, [])

  const choseUser = (id, name) => {
    setInfo({id, name})
  }

  return (
    <div className="App">
      <List list={list}  onClickHandler={choseUser}/>
      <Details info={info}/>     
    </div>
  );
}

export default App;
