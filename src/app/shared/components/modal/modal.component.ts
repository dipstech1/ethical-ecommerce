import { Component, OnInit, EventEmitter, ElementRef, Output, Injectable } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {

  constructor(private modalService: NgbModal,public activeModal: NgbActiveModal) {}
    public title: string;
    public message: string;

}

@Injectable()
export class DialogService {  
  constructor(private modalService: NgbModal) {}

  public show(title: string, message:string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    return modalRef.result;
  }
}