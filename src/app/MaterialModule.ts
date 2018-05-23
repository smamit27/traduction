import { NgModule } from "@angular/core";
import { MatButtonModule,
         MatFormFieldModule,
         MatInputModule,
         MatSelectModule,
         MatOptionModule,
         MatDatepickerModule,
         MatNativeDateModule,
        MatChipsModule,MatTableModule,MatToolbarModule}
         from '@angular/material';

@NgModule({
    imports :[  MatButtonModule,
                MatFormFieldModule,
                MatInputModule,
                MatSelectModule,
                MatOptionModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatChipsModule,
                MatTableModule,MatToolbarModule],
    exports : [ MatButtonModule,
                MatFormFieldModule,
                MatInputModule,
                MatSelectModule,
                MatOptionModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatChipsModule,MatTableModule, MatToolbarModule]

})

export class MaterialModule{

}