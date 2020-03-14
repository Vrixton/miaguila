import { Component, OnInit } from "@angular/core";
import { Constants } from "../../configs/constants";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  options: any = Constants.Menu;
  constructor() {}

  ngOnInit() {}
}
