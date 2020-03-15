import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  @Input() originCoords: any;
  @Input() destinationCoords: any;
  lat = 4.6373334;
  lng = -74.1593165;
  zoom = 12;

  constructor() {}

  ngOnInit() {}
}
