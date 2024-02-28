import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Input()
  public placeholder:string='';

  @Output()
  public onValue = new EventEmitter<string>();

  public emitValue(value:string):void{
    this.onValue.emit(value);
  }

}
