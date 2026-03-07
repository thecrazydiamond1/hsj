"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface RoutePoint {
  name: string;
  lat: number;
  lng: number;
  day: number;
}

const createDayIcon = (day: number) => L.divIcon({
  className: "",
  html: `
    <div style="
      position: relative;
      width: 36px;
      height: 36px;
    ">
      <div style="
        background: #174B8B;
        color: white;
        width: 36px;
        height: 36px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 2px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      "></div>
      <span style="
        position: absolute;
        top: 6px;
        left: 0;
        width: 36px;
        text-align: center;
        font-size: 0.7rem;
        font-weight: 700;
        color: white;
      ">${day}</span>
    </div>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -38],
});

const startIcon = L.divIcon({
  className: "",
  html: `<div style="background:#22c55e;width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

const endIcon = L.divIcon({
  className: "",
  html: `<div style="background:#f07c24;width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

function FitBounds({ points }: { points: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (points.length > 0) {
      map.fitBounds(points, { padding: [40, 40] });
    }
  }, [map, points]);
  return null;
}

export default function TrekMap({ route }: { route: RoutePoint[] }) {
  const center: [number, number] = [route[0]?.lat ?? 28, route[0]?.lng ?? 84];
  const polylinePoints: [number, number][] = route.map(p => [p.lat, p.lng]);

  return (
    <MapContainer
      center={center}
      zoom={8}
      style={{ height: "450px", width: "100%", borderRadius: "10px" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Dashed route line */}
      <Polyline
        positions={polylinePoints}
        pathOptions={{
          color: "#174B8B",
          weight: 3,
          dashArray: "8 5",
          opacity: 0.8
        }}
      />

      {/* Markers */}
      {route.map((point, i) => (
        <Marker
          key={i}
          position={[point.lat, point.lng]}
          icon={
            i === 0 ? startIcon :
            i === route.length - 1 ? endIcon :
            createDayIcon(point.day)
          }
        >
          <Popup>
            <strong>Day {point.day}</strong><br />{point.name}
          </Popup>
        </Marker>
      ))}

      <FitBounds points={polylinePoints} />
    </MapContainer>
  );
}