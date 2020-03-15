import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-routes",
  templateUrl: "./routes.component.html",
  styleUrls: ["./routes.component.scss"]
})
export class RoutesComponent implements OnInit {
  origin: any;
  destination: any;
  constructor() {}

  ngOnInit() {}
  setCoords(e) {
    this.origin = e.origin;
    this.destination = e.destination;
  }
}
