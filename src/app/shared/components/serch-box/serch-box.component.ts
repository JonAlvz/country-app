import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-serch-box',
  templateUrl: './serch-box.component.html',
  styles: ``,
})
export class SerchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
}
