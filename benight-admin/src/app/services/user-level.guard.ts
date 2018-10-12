import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthService } from './auth.service'
import { AlertController } from '@ionic/angular'
@Injectable({
  providedIn: 'root'
})
export class UserLevelGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private alertController: AlertController
    ) { }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Promise<boolean>  {
    //Comprueba si esta logeado
    const uid = await this.auth.uid()
    const isLoggedIn = !!uid 

    if (!isLoggedIn) {
      const alert = await this.alertController.create({
        header: 'Blocked',
        subHeader: 'Authentication required',
        message:'You require to Log in to use Benight',
        buttons: ['OK']
      })
      await alert.present() 
    }     
    
    //Comprueba si tiene permiso
    const roles = next.data["roles"] as Array<string>
    let hasPermission = true //If roles is not created, you has permission
    if (roles) {
      const permission = await this.auth.permission()    
      hasPermission= roles.filter(p => (permission.includes(p))).length>0

      if (!hasPermission) {
        const alert = await this.alertController.create({
          header: 'Blocked',
          subHeader: 'Permission required',
          message:'You require to upgrade your permissions to reach this Page',
          buttons: ['OK']
        })
        await alert.present() 
      }
    }
    
    return isLoggedIn && hasPermission
  }
}
