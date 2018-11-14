import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { _getViewData } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public form: FormGroup;
  constructor(public fb: FormBuilder){}

  public journals = [
    {
      title: '',
      content: '',
  },
  {
    title: '',
    content: '',
  }
  ]

  ngOnInit() {
    this.form = this.fb.group({
      title :['', Validators.required],
      content :['', Validators.required]
    })
  
  }

  onSubmit(){
    this.journals.push(this.form.value);
    console.log(this.journals)}}
    console.log('hey Im submitting')


