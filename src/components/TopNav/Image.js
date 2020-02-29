import React from 'react';
import { allowClick } from '../../customer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { saveChatIndex } from '../storylineActions';

function Image({ done, idKey, image, id, updateActive }) {
  // let { done, idKey, image, id, updateActive } = props;
  const btnClick = () => {
    if (allowClick && done.indexOf(id)===-1) {
      saveChatIndex(id, null, true);
      updateActive(id);
    }
  }
  let imageSpan = [];
  imageSpan.push(<span>
    { (done.indexOf(id) > -1) ?
    (<span className="fa-layers fa-fw checkmark">
      <FontAwesomeIcon icon="square" className="squareCheck" color="green" size="lg" />
      <FontAwesomeIcon icon="check" inverse color="green" />
    </span>) : '' }
    <span className={`customerSpan `} style={{cursor:((allowClick && done.indexOf(id)===-1) ? 'pointer' : '')}}>
      <LazyLoadImage
        onClick={btnClick.bind(this)}
        placeholderSrc={`characters/${image}`} 
        effect="blur" 
        className={`customerImage ${ (idKey>=5 ? 'customerGrayImage': '') }`} 
        height="100%" 
        src={`characters/${image}`} 
      alt="" />
    </span>
  </span>);
  return imageSpan;
}

export default Image;