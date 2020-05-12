import React from 'react';
import StationCoords from './StationCoords';

const SpaceStation = () => {
    
    return (
        <div id="spaceStation-block">
            <h3>Location of the International Space Station</h3>
            <StationCoords />
            <p>I chose the Open Notify REST API exclusively because it doesn't require an API key. I know most do, but in this case, I didn't want to expose a real API key by using it on the client-side.</p>
            <div className="photo-credit">
                <small>Photo by Andy Holmes via Unsplash.com</small>
            </div>
        </div>
    )
}

export default SpaceStation;