import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickAdd = () => {
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavourite}>
                <img src="/img/unsaved.svg" alt="unsaved"/>
            </div>
            <img width={133} height={112} src={props.image} alt="sneakers" />
            <h5>{props.title}</h5>
            <div className={styles.sneakersDescription}>
                <div className="{styles.sneakersInfo}">
                    <span>цена:</span>
                    <b>{props.price} тенге</b>
                </div>
                <div>
                    <img className={styles.addCard} width={21} height={21} src={isAdded ? "/img/added.svg" : "/img/add.svg"} alt="add" onClick={onClickAdd}/>
                </div>
            </div>
        </div>
    );
}

export default Card;