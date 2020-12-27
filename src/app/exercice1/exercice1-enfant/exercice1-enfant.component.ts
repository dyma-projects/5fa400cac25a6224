import { Component, Input, OnInit, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() ct: number;
  @Output() ctEvent: EventEmitter<number> = new EventEmitter<number>();

  Increment(): void {
    console.log("increment ", this.ct);
    this.ct++;
    this.ctEvent.emit(this.ct);
  }

  Decrement(): void {
    console.log("increment ", this.ct);
    this.ct--;
    this.ctEvent.emit(this.ct);
  }

  constructor() {}

  ngOnInit() {}
}
