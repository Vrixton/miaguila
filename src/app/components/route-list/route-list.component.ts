import { Component, OnInit } from "@angular/core";
import { RoutesService } from "../../services/routes/routes.service";

@Component({
  selector: "app-route-list",
  templateUrl: "./route-list.component.html",
  styleUrls: ["./route-list.component.scss"]
})
export class RouteListComponent implements OnInit {
  routeList: any;

  constructor(private routes: RoutesService) {}

  ngOnInit() {
    this.routes.get().subscribe(response => {
      console.log(response);
      this.routeList = response.routes;
    });
  }
}
