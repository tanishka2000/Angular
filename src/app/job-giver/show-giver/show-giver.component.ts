import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { JobGiverService } from 'src/app/shared/job-giver.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { JobGiver } from 'src/app/shared/job-giver.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-show-giver',
  templateUrl: './show-giver.component.html',
  styleUrls: ['./show-giver.component.css']
})

export class ShowGiverComponent implements OnInit {

  list: JobGiver[];
  constructor(private service: JobGiverService,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.myData();
  }

  arr : JobGiver[] = [];

    listData: MatTableDataSource<JobGiver>;
    //listData = new MatTableDataSource<Datatype>();
    displayedColumns : string[] = ['idd','title','fee'];
    //dataSource = new MatTableDataSource<Account>();


    //@ViewChild(MatSort, null) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

      myData(){


          this.service.getData().subscribe(actionArray => {
            console.log("actionArray:: ", actionArray)
            this.list = actionArray.map(item => {
              return {
                idd: item.payload.doc.id, ...item.payload.doc.data()
              } as JobGiver;
            })

            //this.listData = new MatTableDataSource();
            this.listData = new MatTableDataSource(this.list);
            console.log("this.list:: ", this.list)
            console.log("this.listData:: ", this.listData)
            this.listData.sort = this.sort;
            this.listData.paginator = this.paginator;
          })


      }

      applyFilter(filteValue: string){
        this.listData.filter = filteValue.trim().toLocaleLowerCase();
      }


}
