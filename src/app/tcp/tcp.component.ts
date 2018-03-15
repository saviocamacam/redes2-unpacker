import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tcp',
  templateUrl: './tcp.component.html',
  styleUrls: ['./tcp.component.css']
})
export class TcpComponent implements OnInit {

  @Input() tcp: Uint8Array;

  sourcePort: any;
  destinationPort: any;
  sequence: any;
  ackNumber: any;
  offset: any;
  flags: any;
  window: any;
  checksum: any;
  urgent: any;
  options: any;
  padding: any;
  data: any;

  urg: any;
  ack: any;
  psh: any;
  rst: any;
  syn: any;
  fin: any;

  maskurg: 0b00100000;
  maskack: 0b00010000;
  maskpsh: 0b00001000;
  maskrst: 0b00000100;
  masksyn: 0b00000010;
  maskfin: 0b00000001;

  constructor() {
    this.resetValues();
  }

  ngOnInit() {
  }

  resetValues() {
    this.sourcePort = 'Source port: ';
    this.destinationPort = 'Destination port: ';
    this.sequence = 'Sequence: ';
    this.ackNumber = 'Acknowledgement number: ';
    this.offset = 'Offset: ';
    this.flags = 'Flags: ';
    this.window = 'Window: ';
    this.checksum = 'Checksum: ';
    this.urgent = 'Urgent: ';
    this.options = 'Options: ';
    this.padding = 'Padding: ';
    this.data = 'Data: ';
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    this.resetValues();

    console.log(changes);
    console.log(this.tcp);

    if (this.tcp) {
      // sourcePort
      const sourcePort = this.tcp.slice(0, 2);
      console.log(sourcePort);
      let value = '';
      sourcePort.forEach(element => {
        value = value.concat(element.toString(16));
      });
      console.log(value);
      this.sourcePort = this.sourcePort.concat(parseInt(value, 16).toString());
      console.log(this.sourcePort);

      // destinationPort
      const destinationPort = this.tcp.slice(2, 4);
      console.log(destinationPort);
      value = '';
      destinationPort.forEach(element => {
        value = value.concat(element.toString(16));
      });
      console.log(value);
      this.destinationPort = this.destinationPort.concat(parseInt(value, 16).toString());
      console.log(this.destinationPort);
      // sequente number
      const sequence = this.tcp.slice(4, 8);
      console.log(sequence);
      value = '';
      sequence.forEach(element => {
        value = value.concat(element.toString(16));
      });
      console.log(value);
      this.sequence = this.sequence.concat(value);
      console.log(this.sequence);

      // acknowledgment number
      const ackNumber = this.tcp.slice(8, 12);
      console.log(ackNumber);
      value = '';
      ackNumber.forEach(element => {
        value = value.concat(element.toString(16));
      });
      console.log(value);
      this.ackNumber = this.ackNumber.concat(value);
      console.log(this.ackNumber);

      // header length
      this.offset = this.offset.concat(this.tcp.slice(12, 13).toString());

      // flags
      this.flags = this.flags.concat(this.tcp.slice(13, 14).toString());
      this.ack = this.tcp.slice(13, 14)[0] || this.maskack;

      // window
      const window = this.tcp.slice(14, 16);
      console.log(window);
      value = '';
      window.forEach(element => {
        value = value.concat(element.toString(16));
      });
      console.log(value);
      this.window = this.window.concat(value);
      console.log(this.window);

      // checksum
      const checksum = this.tcp.slice(16, 18);
      console.log(checksum);
      value = '';
      checksum.forEach(element => {
        value = value.concat(element.toString(16));
      });
      console.log(value);
      this.checksum = this.checksum.concat(value);
      console.log(this.checksum);

      // urgent
      const urgent = this.tcp.slice(18, 20);
      console.log(urgent);
      value = '';
      urgent.forEach(element => {
        value = value.concat(element.toString(16));
      });
      console.log(value);
      this.urgent = this.urgent.concat(value);
      console.log(this.urgent);

      // options
      const options = this.tcp.slice(20, 32);
      console.log(options);
      value = '';
      options.forEach(element => {
        value = value.concat(element.toString(16));
      });
      console.log(value);
      this.options = this.options.concat(value);
      console.log(this.options);

    }
  }

}
