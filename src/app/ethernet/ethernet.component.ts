import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ethernet',
  templateUrl: './ethernet.component.html',
  styleUrls: ['./ethernet.component.css']
})
export class EthernetComponent implements OnInit {

  @Input() eth: Uint8Array;
  destination: any = 'Endereço físico de destino';
  source: any = 'Endereço físico de origem';
  type: any = 'Versão IP';
  ipContent: Uint8Array;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChange) {
    if (this.eth) {
      const destination = this.eth.slice(0, 6);
      console.log(destination);
      this.destination = 'Destino ';
      destination.forEach(element => {
        this.destination = this.destination.concat(element.toString(16) + ':');
      });
      const source = this.eth.slice(6, 12);
      this.source = 'Origem ';
      source.forEach(element => {
        this.source = this.source.concat(element.toString(16) + ':');
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
      console.log(this.destination);
    }
  }

}
