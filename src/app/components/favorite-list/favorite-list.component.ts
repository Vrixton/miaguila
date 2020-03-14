import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "../../services/favorites/favorites.service";
@Component({
  selector: "app-favorite-list",
  templateUrl: "./favorite-list.component.html",
  styleUrls: ["./favorite-list.component.scss"]
})
export class FavoriteListComponent implements OnInit {
  favoriteList: any;

  constructor(private favorites: FavoritesService) {}

  ngOnInit() {
    this.favorites.get().subscribe(response => {
      this.favoriteList = response;
    });
  }
}
