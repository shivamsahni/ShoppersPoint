import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  members: Observable<any> = this.http.get('/api/users');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

}
