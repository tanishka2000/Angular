import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule, MatIconModule, MatButtonModule,MatPaginatorModule} from '@angular/material';
import { AppComponent } from './app.component';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { JobGiverComponent } from './job-giver/job-giver.component';
import { EditGiverComponent } from './job-giver/edit-giver/edit-giver.component';
import { ShowGiverComponent } from './job-giver/show-giver/show-giver.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material';
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { JobGiverService } from './shared/job-giver.service';

@NgModule({
  declarations: [
    AppComponent,
    JobGiverComponent,
    EditGiverComponent,
    ShowGiverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule, 
    MatIconModule, 
    MatButtonModule,MatPaginatorModule,
    HttpClientModule,
    MatSortModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [JobGiverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
