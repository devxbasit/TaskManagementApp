import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { OverviewComponent } from './components/overview/overview.component';
import { StatsComponent } from './components/stats/stats.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

@NgModule({
  declarations: [DashboardComponent, CreateTaskComponent, OverviewComponent, StatsComponent, TaskDetailsComponent],
  imports: [CommonModule],
})
export class DashboardModule {}
