import { Component, OnInit, TemplateRef } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/service/chaussure.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-chaussure',
  templateUrl: './add-chaussure.component.html',
  styleUrls: ['./add-chaussure.component.css']
})
export class AddChaussureComponent implements OnInit {
  chaussureAdd = new Chaussure();
  marques: string[] = ['Adidas', 'Nike', 'Puma'];
  types: string[] = ['Football', 'Ville', 'Sport'];
  modalRef: BsModalRef;
  message: string;
  constructor(private chaussureService: ChaussureService, private route: Router, private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  addChaussure() {
    this.chaussureService.addChaussure(this.chaussureAdd).subscribe( then => {
      this.route.navigate(['/chaussure']);
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
}

