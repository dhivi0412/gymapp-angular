import { element } from 'protractor';
import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularbootstrap';
  ngOnInit() {
               //Toggle Click Function
   $("#menu-toggle").click(function( e ) {
     e.preventDefault();
     $("#wrapper").toggleClass("toggled");
   });
 }
}
