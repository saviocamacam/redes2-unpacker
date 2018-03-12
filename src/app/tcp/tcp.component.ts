import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tcp',
  templateUrl: './tcp.component.html',
  styleUrls: ['./tcp.component.css']
})
export class TcpComponent implements OnInit {

  @Input() tcp: Uint8Array;

  sourcePort = 'sourcePort';
  destinationPort = 'destinationPort';
  sequence = 'sequence';
  ackNumber = 'ackNumber';
  offset = 'offset';
  flags = 'flags';
  window = 'window';
  checksum = 'checksum';
  urgent = 'urgent';
  options = 'options';
  padding = 'padding';
  data = 'data';

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
    this.flags = 'flags';
    this.window = 'window';
    this.checksum = 'checksum';
    this.urgent = 'urgent';
    this.options = 'options';
    this.padding = 'padding';
    this.data = 'data';
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

    }
  }

}
