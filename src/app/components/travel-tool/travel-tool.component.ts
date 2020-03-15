import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-travel-tool",
  templateUrl: "./travel-tool.component.html",
  styleUrls: ["./travel-tool.component.scss"]
})
export class TravelToolComponent implements OnInit {
  @Output() origin = new EventEmitter<string>();
  @Output() destination = new EventEmitter<string>();
  coords: any;
  originCoords: any;
  destinationCoords: any;
  step: number = 1;
  initial: boolean = true;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(data => {
      if (data.lat1 && data.lng1) {
        this.originCoords = {
          latitud: data.lat1,
          longitud: data.lng1
        };
        this.initial = true;
        this.coords = undefined;
        console.log(this.coords);
        this.step = 2;
      }
      if (data.lat2 && data.lng2) {
        this.destinationCoords = {
          latitud: data.lat2,
          longitud: data.lng2
        };
        this.step = 3;
      }
    });
  }

  ngOnInit() {
    this.emitCoords(this.step);
  }

  emitCoords(step: number) {
    if (step === 0) {
      this.origin.emit();
      this.destination.emit();
      this.router.navigate["/pedir-aguila"];
    } else if (step === 1) {
      this.origin.emit(this.coords);
    } else if (step === 2) {
      this.origin.emit(this.originCoords);
      this.destination.emit(this.coords);
    } else {
      this.origin.emit(this.originCoords);
      this.destination.emit(this.destinationCoords);
    }
  }

  setCoords(e) {
    this.initial = false;
    this.coords = e;
    this.emitCoords(this.step);
  }
  resetTool() {
    this.emitCoords(0);
    this.step = 1;
    this.originCoords = undefined;
    this.destinationCoords = undefined;
    this.coords = undefined;
    this.initial = true;
    this.router.navigate(["/pedir-aguila"]);
  }
}
