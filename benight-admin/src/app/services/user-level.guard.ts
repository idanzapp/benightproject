import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { AuthService } from '@bn8-services/auth.service'
@Injectable({
  providedIn: 'root'
})
export class UserLevelGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
    ) { }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Promise<boolean>  {
    //Comprueba si esta logeado
    const uid = await this.auth.uid()
    const isLoggedIn = !!uid 

    if (!isLoggedIn) {
      this.router.navigate(['login'])  //redirect to login
    }         
    //Comprueba si tiene permiso
    const roles = next.data["roles"] as Array<string>
    let hasPermission = true //If roles is not created, you has permission
    if (roles) {
      const permission = await this.auth.permission()    
      hasPermission= roles.filter(p => (permission.includes(p))).length>0

      if (!hasPermission) {
        this.router.navigate(['/']) //redirect to main page
      }
    }    
    return isLoggedIn && hasPermission
  }
}