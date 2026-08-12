import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { DEMO_CENTER, DEMO_ZOOM } from '../config';
import { getCategoryColor } from '../constants/categories';
import StoryPopup from './StoryPopup';

/**
 * Builds a custom SVG map pin coloured by category.
 * Using a custom icon avoids the classic Leaflet default-marker path bug
 * with bundlers and keeps us independent of any image assets.
 */
function createPinIcon(category) {
  const color = getCategoryColor(category);
  return L.divIcon({
    className: 'ripple-pin-wrapper',
    html: `
      <svg width="34" height="44" viewBox="-2 0 34 44" aria-hidden="true">
        <path d="M15 0C6.7 0 0 6.7 0 15c0 11.2 15 29 15 29s15-17.8 15-29C30 6.7 23.3 0 15 0z"
              fill="${color}" stroke="#ffffff" stroke-width="1.6"/>
        <circle cx="15" cy="14.5" r="6.5" fill="#ffffff"/>
        <text x="15" y="18.5" text-anchor="middle" font-size="9" fill="${color}" font-weight="bold">♥</text>
      </svg>
    `,
    iconSize: [34, 44],
    iconAnchor: [17, 44],
    popupAnchor: [0, -40],
    tooltipAnchor: [0, -34],
  });
}

/**
 * KindnessMap — a pure presentational Leaflet map.
 * Receives the (already filtered) acts as props and renders one marker each.
 * Clicking a marker opens a StoryPopup with the "I Want to Ripple" action.
 */
export default function KindnessMap({ acts, onRipple, className = '' }) {
  return (
    <MapContainer
      center={[DEMO_CENTER.lat, DEMO_CENTER.lng]}
      zoom={DEMO_ZOOM}
      scrollWheelZoom
      className={`${className} ripple-popup`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {acts.map((act) => (
        <Marker
          key={act.id}
          position={[act.latitudeApprox, act.longitudeApprox]}
          icon={createPinIcon(act.category)}
        >
          <Popup>
            <StoryPopup act={act} onRipple={onRipple} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}