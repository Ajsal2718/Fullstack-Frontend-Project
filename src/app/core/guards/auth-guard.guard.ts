import { CanActivateFn,Router } from '@angular/router';
import { inject } from "@angular/core";
import { UserloginService } from '../service/userlogin.service';


export const authGuard: CanActivateFn = () => {
  const serv = inject(UserloginService)
  const route = inject(Router);
  if(serv.issignupcart){
    return true;
  } else {
    alert('Not Authorized please signUp⚠️');
    route.navigate(["signup"]);
    return false;
  }
};
