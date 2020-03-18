import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChaussureService } from 'src/app/service/chaussure.service';
import { Chaussure } from 'src/app/models/chaussure';

@Component({
  selector: 'app-update-chaussure',
  templateUrl: './update-chaussure.component.html',
  styleUrls: ['./update-chaussure.component.css']
})
export class UpdateChaussureComponent implements OnInit {
  idChaussure: number;
  chaussureToUpdate: Chaussure;
  marques: string[] = ['Adidas', 'Nike', 'Puma'];
  types: string[] = ['Football', 'Ville', 'Sport'];
  constructor(private route: ActivatedRoute, private router: Router, private chaussureService: ChaussureService) { }

  ngOnInit(): void {
    this.idChaussure = +this.route.snapshot.paramMap.get('id');
    this.chaussureService.getChaussureById(this.idChaussure).subscribe((data: Chaussure) => {
      this.chaussureToUpdate = data;
    });
  }
  updateChaussure() {
    this.chaussureService.updateChaussure(this.chaussureToUpdate).subscribe(then => {
      this.router.navigate(['/chaussure']);
    });
  }

}
