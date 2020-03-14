import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-quick-select-favorite",
  templateUrl: "./quick-select-favorite.component.html",
  styleUrls: ["./quick-select-favorite.component.scss"]
})
export class QuickSelectFavoriteComponent implements OnInit {
  @Input() point: number;
  @Input() selected: any;
  constructor() {}

  ngOnInit() {}
}
