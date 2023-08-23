import React from 'react'
import {HeaderFive, Image, LoadingContainer} from "./LoadingScreenStyles";

export const LoadingScreen: React.FC = () => {
    return (
        <LoadingContainer
            id="overlayLoader"
        >
            <Image
                src="/logo512.png"
                alt="logo"
            />
            <HeaderFive>
                L O A D I N G . . .
            </HeaderFive>
        </LoadingContainer>
    )
}
