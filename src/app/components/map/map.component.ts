import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  lat = 10.394117666271319;
  lat1: number;
  lat2: number;
  lng = -71.45030203395055;
  lng1: number;
  lng2: number;
  locationChoosen1 = false;
  locationChoosen2 = false;
  option: number;
  zoom = 9;

  constructor() {}

  ngOnInit() {}
}
