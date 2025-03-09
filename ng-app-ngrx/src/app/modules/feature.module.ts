import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MODULE_ROUTES } from './feature.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(MODULE_ROUTES)],
})
export class FeatureModule {}
