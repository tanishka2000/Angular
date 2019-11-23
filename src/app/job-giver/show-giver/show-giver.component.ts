import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { JobGiverService } from 'src/app/services/job-giver.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Datatype } from 'src/app/datatype.model';
import { map } from 'rxjs/operators';
 

/*export interface PeriodicElement {
  DeptName: string;
  DeptID: number;
}*/



@Component({
  selector: 'app-show-giver',
  templateUrl: './show-giver.component.html',
  styleUrls: ['./show-giver.component.css']
})
export class ShowGiverComponent implements OnInit {
 
  //datas : Datatype[];
  //constructor(private firestore: AngularFirestore) { }
  //arr : Datatype[] = [];
  constructor(private jobservice: JobGiverService, private firestore: AngularFirestore) { }

  listData: MatTableDataSource<Datatype> = new MatTableDataSource([]) ;
  //listData = new MatTableDataSource<Datatype>();
  displayedColumns : string[] = ['idd','title','fee'];
  //dataSource = new MatTableDataSource<Account>();
 

  //@ViewChild(MatSort, null) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

 /* getData(){
    return this.firestore.collection('datas').snapshotChanges();
  }
  refreshDepList(){
    var dummyData = [
      {DeptID: 2, DeptName: 'work'},
      {DeptID: 20, DeptName: 'play'},
      {DeptID: 39, DeptName: 'study'},
      {DeptID: 22, DeptName: 'code'},
      {DeptID: 37, DeptName: 'cook'},
      {DeptID: 27, DeptName: 'hit'},
      {DeptID: 34, DeptName: 'drive'},
      {DeptID: 28, DeptName: 'swim'},
      {DeptID: 30, DeptName: 'sleep'},
      {DeptID: 266, DeptName: 'eat'},

      //this.service.getDepList().subscribe(data =>{
        //this.listData = new MatTableDataSource(data)
        //this.listData.sort = new MatSort();
      //}); 
    ]
    this.listData = new MatTableDataSource(dummyData);
    }*/

    myData(){
      this.jobservice.getData().subscribe(change => {
        return change.map(a => {
         //const data = a.payload.doc.data() as Datatype;
         return {
           idd: a.payload.doc.id, ...a.payload.doc.data()
         }         
         })
     });
      
     //this.listData = new MatTableDataSource();
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      
    }
    ngOnInit() {
      this.myData();

  /*  var shoe = this.jobservice.getData().subscribe(change => {
         return change.map(a => {
          const data = a.payload.doc.data() as Datatype;
          return {
            idd: a.payload.doc.data(),
            title :a.payload.doc.data(),
            fee : a.payload.doc.data()
          }//as Datatype;
          //return data;

          console.log("Hello" + this.idd);
          })
      });

      
      

      this.listData = new MatTableDataSource();
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;




      */



      /*(this.jobgiverService.getData().pipe.map(changes=>{
        return changes.map(a=>{
            const data = a.payload.doc.data();
            const idd = a.payload.doc.idd;
            const title = a.payload.doc.title;
            const fee = a.payload.doc.fee;
            return data;
        })
      })*/
      /*this.jobgiverService.getData().subscribe(res => (
        this.listData = res)
      );

      this.listData.getData().subscribe(dataset:Datatype[]=>{
        this.arr = dataset;
        console.log(this.arr);
      })*/
    
    }
   
    applyFilter(filteValue: string){
      this.listData.filter = filteValue.trim().toLocaleLowerCase();
    }

    
}
