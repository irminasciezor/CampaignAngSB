import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Campaign} from "./campaign";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CampaignServiceService {

  private readonly campaignUrl: string;

  constructor(private http: HttpClient) {
    this.campaignUrl = 'http://localhost:8080/campaign';
  }

  public save(campaign: Campaign) {
    this.http.post<Campaign>(this.campaignUrl, campaign);
  }

  public addCampaignx(campaign: Campaign): Observable<Campaign>{
    return this.http.post<Campaign>(this.campaignUrl, campaign);
  }

  getCampaign(): Observable<Campaign[]> {
    var reqHeader = new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Content-Type': 'application/json',
    });
    return this.http.get<Campaign[]>(this.campaignUrl, {headers:reqHeader}).pipe(
      map(response => response)
    )
  }
}
