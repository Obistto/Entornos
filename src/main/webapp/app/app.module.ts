import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ProyectoEntornosSharedModule } from 'app/shared/shared.module';
import { ProyectoEntornosCoreModule } from 'app/core/core.module';
import { ProyectoEntornosAppRoutingModule } from './app-routing.module';
import { ProyectoEntornosHomeModule } from './home/home.module';
import { ProyectoEntornosEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ProyectoEntornosSharedModule,
    ProyectoEntornosCoreModule,
    ProyectoEntornosHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ProyectoEntornosEntityModule,
    ProyectoEntornosAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ProyectoEntornosAppModule {}
