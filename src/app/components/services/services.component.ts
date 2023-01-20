import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  loading: boolean = false;
  services: any[] = [];

  constructor(private _serviceService: ServicesService) { }

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

}
