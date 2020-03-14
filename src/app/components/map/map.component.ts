import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  lat = 4.6486259;
  lat1: number;
  lat2: number;
  lng = -74.2478952;
  lng1: number;
  lng2: number;
  locationChoosen1 = false;
  locationChoosen2 = false;
  zoom = 12;

  constructor() {}

  ngOnInit() {
    // this.lat1 = 4.684668;
    // this.lng1 = -74.0576923;
    // this.lat2 = 4.6476286;
    // this.lng2 = -74.1038169;
  }
}
