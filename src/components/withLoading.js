import { useState, useEffect } from 'react';

const withLoading = (WrappedComponent) => {
    return (props) => {
        const [data, setData] = useState(null);

        useEffect(() => {
            props.fetchMethod(props.params)
                .then(res => { setData(res); console.log('User: ', res) })
        }, [props])

        return data? (<WrappedComponent data = {data} {...props}/>) : (<p className='center'>Loading...</p>);
    }

}

export default withLoading;