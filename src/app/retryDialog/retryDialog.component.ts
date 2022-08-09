import { Component, OnInit } from '@angular/core';
import { IfRetryService } from '../ifRetry.service';

@Component({
  selector: 'app-retryDialog',
  templateUrl: './retryDialog.component.html',
  styleUrls: ['./retryDialog.component.css']
})
export class RetryDialogComponent {

  constructor(private service: IfRetryService){}

  retry()
  {
    this.service.storeRetry(true);
  }
}
