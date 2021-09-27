import { Component, OnInit } from '@angular/core';
import { NotificationService } from './../../core/notification-service/notification-service';

@Component({
  selector: 'rps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public count = 0;
  constructor(private notify: NotificationService) {
    this.notify.counter.subscribe(updateCount => {
      updateCount ? this.count++ : this.count--;
    })
  }

  ngOnInit(): void {
  }

}
