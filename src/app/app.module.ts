import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ReposComponent } from './repos/repos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatuiModule } from './appModule/matui/matui.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './myServices/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ReposComponent,
    PagenotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatuiModule,
    HttpClientModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
