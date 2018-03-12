import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-udp',
  templateUrl: './udp.component.html',
  styleUrls: ['./udp.component.css']
})
export class UdpComponent implements OnInit {

  @Input() udp: Uint8Array;

  sourcePort = 'sourcePort';
  destinationPort = 'destinationPort';
  length = 'length';
  checksum = 'checksum';
  data = 'data';

  constructor() { }

  ngOnInit() {
  }

}
