import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { HomeComponent } from "../home/home/home.component"
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { RouterModule, Routes } from "@angular/router"
import { SharedModule } from "../shared/shared.module"
import { UserloginService } from "./service/userlogin.service"



const routes: Routes = [
    // { path:'',component:HomeComponent}, 
]

@NgModule({
    declarations:[
        // HomeComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    providers:[
        UserloginService,
    ],
})

export class CoreModule { }
