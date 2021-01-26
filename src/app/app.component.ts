import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'angular-to-do-list';
    desc;
    data : any = [];

    constructor() {
        this.getTask();
    }

    getTask() {
        let dataLocal = localStorage.getItem("localStorage");
        if (dataLocal !== null){
            this.data = JSON.parse(localStorage.getItem("localStorage"));
        } else {
            this.data['item'] = [];
        }
    }

    saveTask() {
        this.data['item'].unshift({
            id : Math.floor((Math.random() * 1000) + 1),
            description : this.desc,
            status : 0
        });
        localStorage.clear();
        localStorage.setItem("localStorage",JSON.stringify({item:this.data['item']}));
        this.reset();
    }

    doneTask(id) {
        for (var i in this.data['item']) {
            if (this.data['item'][i].id == id) {
               this.data['item'][i].status = 1;
               break;
            }
        }
        localStorage.clear();
        localStorage.setItem("localStorage",JSON.stringify({item:this.data['item']}));
    }

    reset() {
        this.desc = '';
        this.getTask();
    }
}
