import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TareaUsecase } from "src/app/domain/usecases/tarea/tarea.usecase";
import { TareasListSandbox } from "./tareas-list.sandbox";
import { TareaGateway } from "src/app/domain/models/tarea/tarea.gateway";
import { HttpClientAdapter } from "src/app/infrastructure/adapters/httpclient-adapter/httpclient.adapter";
import { TareasListComponent } from "./pages/tareas-list.component";
import { TareasListRoutingModule } from "./tareas-list-routing.module";
import { BcCardModule } from "@bancolombia/design-system-web/bc-card";

@NgModule({
  imports: [
    CommonModule,
    TareasListRoutingModule,
    BcCardModule
  ],
  declarations: [TareasListComponent],
  providers: [
    TareasListSandbox,
    TareaUsecase,
    { provide: TareaGateway, useClass: HttpClientAdapter }
  ]
})
export class TareasListModule { }
