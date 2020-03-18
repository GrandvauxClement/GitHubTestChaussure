import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/service/chaussure.service';

@Component({
  selector: 'app-chaussure-detail',
  templateUrl: './chaussure-detail.component.html',
  styleUrls: ['./chaussure-detail.component.css']
})
export class ChaussureDetailComponent implements OnInit {
  idChaussure: number;
  chaussure: Chaussure;
  isLoading: boolean;
  constructor(private route: ActivatedRoute, private chaussureService: ChaussureService, private router: Router) {

   }

  ngOnInit(): void {
    this.idChaussure = +this.route.snapshot.paramMap.get('id');
    this.isLoading = true;
    this.chaussureService.getChaussureById(this.idChaussure).subscribe((data: Chaussure) => {
      this.chaussure = data;
      this.isLoading = false;
    });

  }
  deleteChaussure(idChaussure) {
    this.chaussureService.deleteChaussure(idChaussure).subscribe((then) => {
        this.router.navigate(['/chaussure']);
    });
  }

}


