import { FormsModule } from '@angular/forms';
import { FileSelectDirective, FileDropDirective, FileUploadModule } from 'ng2-file-upload';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TelaComponent } from './tela/tela.component';
import { FileUploaderComponent } from './componentes/file-uploader/file-uploader.component';

/**
 * @author Caio Goulart Boni
 */
@NgModule({
  declarations: [
    AppComponent,
    TelaComponent,
    FileUploaderComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: TelaComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
