import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TododsComponent } from './todods/todods.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TododsComponent],
  exports: [TododsComponent]
})
export class UiModule {}
