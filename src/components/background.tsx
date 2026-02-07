import { Outlet } from 'react-router-dom';
import City from '../assets/free-city-backgrounds-pixel-art/city 3/7.png';

const Background = () => {
    return (
        <>
            <img className="w-screen h-screen fixed -z-10" src={City}></img>
            <Outlet />
        </>
    );
};

export default Background;
