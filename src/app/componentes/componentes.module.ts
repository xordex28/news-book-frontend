import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { MatTableModule } from '@angular/material/table';
import { CardHeaderComponent } from "app/componentes/card-header/card-header.component";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CdkTableModule } from '@angular/cdk/table';
import { GenericTableComponent } from 'app/componentes/generic-table/generic-table.component';
import { GenericTableComponentf } from 'app/componentes/tablefree/generic-table.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableResponsiveDirective } from 'app/componentes/mat-table-responsive/mat-table-responsive.directive';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from './confirm-dialog/confirm-dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { PermisoDirective } from './permiso.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NewContainerComponent } from './new-container/new-container.component';
import { ValidateOesvicaTokenComponent } from './validate-oesvica-token/validate-oesvica-token.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { InfoButtonComponent } from './info-button/info-button.component';
export const entryComponentes = [
  ConfirmDialogComponent,
  ValidateOesvicaTokenComponent,
  InfoDialogComponent,
];

@NgModule({
  declarations: [
    CardHeaderComponent,
    GenericTableComponent,
    GenericTableComponentf,
    MatTableResponsiveDirective,
    ConfirmDialogComponent,
    PermisoDirective,
    NewContainerComponent,
    ValidateOesvicaTokenComponent,
    InfoDialogComponent,
    InfoButtonComponent,
  ],
  exports: [
    GenericTableComponent,
    CardHeaderComponent,
    NewContainerComponent,
    MatTableResponsiveDirective,
    ConfirmDialogComponent,
    PermisoDirective,
    ValidateOesvicaTokenComponent,
    InfoButtonComponent,
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CdkTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatGridListModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: entryComponentes,
  providers: [ConfirmDialogService]
})
export class ComponentesModule {
}
