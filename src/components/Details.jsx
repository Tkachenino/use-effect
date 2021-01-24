import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

const Details = ({info: {id, name}}) => {
  const [details, setDetails] = useState({
    id: null,
    avatar: '',
    name:'',
    details: {
      city: '',
      company: '',
      position: ''
    }
  });
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    let canceled = false;
    const getInfo = async() => {
    
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_FETCH}${id}.json`);
      const result = await response.json();
      
     if (!canceled) {
      setDetails(result);
      setLoading(false);
     }  
    }

    id && getInfo(id);
    return () => {canceled = true}
  }, [id])

  const loader = <p>Loading {name}...</p>;

  const userDetails = (
    <div className='Details'>
      <img src={details.avatar} alt={details.name}/>
      <p className="Name">{details.name}</p>
      <p>City: {details.details.city}</p>
      <p>Company: {details.details.company}</p>
      <p>Position: {details.details.position}</p>
    </div>
  )

  return (
    <>
    {loading && loader}
    {id && !loading && userDetails}
    </>
  )
}

Details.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
}

export default Details;