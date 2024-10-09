import PropTypes from 'prop-types'; 
import './Titulo.css'; 

function Title({ text, level }) {
  const Tag = `h${level}`; 
  return <Tag className="title">{text}</Tag>;
}


Title.propTypes = {
  text: PropTypes.string.isRequired, 
  level: PropTypes.number 
};


Title.defaultProps = {
  level: 1 
};

export default Title;