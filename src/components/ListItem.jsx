import PropTypes from 'prop-types';

const ListItem = ({id, name, onClickHandler}) => {

  return (
    <button className="ListItem" onClick={()=> onClickHandler(id, name)}>
      {name}
    </button>
  )
}

ListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  onClickHandler: PropTypes.func
}

export default ListItem;