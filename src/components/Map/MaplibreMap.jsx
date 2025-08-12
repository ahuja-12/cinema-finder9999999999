const MaplibreMap = ({ children }) => {
  console.log("render Maplibre map");
  return (
    <Map
      mapLib={maplibregl}
      mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=46DCXvzkGNIvqAgCljGV"
      initialViewState={{
        bounds: convertBounds(totalBounds),
      }}
      padding={24}
      maxBounds={[
        [110, -50], // Southwest corner (left-bottom)
        [180, -10], // Northeast corner (right-top)
      ]}
      minZoom={3} // Optional: prevents zooming too far out
    >
      <MapSnappingEventListener />
      <MapContextProvider value={{ Marker: MaplibreMarker }}>
        {children}
      </MapContextProvider>
    </Map>
  );
};
