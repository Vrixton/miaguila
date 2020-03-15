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
  zoom = 12;

  constructor() {
    console.log(this.originCoords);
    console.log(this.destinationCoords);
  }

  ngOnInit() {
    console.log("print");
    console.log(this.originCoords);
    console.log(this.destinationCoords);
  }
}
