import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ethernet',
  templateUrl: './ethernet.component.html',
  styleUrls: ['./ethernet.component.css']
})
export class EthernetComponent implements OnInit {

  @Input() eth: Uint8Array;
  destination: any;
  source: any;
  type: any;
  ipContent: Uint8Array;

  constructor() {
    this.resetValues();
  }

  ngOnInit() {
  }

  resetValues() {
    this.destination = 'Endereço físico de destino';
    this.source = 'Endereço físico de origem';
    this.type = 'Versão IP';
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChange) {
    this.resetValues();
    if (this.eth) {
      const destination = this.eth.slice(0, 6);
      // console.log(destination);
      this.destination = 'Destino ';
      destination.forEach(element => {
        this.destination = this.destination.concat(element.toString(16).toUpperCase() + ':');
      });
      const source = this.eth.slice(6, 12);
      this.source = 'Origem ';
      source.forEach(element => {
        this.source = this.source.concat(element.toString(16).toUpperCase() + ':');
      });

      const type = this.eth.slice(12, 14);
      this.type = this.type.concat(': 0x');
      let value = '';
      type.forEach(element => {
        this.type = this.type.concat(element.toString(16));
        value = value.concat(element.toString(16));
      });
      if (value === '80') {
        this.type = this.type.concat(' IPv4');
      }
      this.ipContent = this.eth.slice(14, this.eth.length);
      // console.log(this.destination);
    }
  }

}
