import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-exercice2",
  templateUrl: "./exercice2.component.html",
  styleUrls: ["./exercice2.component.css"],
})
export class Exercice2Component implements OnInit {
  @ViewChild(Exercice2Component)
  private val: Exercice2Component;
  public inputValue: string;
  public valeur: string;

  onKey(): void {
    console.log("input value : ", this.inputValue);
    // setTimeout(() => this.val.);
  }
  constructor() {}

  ngOnInit() {
    this.inputValue = "ttt";
  }
}
