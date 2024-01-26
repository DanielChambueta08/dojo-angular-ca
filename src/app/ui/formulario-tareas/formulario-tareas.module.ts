import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TareaUsecase } from "src/app/domain/usecases/tarea/tarea.usecase";
import { TareaGateway } from "src/app/domain/models/tarea/tarea.gateway";
import { HttpClientAdapter } from "src/app/infrastructure/adapters/httpclient-adapter/httpclient.adapter";
import { FormularioTareasRoutingModule } from "./formulario-tareas-routing.module";
import { BcCardModule } from "@bancolombia/design-system-web/bc-card";
import { FormularioTareasComponent } from "./pages/formulario-tareas.component";
import { FormularioTareasSandbox } from "./formulario-tareas.sandbox";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormularioTareasRoutingModule,
    BcCardModule,
    FormsModule
  ],
  declarations: [FormularioTareasComponent],
  providers: [
    FormularioTareasSandbox,
    TareaUsecase,
    { provide: TareaGateway, useClass: HttpClientAdapter }
  ]
})
export class FormularioTareasModule { }
