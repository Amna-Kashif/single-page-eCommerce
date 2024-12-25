import React from 'react'
import styles from './Card.module.css'
import PropType from 'prop-types'



const Card =  ({id, title, price, image, description, category, rating}) => {
    return (
        <> 
        <div className={styles.card}>
            <img className={styles.img} src={image} alt="" />
            <h4 className={styles.rating}> {rating} ⭐</h4>
            <h4 className={styles.price}>$ {price} </h4>
            <h4 className={styles.category}> {category} </h4>
            <h4 className={styles.title}>  {title}</h4>
            <p className={styles.description}>{description} </p>
        </div>
        </>
    )
}

Card.PropType = {
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    price: PropType.number.isRequired,
    image: PropType.string.isRequired,
    description: PropType.string.isRequired,
    category: PropType.string.isRequired,
    rating: PropType.number.isRequired
}

export default Card