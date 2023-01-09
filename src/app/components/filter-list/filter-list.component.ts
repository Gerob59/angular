import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss'],
})
export class FilterListComponent {
  list: string[] = [
    'All',
    'Active',
    'Completed',
    'In Progress',
    'On Hold',
    'Planned',
    'Queued',
    'Scheduled',
    'Waiting',
  ];
}
