import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'

export class InfoDatabase {
    
    private user$: Observable<any> 

    constructor(private auth: AuthService) {this.preloadData()}

    private async preloadData() {
        this.user$ = await this.auth.user()
    }
    
    fetch() {
        return this.user$
    }

    save(data:any) {
        this.auth.saveUser(data)
        return data.uid
    }
}