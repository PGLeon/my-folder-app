import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { _getViewData } from '@angular/core/src/render3/instructions';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public user;
  public form: FormGroup;
  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router) { }
  public data = [];



  ngOnInit() {
    this.getData();
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })

  }

  post() {
    this.http.post(' https://seals-server-app.herokuapp.com/beef', this.form.value).subscribe((result: any) => {
      console.log(result.data);
      this.data = result.data;
    }),
      (err) => {
        console.log(err)
      };
  }


  onSubmit() {
    this.data.push(this.form.value);
    console.log(this.data)

  }
  getData() {
    this.http.get(' https://seals-server-app.herokuapp.com/chicken').subscribe((result: any) => {
      console.log(result.data);
      this.data = result.data;
    }),
      (err) => {
        console.log(err)
      };
  }
  login() {
    const payload = {
      email: 'roberto@urbantxt.com',
      password: 'kyle is cool'
    }
  }
  viewBlog(id) {
    console.log(id);
    this.router.navigate(['/blog', id]);
  }
}
