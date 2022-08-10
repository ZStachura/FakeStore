import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryData } from '../CategoryData';
import { ApiService } from '../Api.service';
import { UntilDestroy, untilDestroyed} from '@ngneat/until-destroy'

@UntilDestroy()

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public name: String, private api:ApiService) {}

  categoriesData: CategoryData[]=[];

  ngOnInit(): void {
    this.api.getData(this.name).pipe(untilDestroyed(this)).subscribe(categoriesData=>{this.categoriesData=categoriesData})
  }
  

}
