import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { getBootstrapListener } from '../../../node_modules/@angular/router/src/router_module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('carousel') carousel: any;
  @ViewChild('carousel1') carousel1: any;
  constructor(private router: Router) { }


  ngOnInit() {
  }
  public classroom = [
    {
      name: 'Nate',
      age: 15,
      status: true
 
    },
    {
      name: 'Kyle',
      age: 16,
      status: true
 
    },
    {
      name: 'Julian',
      age: 16,
      status: true
 
    },
    {
      name: 'Victor',
      age: 16,
      status: true
 
    },
    {
      name: 'David',
      age: 15,
      status: true
 
    },
  ]
  checkout() {
    for(let item of this.classroom){
      if(item.status === true){
        item.status = false;
      } else{
        item.status = true;
      }
     
    }
    console.log(this.classroom)   
  }
 }
