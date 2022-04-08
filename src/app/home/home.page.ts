import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ionViewDidEnter(){
    for (let i = 1; i <= 18; i++) {
      let fernTitle = "";
      switch(i){
        case 1: fernTitle = "Asplenium trichomanes";
        break;
        case 2: fernTitle = "Pteridium aquilinum";
        break;
        case 3: fernTitle = "Dryopteris filix-mas";
        break;
        case 4: fernTitle = "Astrolepis cochisensis";
        break;
        case 5: fernTitle = "Astrolepis sinuata";
        break;
        case 6: fernTitle = "Astrolepis integerrima";
        break;
        case 7: fernTitle = "Bommeria hispida";
        break;
        case 8: fernTitle = "Myriopteris aurea";
        break;
        case 9: fernTitle = "Myriopteris fendleri";
        break;
        case 10: fernTitle = "Myriopteris lindheimeri";
        break;
        case 11: fernTitle = "Myriopteris pringlei";
        break;
        case 12: fernTitle = "Myriopteris woontoni";
        break;
        case 13: fernTitle = "Myriopteris writghtii";
        break;
        case 14: fernTitle = "Notholaena lemmoni";
        break;
        case 15: fernTitle = "Notholaena standleyi";
        break;
        case 16: fernTitle = "Pelaea truncata";
        break;
        case 17: fernTitle = "Pellea wrightiana";
        break;
        case 18: fernTitle = "Pentagramma triangularis ssp. maxonii";
        break;
      }
      document.getElementById("card-title" + i).innerHTML = fernTitle;
    }
  }

  testFunc(num) {
    this.router.navigateByUrl('/page' + num);
  }
}
