import React, { useEffect, useState } from 'react'
import 'winbox/dist/css/winbox.min.css';
import WinBox from 'react-winbox';

function getCurrentDimension() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

const Window = ({ title, width, height, x, y, background, icon, component, dialogOptions, hidden }) => {
    
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const h = hidden

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    return (
        <>
            {
                hidden ?
                    <></> :
                    <WinBox
                        title={title}
                        width={screenSize.width < 1080? 499 : width}
                        height={screenSize.height < 720? 500 : height}
                        x={x}
                        y={y}
                        noFull={true}
                        noMin={true}
                        background={background}
                        icon={icon}
                        hide={h}
                        onClose={() => dialogOptions('close')}
                    >
                        {component}
                    </WinBox>
            }
        </>
    )
}

export default Window