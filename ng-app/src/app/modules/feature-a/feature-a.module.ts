import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FEATURE_A_ROUTES } from './feature-a.routes';
import { SampleService } from './services/sample.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(FEATURE_A_ROUTES)],
  providers: [SampleService],
})
export class FeatureAModule {}
