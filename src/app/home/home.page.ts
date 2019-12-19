import {
  Component,
  OnInit,
  ViewChild,
  NgZone
} from '@angular/core';
import {
  Platform,
  LoadingController
} from '@ionic/angular';
import {
  Environment,
  GoogleMaps,
  GoogleMapOptions,
  GoogleMapsEvent,
  MyLocation,
  GoogleMapsAnimation,
  Marker,
  Geocoder,
  ILatLng
} from '@ionic-native/google-maps';



declare var google: any;
declare var text: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('map', {
    static: true
  }) mapElement: any;
  private loading: any;
  private map: GoogleMaps;
  public search: string = '';
  private googleAutocomplete = new google.maps.places.AutocompleteService();
  public searchResults = new Array < any > ();
  private originMarker: Marker;
  public destination: any;
  private googleDirectionsService = new google.maps.DirectionsService();
  public distance: any;
  // public text: any;
  public distancia: Text;
  public allan: any;
  public yasmin: any;
  public valor: number;
  public preco: number;
  public valor1: string;
  public valor2: any;
  public valor3: any;
  public valor4: string;
  valor11: any;
  valor22: any;
  valor33: any;
  public media: any;
  public media1: any;
  public ok:  string = "" ;
  public ok1: string;
  
  



  constructor(
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private ngZone: NgZone
  ) {}




  ngOnInit() {
    this.mapElement = this.mapElement.nativeElement;

    this.mapElement.style.width = this.platform.width() + 'px';
    this.mapElement.style.height = this.platform.height() + 'px';

    this.loadMap();


  }

  async loadMap() {
    this.loading = await this.loadingCtrl.create({
      message: 'free You buscando sua localização por favor aguarde...'
    });
    await this.loading.present();

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDl0NqyglYRbP8t2gi4St9HR0UkjoIBZZY',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDl0NqyglYRbP8t2gi4St9HR0UkjoIBZZY'
    });

    const mapOptions: GoogleMapOptions = {
      controls: {
        zoom: false,
        compass: true,
        myLocation: true,
        myLocationButton: true,
        mapToolbar: false

      }
    };


    this.map = GoogleMaps.create(this.mapElement, mapOptions);

    try {
      await this.map.one(GoogleMapsEvent.MAP_READY);

      this.addOriginMarker();
    } catch (error) {
      console.error(error);
    }

  }
  async addOriginMarker() {
    try {
      const myLocation: MyLocation = await this.map.getMyLocation();


      await this.map.moveCamera({
        target: myLocation.latLng,
        zoom: 18
      });

      this.originMarker = this.map.addMarkerSync({
        title: 'Origem',
        icon: '#000',
        animation: GoogleMapsAnimation.DROP,
        position: myLocation.latLng
      });

      console.log(myLocation);
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }

  }

  searchChanged() {

    if (!this.search.trim().length) return;

    this.googleAutocomplete.getPlacePredictions({
      input: this.search
    }, predictions => {
      this.ngZone.run(() => {
        this.searchResults = predictions;
      });
    });

  }
  
  async calcRoute(item: any) {
    this.search = '';
    this.destination = item;

    const info: any = await Geocoder.geocode({
      address: this.destination.description

    });



    let markerDestination: Marker = this.map.addMarkerSync({
      title: this.destination.description,
      icon: '#000',
      animation: GoogleMapsAnimation.DROP,
      position: info[0].position
    });

    this.googleDirectionsService.route({
      origin: this.originMarker.getPosition(),
      destination: markerDestination.getPosition(),
      travelMode: 'DRIVING'

    }, async results => {
      console.log(results);

      const distancia = results.routes[0].legs[0].distance;

      distancia.text;
      
      this.allan = distancia.text

      this.valor = distancia.value
      this.valor11 = distancia.value
      this.valor22 = distancia.value
      this.valor33 = distancia.value

      this.valor = (this.valor / 1000) * 1.5
      this.valor11 = (this.valor11 / 1000) * 1.3
      this.valor22 = (this.valor22 / 1000) * 1.6
      this.valor33 = (this.valor33 / 1000) * 1.2

      this.valor1 = this.valor.toFixed(2)
      this.valor2 = this.valor11.toFixed(2)
      this.valor3 = this.valor22.toFixed(2)
      this.valor4 = this.valor33.toFixed(2)

      this.media=(this.valor + this.valor11 + this.valor22 + this.valor33) / 4 
      this.media1=this.media.toFixed(2)

      const tempo = results.routes[0].legs[0].duration;

      tempo.text;

      this.yasmin = tempo.text


      const points = new Array < ILatLng > ();

      const routes = results.routes[0].overview_path;

      for (let i = 0; i < routes.length; i++) {
        points[i] = {
          lat: routes[i].lat(),
          lng: routes[i].lng()
        }
      }






      await this.map.addPolyline({
        points: points,
        color: '#000',
        width: 3

      });
      await this.map.moveCamera({
        target: points
      });
      this.map.panBy(0, -100);



    });


  }
 
 

  async corrida()
  {
    this.ok = "";
   
    this.ok = 'teste';
  }
  


  async back() {
    try {
      await this.map.clear();
      this.destination = null;
      this.ok = null ;
      this.addOriginMarker();
    } catch (error) {
      console.error(error);
    }
    this.ok = " ";
  }

}