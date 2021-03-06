import React from 'react';
import Button from './Button/Button';
import Card from './Card';
import classes from './ErrorModal.module.css';

const ErrorModal =(props)=>{
    return (
        <div>
        <div className={classes.backdrop} onClick={props.onConfirm}></div>
    <Card className={classes.modal}>
        <header classes={classes.header}>
           {props.title}
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay!</Button>
        </footer>
    </Card>
    </div>);
}

export default ErrorModal;