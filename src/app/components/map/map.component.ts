import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  @Input() originCoords: any;
  @Input() destinationCoords: any;
  lat = 4.6486259;
  lng = -74.2478952;
  locationChoosen1 = false;
  locationChoosen2 = false;
  zoom = 12;

  constructor() {}

  ngOnInit() {}
}
