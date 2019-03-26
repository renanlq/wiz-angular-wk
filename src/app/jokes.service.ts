import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JokesService {

  private readonly base: string = "http://freeservices.esy.es/api/";
  constructor(private http: HttpClient) { }

  list():Observable<JokeModel[]> {
    return this.http.get<JokeModel[]>(this.base + 'jokes');
  }

  byId(id: number):Observable<JokeModel> {
    return this.http.get<JokeModel>(this.base + 'joke/' + id);
  }

  update(id: number, data: JokeModel):Observable<JokeModel> {
    return this.http.put<JokeModel>(this.base + 'joke/' + id, data);
  }
  
  create(data: JokeModel):Observable<JokeModel> {
    return this.http.post<JokeModel>(this.base + 'joke/', data);
  }

  delete(id: number):Observable<JokeModel> {
    return this.http.delete<JokeModel>(this.base + 'joke/' + id);
  }
}


export interface JokeModel{

  id: number;
  title: string;
  text: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
}