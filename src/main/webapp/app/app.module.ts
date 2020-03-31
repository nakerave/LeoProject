import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { LeoProjectSharedModule } from 'app/shared/shared.module';
import { LeoProjectCoreModule } from 'app/core/core.module';
import { LeoProjectAppRoutingModule } from './app-routing.module';
import { LeoProjectHomeModule } from './home/home.module';
import { LeoProjectEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    LeoProjectSharedModule,
    LeoProjectCoreModule,
    LeoProjectHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    LeoProjectEntityModule,
    LeoProjectAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class LeoProjectAppModule {}
