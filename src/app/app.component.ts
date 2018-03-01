import { Component } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Angular Google Maps';
  lat: number = 51.678418;
  lng: number = 7.809007;

 constructor(public gMaps: GoogleMapsAPIWrapper) {}

 markerClicked = (markerObj) => {
   console.log(markerObj)
    this.gMaps.setCenter({ lat: markerObj.latitude, lng: markerObj.longitude });
    console.log('clicked', markerObj, { lat: markerObj.latitude, lng: markerObj.longitude });
  }

  mapTypeId = "terrain"
  changeMap(){
    this.mapTypeId = "hybrid"
  }
  newMarkers = [
    {
      marker : [
        {
          lat: 51.673858,
          lng: 7.815982,
          label: '1',
          draggable: true,
          infowindowContent: 'test',
          markerIcon :  'data:image/svg+xml;utf-8, \
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
            <path fill="red" stroke="white" stroke-width="1.5" d="M3.5 3.5h25v25h-25z" ></path> \
          </svg>',
          newIcon: ''
        },
        {
          lat: 51.373858,
          lng: 7.215982,
          label: '2',
          draggable: false,
          infowindowContent: 'test2',
          markerIcon :  'data:image/svg+xml;utf-8, \
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
            <path fill="red" stroke="white" stroke-width="1.5" d="M3.5 3.5h25v25h-25z" ></path> \
          </svg>',
          newIcon: ''
        },
        {
          lat: 51.423858,
          lng: 7.895982,
          label: '3',
          draggable: true,
          infowindowContent: 'test3',
          markerIcon :  'data:image/svg+xml;utf-8, \
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
            <path fill="red" stroke="white" stroke-width="1.5" d="M3.5 3.5h25v25h-25z" ></path> \
          </svg>',
          newIcon: ''
        },
        {
          lat: 51.423858,
          lng: 8.895982,
          label: '4',
          draggable: true,
          infowindowContent: 'test3',
          markerIcon :  'data:image/svg+xml;utf-8, \
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
            <path fill="red" stroke="white" stroke-width="1.5" d="M3.5 3.5h25v25h-25z" ></path> \
          </svg>',
          newIcon: ''
        },
        {
          lat: 51.723858,
          lng: 9.895982,
          label: '5',
          draggable: true,
          infowindowContent: 'test3',
          markerIcon :  'data:image/svg+xml;utf-8, \
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
            <path fill="red" stroke="white" stroke-width="1.5" d="M3.5 3.5h25v25h-25z" ></path> \
          </svg>',
          newIcon: ''
        }
      ]
    },
    {
      marker : [
        {
          lat: 52.673858,
          lng: 7.815982,
          label: '1',
          draggable: true,
          infowindowContent: 'test',
          markerIcon :  'data:image/svg+xml;utf-8, \
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
            <path fill="red" stroke="white" stroke-width="1.5" d="M3.5 3.5h25v25h-25z" ></path> \
          </svg>',
          newIcon: ''
        },
        {
          lat: 52.373858,
          lng: 7.215982,
          label: '2',
          draggable: false,
          infowindowContent: 'test2',
          markerIcon :  'data:image/svg+xml;utf-8, \
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
            <path fill="red" stroke="white" stroke-width="1.5" d="M3.5 3.5h25v25h-25z" ></path> \
          </svg>',
          newIcon: ''
        },
        {
          lat: 52.973858,
          lng: 7.215982,
          label: '3',
          draggable: false,
          infowindowContent: 'test2',
          markerIcon :  'data:image/svg+xml;utf-8, \
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
            <path fill="red" stroke="white" stroke-width="1.5" d="M3.5 3.5h25v25h-25z" ></path> \
          </svg>',
          newIcon: ''
        }
      ]
    }
  ]

  

  lineRoute  = [
    {
      lat: 51.673858,
      lng: 7.815982
    },
    {
      lat: 51.373858,
      lng: 7.215982
    },
    {
      lat: 51.423858,
      lng: 7.895982
    }
  ];


  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
      draggable: true,
      infowindowContent: 'test'
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
      draggable: false,
      infowindowContent: 'test2'
	  },
	  {
		  lat: 51.423858,
		  lng: 7.895982,
		  label: 'C',
      draggable: true,
      infowindowContent: 'test3'
	  },
	  {
		  lat: 52.423858,
		  lng: 7.895982,
		  label: 'C',
      draggable: true,
      infowindowContent: 'test3'
	  }
  ]

  stores: marker[] = [
	  {
		  lat: 53.673858,
		  lng: 7.815982,
		  label: 'A',
      draggable: true,
      infowindowContent: 'test'
	  },
	  {
		  lat: 53.373858,
		  lng: 7.215982,
		  label: 'B',
      draggable: false,
      infowindowContent: 'test2'
	  }
  ]

  oMarkers = [];

  ngOnInit () {
    console.log(this.lineRoute);
    console.log(this.newMarkers);
    this.getMarkers();
  }

  getMarkers () {

    let newGMarkers = [];
    for(let i = 0; i < this.newMarkers.length; i++){

      let newGMarker = this.newMarkers[i];
      let kMarkers= [];
      for(let n = 0; n < newGMarker.marker.length; n++){
        let k = newGMarker.marker[n];
        k.label = newGMarker.marker[n].label;
        k.newIcon =  'data:image/svg+xml;utf-8, \
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
          <path fill="red" stroke="white" stroke-width="1.5" d="M3.5 3.5h25v25h-25z" ></path> \
          <text x="10" y="20" fill="white">' + k.label + '</text> \
        </svg>'
        kMarkers.push(k)
      }
      newGMarker.marker = kMarkers;
      this.oMarkers.push(newGMarker);
      console.log
    }
    console.log('this.oMarkers------')
    console.log(this.oMarkers)
  }
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
  draggable: boolean;
  infowindowContent: string;
}

interface polygon {
  lat: number;
  lng: number
}
