import {useEffect} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const useDarkMode = (initialValue) => {
    const [darkState, setDarkState] = useLocalStorage('dark-mode', initialValue)

    useEffect(() => {
        if (darkState){
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkState]);

    return [darkState, setDarkState];
}

export default useDarkMode;