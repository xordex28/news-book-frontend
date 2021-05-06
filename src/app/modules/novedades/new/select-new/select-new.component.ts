import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmDialogService } from "app/componentes/confirm-dialog/confirm-dialog.service";
import { TypeNew } from "app/interfaces";
import { TypeNewService } from "app/services/type-new.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-select-new",
  templateUrl: "./select-new.component.html",
  styleUrls: ["./select-new.component.css"],
})
export class SelectNewComponent implements OnInit {
  typeNews: TypeNew[] = [];

  constructor(
    public typeNewService: TypeNewService,
    private router: Router,
    private dialogService: ConfirmDialogService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.typeNewService.list().subscribe(
      (typeNewsResponse: TypeNew[]) => {
        this.typeNews = [...typeNewsResponse];
      },
      (error: HttpErrorResponse) => {
        this.toastr.error(
          error.error.message || "Error obteniendo los Tipos de Novedades."
        );
      }
    );
  }
}
