import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';
import { TcpComponent } from './tcp/tcp.component';
import { UdpComponent } from './udp/udp.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EthernetComponent } from './ethernet/ethernet.component';
import { IpComponent } from './ip/ip.component';


@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    TcpComponent,
    UdpComponent,
    HeaderComponent,
    FooterComponent,
    EthernetComponent,
    IpComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
