import { Component, computed, inject, Inject, OnInit, signal } from '@angular/core';
import { MainService } from '../service/main.service';
import { CurrentArts } from '../model/CurrentArtcs';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  title=signal("Article Viewer")
  num=signal(0)
  Current_Status=computed(()=>`Total number of articles today ${this.num()}`)
  private mainService:MainService;
  constructor(){
    this.mainService=inject(MainService)
  }
  ngOnInit(): void {
    
    this.mainService.getCurrentArticles().subscribe((current:CurrentArts)=>{
      this.num.set(current.curr)
    });
  }
  
}
