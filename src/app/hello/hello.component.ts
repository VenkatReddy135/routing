import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  public courses=[{id:1,name:"angular"},{id:2,name:"html"},{id:3,name:"css"}]
  

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onSelect(course){
    this.route.navigate(['/hello',course.id]);


  }
 

}
