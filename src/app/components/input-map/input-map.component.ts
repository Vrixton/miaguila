import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input-map",
  templateUrl: "./input-map.component.html",
  styleUrls: ["./input-map.component.scss"]
})
export class InputMapComponent implements OnInit {
  @Input() point: number;
  message: string;
  constructor() {}

  ngOnInit() {
    this.message =
      this.point === 1 ? "¿Donde te recogemos?" : "¿Donde te dejamos?";
  }
}
