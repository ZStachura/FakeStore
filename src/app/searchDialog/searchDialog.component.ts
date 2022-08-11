import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchData } from '../searchData';
import { ApiService } from '../Api.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LoaderService } from '../Loader.service';

@UntilDestroy()

@Component({
  selector: 'app-searchDialog',
  templateUrl: './searchDialog.component.html',
  styleUrls: ['./searchDialog.component.css']
})
export class SearchDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public name: String, private api: ApiService, private loader:LoaderService) { }

  searchData: SearchData[]=[]

  ngOnInit(): void {
    this.loader.show()
    this.api.searchData(this.name).pipe(untilDestroyed(this)).subscribe(data=>{this.searchData=data,this.loader.hide()})
  }

}
