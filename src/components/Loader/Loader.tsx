import Lottie from 'lottie-react';
import loader from './loader.json';

export const Loader = () => {
    return (
        <div
            data-test-id='loader'
            style={{
                background: 'rgba(121, 156, 212, 0.5)',
                backdropFilter: 'blur(6px)',
                height: '100dvh',
                width: '100%',
                position: 'absolute',
                top: 0,
                zIndex: 101,
            }}
        >
            <Lottie
                animationData={loader}
                loop={true}
                style={{
                    height: 150,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            />
            ;
        </div>
    );
};

export default Loader;
