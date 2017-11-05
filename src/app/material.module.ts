import { NgModule } from '@angular/core';
import {MatButtonModule,
        MatCheckboxModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatGridListModule,
        MatToolbarModule} from '@angular/material';

const matModules = [MatButtonModule,
                    MatCheckboxModule,
                    MatListModule,
                    MatIconModule,
                    MatCardModule,
                    MatInputModule,
                    MatGridListModule,
                    MatToolbarModule
                  ];

@NgModule({
  imports: [...matModules],
  exports: [...matModules]
})
export class MyCustomMaterialModule { }
