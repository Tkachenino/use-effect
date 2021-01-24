import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({list, onClickHandler}) => {
  return (
    <div className='List'>
      {list.map(l => (
        <ListItem key={l.id} id={l.id} name={l.name} onClickHandler={onClickHandler}/>
      ))}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.array,
  onClickHandler: PropTypes.func
}

export default List;