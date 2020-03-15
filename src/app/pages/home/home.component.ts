import { Component, OnInit } from "@angular/core";
import { RoutesService } from "../../services/routes/routes.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  route: any;
  constructor(private routes: RoutesService) {}

  ngOnInit() {
    this.routes.get().subscribe(response => {
      this.route = response.routes[0];
    });
  }
}
