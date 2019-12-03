import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MzButtonModule, MzInputModule,MzModalModule } from 'ng2-materialize';
import { MzSidenavModule } from 'ng2-materialize'

@NgModule({
  imports: [
    CommonModule,
    MzButtonModule,
    MzInputModule,
    MzModalModule
  ],
  declarations: [  ],
})
export class MaterializeModule { }
