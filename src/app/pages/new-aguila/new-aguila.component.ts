import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-aguila",
  templateUrl: "./new-aguila.component.html",
  styleUrls: ["./new-aguila.component.scss"]
})
export class NewAguilaComponent implements OnInit {
  originCoords: any;
  destinationCoords: any;
  constructor() {}

  ngOnInit() {}

  setOrigin(origin) {
    this.originCoords = origin;
  }
  setDestination(destination) {
    this.destinationCoords = destination;
  }
}
