import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

import { providers } from "../data/gothenburg";
import { mapStyles } from "../data/mapStyles";

const MapSection = () => {
  const [selected, setSelected] = useState({});

  const onSelect = (provider) => {
    setSelected(provider);
  };

  const center = {
    lat: 57.700946,
    lng: 11.96603,
  };

  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  const defaultMapOptions = {
    fullScreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    styles: mapStyles,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });
  const markers = providers.map((provider) => {
    return (
      <Marker
        key={
          provider.name +
          provider.fullAddress.latitude +
          provider.fullAddress.longitude
        }
        icon={{
          path: "M256,0C167.641,0,96,71.625,96,160c0,24.75,5.625,48.219,15.672,69.125C112.234,230.313,256,512,256,512l142.594-279.375 C409.719,210.844,416,186.156,416,160C416,71.625,344.375,0,256,0z M256,256c-53.016,0-96-43-96-96s42.984-96,96-96 c53,0,96,43,96,96S309,256,256,256z",
          scale: 0.08,
          strokeColor: "#ffd09c",
          fillColor: "#ffd09c",
          fillOpacity: 1,
          strokeWeight: 0.1,
        }}
        position={{
          lat: provider.fullAddress.latitude,
          lng: provider.fullAddress.longitude,
        }}
        onClick={() => onSelect(provider)}
      />
    );
  });

  return (
    isLoaded && (
      <GoogleMap
        options={defaultMapOptions}
        className="map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        {markers}
        {selected.fullAddress && (
          <InfoWindow
            position={{
              lat: selected.fullAddress.latitude,
              lng: selected.fullAddress.longitude,
            }}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <Card>
              <CardHeader
                title={selected.name}
                subheader={`${selected.address}`}
              />
              <CardMedia
                style={{ height: 0, paddingTop: "36.25%" }}
                image={selected.images[0]}
                title={`${selected.name} office space`}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {selected.description}
                </Typography>
              </CardContent>
            </Card>
          </InfoWindow>
        )}
      </GoogleMap>
    )
  );
};

export default MapSection;
