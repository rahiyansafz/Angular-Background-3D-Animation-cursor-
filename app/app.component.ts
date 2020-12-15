import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myStyle: object = {};
  myParams: object = {};

  ngOnInit() {
    this.myStyle = {
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 200
        },
        color: {
          value: "#ff0000"
        },
        shape: {
          type: "triangle"
        }
      }
    };
  }
}
