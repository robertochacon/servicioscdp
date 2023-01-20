import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  loading: boolean = false;
  services: any[] = [];
  action: string = 'list';
  serviceSelected: any;
  serviceContent!: SafeResourceUrl;
  searchItem: any = '';

  constructor(private _serviceService: ServicesService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.getAllCategories();
    }, 1000);
  }

  getAllCategories(){  
    this._serviceService.getAllServices().subscribe((response)=>{
      this.services = response;
      console.log(response);
    }, error=>{
        this.services = []
    })
  }

  detailsService(param: any){
    console.log(param);
    this.action = 'details';
    this.serviceSelected = param;
    this.serviceContent = this.sanitizer.bypassSecurityTrustResourceUrl(param.content);
  }

}
