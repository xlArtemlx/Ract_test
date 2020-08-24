import React from 'react';
import {Field, reduxForm} from 'redux-form';

const HotDogForm = (props) => {


    return (
        <form onSubmit = { props.handleSubmit }>
            <div>
                <Field placeholder={'Name'} name ={'name'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Title'} name ={'title'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Description'} name ={'description'} component="input" type={'text'}/>
            </div>
            <div>
                <Field placeholder={'IMG'} name ={'image'} component={'input'}/>
            </div>
            <div>
                <button>No thanks</button>
            </div>
            <div>
                <button>ADD</button>
            </div>
         
        </form>

    )

}

const HotDogReduxForm = reduxForm({form: 'login'})(HotDogForm)

const AddHotDog = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
       
    }
    return (
        <div>
            <h1> Addhot</h1>
            <HotDogReduxForm onSubmit = {onSubmit}/>
        </div>
    )
}

export default AddHotDog;