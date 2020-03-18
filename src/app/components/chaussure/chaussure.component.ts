import { Component, OnInit } from '@angular/core';
import { ChaussureService } from 'src/app/service/chaussure.service';
import { Chaussure } from 'src/app/models/chaussure';

@Component({
  selector: 'app-chaussure',
  templateUrl: './chaussure.component.html',
  styleUrls: ['./chaussure.component.css']
})
export class ChaussureComponent implements OnInit {
  isLoading: boolean;
  chaussures: Chaussure[];
  constructor( private chaussureService: ChaussureService) {

   }

  ngOnInit(): void {
    this.getChaussure();
  }
  getChaussure() {
    this.isLoading = true;
    this.chaussureService.getChaussure().subscribe((data: Chaussure[]) => {
      this.chaussures = data;
      this.isLoading = false;
    });
  }
  deleteChaussure(idChaussure) {
    this.chaussureService.deleteChaussure(idChaussure).subscribe((then) => {
        this.getChaussure();
    });
  }

}
