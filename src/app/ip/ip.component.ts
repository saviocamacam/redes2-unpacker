import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent implements OnInit {

  @Input() ip: Uint8Array;


  version: any;
  ihl: any;
  diff: any;
  tLength: any;
  identification: any;
  flags: any;
  fOffset: any;
  ttl: any;
  protocol: any;
  hChecksum: any;
  source: any;
  destination: any;
  options: any;
  padding: any;

  flagDF: any;
  flagMF: any;
  dfMask = 0b01000000;
  mfMask = 0b00100000;

  datagramContent: Uint8Array;

  constructor() {
    this.resetValues();
   }

  ngOnInit() {
  }

  resetValues() {
    this.version = 'Versão IP: ';
    this.ihl = 'IHL: ';
    this.diff = 'Differencieted services: ';
    this.tLength = 'Total Length: ';
    this.identification = 'Identification: ';
    this.flags = 'Flags: ';
    this.fOffset = 'Fragment offset: ';
    this.ttl = 'TTL: ';
    this.protocol = 'Protocolo: ';
    this.hChecksum = 'Header checksum: ';
    this.source = 'Source: ';
    this.destination = 'Destination: ';
    this.options = 'Options: ';
    this.padding = 'Padding: ';
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    this.resetValues();

    // console.log(changes);
    if (this.ip) {
      // version
      const oct = this.ip.slice(0)[0].toString(16);
      this.version = this.version.concat(oct.substr(0, 1));
      // ihl
      const ihl = oct.substr(1, 1);
      this.ihl = this.ihl.concat((parseInt(ihl, 10) * 32) / 8);
      // diff
      this.diff = this.diff.concat(this.ip.slice(1, 2));
      // tLength
      const tLength = this.ip.slice(2, 4);
      let value = '';
      tLength.forEach(element => {
        value = value.concat(element.toString(16));
      });
      this.tLength = this.tLength.concat(parseInt(value, 16));
      // identification
      const identification = this.ip.slice(4, 6);
      value = '';
      identification.forEach(element => {
        value = value.concat(element.toString(16));
      });
      this.identification = this.identification.concat(parseInt(value, 16).toString());
      // flags
      const flags = this.ip.slice(6, 8);
      value = '';
      flags.forEach(element => {
        value = value.concat(element.toString(16).toUpperCase());
      });
      this.flags = this.flags.concat(value);

      // tslint:disable-next-line:no-bitwise
      this.flagDF = this.ip.slice(6, 7)[0] & this.dfMask;
      // tslint:disable-next-line:no-bitwise
      this.flagMF = this.ip.slice(6, 7)[0] & this.mfMask;
      // console.log(this.flags);
      // ttl
      const ttl = this.ip.slice(8, 9)[0].toString(16);
      // console.log(ttl);
      this.ttl = this.ttl.concat(parseInt(ttl, 16).toString());
      // protocol
      let protocol = this.ip.slice(9, 10)[0].toString();
      if (protocol === '6') {
        protocol = protocol.concat(' TCP');
      } else if (protocol === '17') {
        protocol = protocol.concat(' UDP');
      }
      this.protocol = this.protocol.concat(protocol);
      // checksum
      const checksum = this.ip.slice(10, 12);
      value = '';
      checksum.forEach(element => {
        value = value.concat(element.toString(16).toUpperCase());
      });
      this.hChecksum = this.hChecksum.concat(value);
      // Source IP
      const source = this.ip.slice(12, 16);
      // console.log(source);
      value = '';
      source.forEach(element => {
        value = value.concat(element.toString() + '.');
      });
      this.source = this.source.concat(value);
      // Destination IP
      const destination = this.ip.slice(16, 20);
      // console.log(source);
      value = '';
      destination.forEach(element => {
        value = value.concat(element.toString() + '.');
      });
      this.destination = this.destination.concat(value);
      // console.log(this.ip);
      this.datagramContent = this.ip.slice(20, this.ip.length);
    }
  }

}
