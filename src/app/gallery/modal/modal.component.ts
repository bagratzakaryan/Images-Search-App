import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    @Input() title = '';
    @Input() imgUrl = '';
    @Output() onclose: EventEmitter<boolean> = new EventEmitter();

    documentRef: HTMLElement = document.documentElement;

    constructor() { }

    ngOnInit() {
        this.documentRef.classList.add('noScroll');
    }

    closeModal() {
        this.documentRef.classList.remove('noScroll');
        this.onclose.emit(true);
    }
}
