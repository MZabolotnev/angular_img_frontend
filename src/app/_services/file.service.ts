import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { File } from '@app/_models';

@Injectable({
  providedIn: 'root'
})

export class FileService {

  constructor(private http: HttpClient) { }

  create(file: File) {
    return this.http.post(`${environment.apiUrl}/files`, file);
  }
}
