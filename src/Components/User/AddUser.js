import React,{useState} from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) =>
{
    const [enteredUsername,setUsername]= useState('');
    const [enteredage,setAge]= useState('');
    const [error,seterror]= useState(false);
    const addUserHandler =(Event)=>
    {
        // console.log(enteredUsername,enteredage);
        Event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredage.trim().length===0)
        {            
            seterror({
                title:'Error Message!',
                message : 'Please enter a valid input and age>0'
            });
            return;
        }
        if(+enteredage<1)
        {
            seterror({
                title:'Error Message!',
                message :'Please enter age>0'
            });
            return;
        }
        props.onAddUser(enteredUsername,enteredage);
        console.log(enteredUsername,enteredage);
        setUsername('');
        setAge('');
        seterror(false);
       
    };

    const userNameChangeHandler =(Event)=>
    {
        //console.log(Event.target.value);
        setUsername(Event.target.value);
        
    }

    const ageChangeHandler =(Event)=>
    {
       // console.log(Event.target.value);
        setAge(Event.target.value);
       
    }

    const errorHandler =()=>{
        seterror(null);
    }

    
    return (
        <div>
        <Card classes={classes.input}>
        <form onSubmit={addUserHandler}>
             <label htmlFor="username">UserName</label>
             <input type ="text" id="username" onChange={userNameChangeHandler} value ={enteredUsername}/>
             <label htmlFor="age">Age (Years)</label>
             <input type ="number" id="age" onChange={ageChangeHandler} value={enteredage}/>
             <Button type="submit" >Add User</Button>

             </form> 
             </Card>   
              {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>  }
              </div>
    )
};

export default AddUser;