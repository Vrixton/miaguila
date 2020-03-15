import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FavoritesService } from "../../services/favorites/favorites.service";

@Component({
  selector: "app-favorite-list",
  templateUrl: "./favorite-list.component.html",
  styleUrls: ["./favorite-list.component.scss"]
})
export class FavoriteListComponent implements OnInit {
  @Input() point: number;
  @Input() initial: number;
  @Output() coords = new EventEmitter<string>();
  favoriteList: any;
  message: string;
  constructor(private favorites: FavoritesService) {
    this.message =
      this.point === 1 ? "¿Donde te recogemos?" : "¿Donde te dejamos?";
  }

  ngOnInit() {
    this.message =
      this.point === 1 ? "¿Donde te recogemos?" : "¿Donde te dejamos?";
    this.favorites.get().subscribe(response => {
      this.favoriteList = response;
    });
  }

  setCoords(coord) {
    this.message = coord.title;
    this.coords.emit(coord);
  }
}
