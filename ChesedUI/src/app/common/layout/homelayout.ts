import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/securityService';

@Component({
  selector: 'app-home-layout',
  templateUrl: './homeLayout.html',
  styleUrls: ['./homelayout.component.css']
})
export class HomeLayoutComponent {
	maxChars = 200;
	role = '';
	chars = 0;
	public year:number=new Date().getFullYear();
	public user:any={'FullName':''};
	
	
	constructor(private _authService: SecurityService,private _router: Router){
		// if (localStorage.getItem("User") === null  || localStorage.getItem("User") === 'null' || !localStorage.hasOwnProperty('User')) {
		// 	this.user={'FullName':''};
		// }else{
		// 	this.user=JSON.parse(localStorage.getItem("User")||"");
		// }
	}
	// toggole menu
	isMenuOpen = false;
	toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;
	}

	public logout = () => {
		this._authService.logout();
		this._router.navigate(["/login"]);
	  }
 }


