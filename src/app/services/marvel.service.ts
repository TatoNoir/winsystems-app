import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private baseUrl = 'https://gateway.marvel.com/v1/public';
  private publicKey = 'b34bc6446998173d2119adfa1f5e959b';
  private privateKey = '6d989cc27d1205d403e59427b9c083b503472790';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any> {
    const ts = Date.now().toString();
    const hash = Md5.hashStr(ts + this.privateKey + this.publicKey); //solicitado desde la api

    const url = `${this.baseUrl}/characters?limit=20&ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;
    return this.http.get(url);
  }
}
