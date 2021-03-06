import React from 'react';
import './Card.css'
const Card = ({name,email,id})=>{
	// const {name , email,id} = props;
	return(
      <div className='bg-light-green br3 pa3 ma2 grow bw2 col shadow-5'>
      	<img alt='dp' src={`https://robohash.org/${id}?size=200x200`}/>
      	<div>
      		<h2>{name}</h2>
      		<p>{email}</p>
      	</div>
      </div>
    );
}
 
export default Card;