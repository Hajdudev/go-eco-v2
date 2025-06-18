"use client"
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";


function MapView() {
  const position = { lat: 48.1486, lng: 17.1077 };

  return (
    <div className="w-full h-full py-15 pr-15 rounded-md">
      {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API != undefined &&
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}>
          <Map defaultCenter={position} defaultZoom={10} mapId="DEMO_MAP_ID">
            <AdvancedMarker position={position} />
          </Map>
        </APIProvider>
      }
    </div>
  );
}

export default MapView;
