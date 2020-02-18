import React, {lazy, Suspense} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import { player, allowClick } from '../../customer';
import generateKey from '../Key';
import Image from './Image';
// const Image = lazy(() => import('./Image')); 

export default function CarouselItem(props) {
    const {done, active, updateActive} = props;
    let actualArr = search(active.id, props.array);
    //remove done from array and push to last 
    let temp = [];
    if (done.length !== 0) {
        for (let i=0; i<actualArr.length; i++) {
            if (done.indexOf(actualArr[i].id) > -1) {
                temp.push(actualArr[i]);
                actualArr.sort(function(a, b) { 
                    return a.id - b.id;
                })
                actualArr.splice(i, 1);
            }
        }
        
        if (temp.length!==0) {
            
            for (let j=0; j<temp.length; j++) {
                actualArr.push(temp[j]);
            }
        }
        ;
    }

    let cs = [];
    for (let j=0; j<actualArr.length; j++) {
        cs.push(
            <span key={generateKey()} className="customer-list">
                {/* <ProgressBar  key={generateKey()}>
                    <ProgressBar  variant="loading" now={33.33} />
                    <ProgressBar  variant="loading" now={33.33} />
                    <ProgressBar  variant="done" now={33.33}  />
                </ProgressBar> */}
                {/* <Suspense fallback={<FontAwesomeIcon icon="spinner" rotation={90} inverse />}> */}
                    <Image done={done} 
                        idKey={j} 
                        key={generateKey()} 
                        image={actualArr[j].image} 
                        id={actualArr[j].id} 
                        updateActive={updateActive}/>
                {/* </Suspense> */}
            </span>
        );
    }
    return cs;
}

const search = (value, array) => {
    let arr = array.filter((object) => (parseInt(object.id) !== parseInt(value)) );
    return arr;
}

