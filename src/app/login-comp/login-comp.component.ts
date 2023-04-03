import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit{

  constructor(private route: ActivatedRoute){
    this.route.params.subscribe(res => console.log(res['id']));
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
