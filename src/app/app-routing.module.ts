import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicformComponent } from './basicform/basicform.component';
import { FormMainComponent } from './form-main/form-main.component';

const routes: Routes = [
    { path: '', redirectTo: 'mainform', pathMatch: 'full'},
    { path: 'basicform', component: BasicformComponent },
    { path: 'mainform', component: FormMainComponent }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routedComponents = [
    BasicformComponent,
    FormMainComponent
];
