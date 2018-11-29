import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-my-new-blog',
  templateUrl: './my-new-blog.component.html',
  styleUrls: ['./my-new-blog.component.css']
})
export class MyNewBlogComponent implements OnInit {
  public id;
  public journal;
  data: any;
  constructor(
    public route: ActivatedRoute,
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe((result) => {
      console.log(result.id);
      this.id = result.id;
      this.getJournal();

    });
  }

  getJournal() {
    this.http.post(' https://seals-server-app.herokuapp.com/getBlog', {id: this.id} ).subscribe((res:any) => {
      console.log(res);
      this.journal = res.data;

    })
  }

  }


