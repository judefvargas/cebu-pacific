import React from 'react';
import { allowClick } from '../../customer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Image = ({ done, idKey, image, id, updateActive }) => {
  // let { done, idKey, image, id, updateActive } = props;
  const btnClick = () => {
    if (allowClick && done.indexOf(id)===-1) {
      updateActive(id);
    }
  }
  let imageSpan = [];
  imageSpan.push(<span>
    { (done.indexOf(id) > -1) ?
    (<span className="fa-layers fa-fw checkmark">
      <FontAwesomeIcon icon="square" className="squareCheck" color="green" size="lg" />
      <FontAwesomeIcon icon="check" inverse color="green"  size=""/>
    </span>) : '' }
    <span className={`customerSpan `}>
      <img 
        onClick={btnClick.bind(this)}
        key={idKey}
        className={`customerImage ${ (idKey>=5 ? 'customerGrayImage': '') }`} 
        alt=""
        src={`characters/${image}`} />
    </span>
  </span>);
  return imageSpan;
}