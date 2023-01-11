
import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Rating} from "./Rating";


export default {
    title: 'Rating',
    component: Rating,
};

export const EmptyRating = () => <Rating value={0} onClick={()=>{}}/>
export const Rating1Star = () => <Rating value={2} onClick={()=>{}}/>
export const Rating2Star = () => <Rating value={3} onClick={()=>{}}/>
export const Rating3Star = () => <Rating value={4} onClick={()=>{}}/>
export const Rating4Star = () => <Rating value={5} onClick={()=>{}}/>
export const Rating5Star = () => <Rating value={6} onClick={()=>{}}/>
export const ControlledRating = () => {
    const [ratingValue, setRatingValue] = useState(0)
    return(
        <Rating value={ratingValue} onClick={setRatingValue}/>
    )
}
