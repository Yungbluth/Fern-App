import { Component } from '@angular/core';
import { Storage } from "@ionic/storage";

const pageNum = 11;

@Component({
  selector: 'app-page11',
  templateUrl: './page11.page.html',
  styleUrls: ['./page11.page.scss'],
})
export class Page11Page {

  constructor(public storage: Storage) {
  }

  //init and create storage if necessary
  async init() {
   const storage = await this.storage.create();
   this.storage = storage;
   if (!await this.storage.get("legend" + pageNum)) {
     this.storage.set("legend" + pageNum, []);
  }
 }
 

 ionViewWillEnter() {
   this.init();
 }

 //Populates the html page with the legend from storage
 async populate() {
   await this.storage.get("legend" + pageNum).then(legendList => {
     for (let curLegend in legendList) {
       //loop through every legend object
       //add necessary functionality such as the text, the color, and what happens when clicked
       let col = document.createElement("ion-col");
       let nodeText = document.createTextNode(legendList[curLegend].text);
       col.appendChild(nodeText);
       col.id = curLegend;
       if (legendList[curLegend].color == "white") {
         col.style.color = "white";
       } else {
         col.style.color = "red";
       }
       let curStorage = this.storage;

       //called when legend object is clicked, change between red and white
       col.onclick = function () {
         changeColor();
       };
       function changeColor() {
         if (col.style.color == "white"){
           col.style.color = "red";
           let list = legendList;
           list[curLegend].color = "red";
           curStorage.set("legend" + pageNum, list);
         } else {
           col.style.color = "white";
           let list = legendList;
           list[curLegend].color = "white";
           curStorage.set("legend" + pageNum, list);
         }
       }

       //called when legend object is double clicked, prompt to delete it
       col.ondblclick = function () {
         deleteLegend();
       }
       function deleteLegend() {
         const alert = document.createElement("ion-alert");
         alert.cssClass = "legendDeleteClass";
         alert.header = "Are you sure you want to delete " + legendList[curLegend].text + "?";
         alert.buttons = [
           {
             text: "Cancel",
             role: "cancel",
             cssClass: "secondary",
             handler: () => {
               console.log("Confirm Cancel")
             }
           }, {
             text: "Ok",
             handler: () => {
               console.log("Confirm Ok")
               updateLegend(curLegend);
             }
           }
         ];
       
         document.body.appendChild(alert);
         return alert.present();
       }

       //called after a number is deleted, just some housekeeping to keep each legend in order
       function updateLegend(i) {
         curStorage.get("legend" + pageNum).then(legendList => {
           let curList = legendList;
           curList.splice(i, 1);
           for (let element in curList) {
             curList[element].num = element;
           }
           curStorage.set("legend" + pageNum, curList);
           window.location.reload();
         });
       }

     document.getElementById("legRow0").append(col);
     }
   });
 }

 //Adds all the legends from memory
 ionViewDidEnter(){
   this.populate();
 }
 

 async addToLegend(locData) {
   await this.storage.get("legend" + pageNum).then(i => {
     let length = i.length;
     let col = document.createElement("ion-col");
     let text = document.createTextNode(locData.Loc);
     col.appendChild(text);
     col.id = "legCol" + length;
     col.style.color = "white";
     i.push({num: length, color: "white", text: locData.Loc});
     this.saveData(i);
     let curStorage = this.storage;

     //called when legend object is clicked, change between red and white
     col.onclick = function () {
       changeColor();
     };
     function changeColor() {
       if (col.style.color == "white"){
         col.style.color = "red";
         let list = i;
         list[length].color = "red";
         curStorage.set("legend" + pageNum, list);
       } else {
         col.style.color = "white";
         let list = i;
         list[length].color = "white";
         curStorage.set("legend" + pageNum, list);
       }
     }
     
     //called when legend object is double clicked, prompt to delete it
     col.ondblclick = function () {
       deleteLegend();
     }
     function deleteLegend() {
       const alert = document.createElement("ion-alert");
       alert.cssClass = "legendDeleteClass";
       alert.header = "Are you sure you want to delete " + locData.Loc + "?";
       alert.buttons = [
         {
           text: "Cancel",
           role: "cancel",
           cssClass: "secondary",
           handler: () => {
             console.log("Confirm Cancel")
           }
         }, {
           text: "Ok",
           handler: () => {
             console.log("Confirm Ok")
             updateLegend(length);
           }
         }
       ];
     
       document.body.appendChild(alert);
       return alert.present();
     }

     //called after a number is deleted, just some housekeeping to keep each legend in order
     function updateLegend(i) {
       curStorage.get("legend" + pageNum).then(legendList => {
         let curList = legendList;
         curList.splice(i, 1);
         curStorage.set("legend" + pageNum, curList);
         for (let element in curList) {
           curList[element].num = element;
         }
         window.location.reload();
       });
     }
     document.getElementById("legRow0").append(col);
   });
 }

 //helper function to save data
 async saveData(i) {
   await this.storage.set("legend" + pageNum, i);
 }

 //Prompts for information when attempting to add a new legend
 legendAdd() {
   const alert = document.createElement("ion-alert");
   alert.cssClass = "legendAddClass";
   alert.header = "Add to legend";
   alert.inputs = [
     {
       name: "Loc",
       placeholder: "Location"
     }];
     alert.buttons = [
       {
         text: "Cancel",
         role: "cancel",
         cssClass: "secondary",
         handler: () => {
           console.log("Confirm Cancel")
         }
       }, {
         text: "Ok",
         handler: (locData) => {
           console.log("Confirm Ok")
           this.addToLegend(locData);
           window.location.reload();
         }
       }
     ];
     document.body.appendChild(alert);
     return alert.present();
 }
}
