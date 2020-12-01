import L from 'leaflet'
import * as icon from './ballmarker.png'

const ballIcon = new L.icon({
    iconUrl: 'https://cdn4.iconfinder.com/data/icons/basketball-award/100/b-05-512.png',
    iconRetinaUrl: null,
    iconAnchor: [22,54],
    popupAnchor: [0, -56],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [38, 50],
    className: 'leaflet-div-icon'
})

export default ballIcon