import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RoutesService {
  url: string = "assets/route-test.json";

  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
    return this.http.get(this.url);
  }
}
