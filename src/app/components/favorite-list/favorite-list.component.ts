import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FavoritesService } from "../../services/favorites/favorites.service";
import { DepartmentsService } from "../../services/departments/departments.service";
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
  departmentList: any;
  constructor(
    private favorites: FavoritesService,
    private departments: DepartmentsService
  ) {
    this.message =
      this.point === 1 ? "¿Donde te recogemos?" : "¿Donde te dejamos?";
  }

  ngOnInit() {
    this.message =
      this.point === 1 ? "¿Donde te recogemos?" : "¿Donde te dejamos?";
    this.favorites.get().subscribe(response => {
      this.favoriteList = response;
    });
    this.departments.get().subscribe(response => {
      this.departmentList = response;
    });
  }

  setCoords(coord) {
    this.message = coord.title;
    this.coords.emit(coord);
  }
}
