import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  url: string = "assets//favorites.json";

  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
    return this.http.get(this.url);
  }
}
