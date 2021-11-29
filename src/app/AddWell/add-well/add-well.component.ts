import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-add-well',
  templateUrl: './add-well.component.html',
  styleUrls: ['./add-well.component.css'],
})
export class AddWellComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() sourceRef;
  @Input() index1;
  @Output() wellForm = new EventEmitter();

  constructor() {}

  ngOnChanges() {
    setTimeout(() => {
      const elementTwo = this.sourceRef.filter(
        (element1, index) => index == this.index1
      );
      this.source = elementTwo[0].nativeElement.innerHTML;
    }, 1000);
  }
  ngOnInit(): void {}
  ngAfterViewInit() {
    const elementTwo = this.sourceRef.filter(
      (element1, index) => index == this.index1
    );
    this.source = elementTwo[0].nativeElement.innerHTML;
  }
  source: string;
  inValid: boolean = false;
  onSubmit(form) {
    console.log("len ",form.value.type.length,form.value.type.length)
    if (form.value.type.length > 0 && form.value.name.length > 0) {

      form = {
        name: form.value.name,
        source: this.source,
        type: form.value.type,
      };
      this.inValid = false;
      this.wellForm.emit(form);
    }
    else{
      alert('Please fill the form to submit');
      this.inValid = true;
    }
  }
}
