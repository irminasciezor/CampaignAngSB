import {Component, OnInit} from '@angular/core';
import {CampaignServiceService} from "./campaign-service.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Campaign} from "./campaign";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';

  // @ts-ignore
  campaign: Campaign[] = [];

  // @ts-ignore
  campaignSave: Campaign = new Campaign();

  constructor(
    private service: CampaignServiceService,
  ) {
  }

  // public addCampaign(addCampaign: NgForm): void{
  //   this.service.addCampaign(addCampaign.value);
  // }

   public addCampaignx(addCampaign: NgForm) {
     // this.service.addCampaignx(addCampaign.value.subscribe);
     this.service.addCampaignx(addCampaign.value).subscribe(
       (response: Campaign) => {
         alert(response.name)
       },
       (error: HttpErrorResponse)=>{
         alert(error.message);
       }
     )
  }

  townList: any = ['Cracow', 'New York', 'Amsterdam']

    form = new FormGroup({
      town: new FormControl('', Validators.required)
    });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }

  ngOnInit(): void {
    // this.listCampaign();
  }

  listCampaign() {
    this.service.getCampaign().subscribe(
      data => this.campaign = data
    )
  }

}
