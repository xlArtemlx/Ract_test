import React from 'react';
import  {HotDogConsumer} from '../context/context'

const withContext = () => (Wrapped) => {
    return (props) => {
        return (
            <HotDogConsumer>
                {
                    (hotdogstoreService) =>{
                        return (<Wrapped {...props} 
                                       hotdogstoreService ={hotdogstoreService}/>
                        )
                    }
                }
            </HotDogConsumer>

        )
    }
}

export default withContext;