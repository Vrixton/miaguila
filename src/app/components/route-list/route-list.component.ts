import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { RoutesService } from "../../services/routes/routes.service";

@Component({
  selector: "app-route-list",
  templateUrl: "./route-list.component.html",
  styleUrls: ["./route-list.component.scss"]
})
export class RouteListComponent implements OnInit {
  routeList: any;
  isShowRoutes: boolean = true;
  @Output() coords = new EventEmitter<string>();
  constructor(private routes: RoutesService) {}

  ngOnInit() {
    this.routes.get().subscribe(response => {
      this.routeList = response.routes;
    });
  }

  setCoords(routes) {
    this.coords.emit(routes);
  }
}
