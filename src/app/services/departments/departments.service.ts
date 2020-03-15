import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DepartmentsService {
  url: string = "assets/departments.json";

  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
    return this.http.get(this.url);
  }
}
