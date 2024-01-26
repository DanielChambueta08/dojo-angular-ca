import { Observable } from "rxjs";
import { InfoSessionModel } from "@bancolombia/ngx-azure-session-manager";
import { HttpResponse } from "@angular/common/http";

export abstract class AuthenticationGateway {
  abstract initialize(): Observable<InfoSessionModel>;
  abstract logIn(): Observable<InfoSessionModel>;
  abstract logOut(): Observable<InfoSessionModel>;
  abstract resolveAccount(): Observable<InfoSessionModel>;
  abstract loggedIn(): boolean;
  abstract heartBeat(): Observable<Object>;
  abstract revoke(): Observable<HttpResponse<any>>;
  abstract removeLocal(): void;
  abstract destroy(): void;
}
