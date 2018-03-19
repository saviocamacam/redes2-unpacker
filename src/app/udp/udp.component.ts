import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-udp',
  templateUrl: './udp.component.html',
  styleUrls: ['./udp.component.css']
})
export class UdpComponent implements OnInit {

  @Input() udp: Uint8Array;

  sourcePort: any;
  destinationPort: any;
  length: any;
  checksum: any;
  data: any;

  constructor() {
    this.resetValues();
  }

  ngOnInit() {
  }

  resetValues() {
    this.sourcePort = 'Source port: ';
    this.destinationPort = 'Destination port: ';
    this.length = 'Length: ';
    this.checksum = 'Checksum: ';
    this.data = 'Data: ';
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    this.resetValues();
    if (this.udp) {
      // sourcePort
      const sourcePort = this.udp.slice(0, 2);
      // console.log(sourcePort);
      let value = '';
      sourcePort.forEach(element => {
        value = value.concat(element.toString(16));
      });
      // console.log(value);
      this.sourcePort = this.sourcePort.concat(parseInt(value, 16).toString());
      // console.log(this.sourcePort);

      // destinationPort
      const destinationPort = this.udp.slice(2, 4);
      // console.log(destinationPort);
      value = '';
      destinationPort.forEach(element => {
        value = value.concat(element.toString(16));
      });
      // console.log(value);
      this.destinationPort = this.destinationPort.concat(parseInt(value, 16).toString());
      // console.log(this.destinationPort);

      // length
      const length = this.udp.slice(4, 6);
      // console.log(length);
      value = '';
      length.forEach(element => {
        value = value.concat(element.toString(16));
      });
      // console.log(value);
      this.length = this.length.concat(parseInt(value, 16).toString());
      // console.log(this.length);

      // checksum
      const checksum = this.udp.slice(6, 8);
      // console.log(checksum);
      value = '';
      checksum.forEach(element => {
        value = value.concat(element.toString(16).toUpperCase());
      });
      // console.log(value);
      this.checksum = this.checksum.concat(value);
      // console.log(this.checksum);

      // data
      const data = this.udp.slice(8, this.udp.length);
      // console.log(data);
      value = '';
      data.forEach(element => {
        value = value.concat(String.fromCharCode(element));
      });
      // console.log(value);
      this.data = this.data.concat(value);
      // console.log(this.data);
    }
  }

}
