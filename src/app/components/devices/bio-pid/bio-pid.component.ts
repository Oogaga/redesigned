import {Component, Input, OnInit} from '@angular/core';
import {BioUniversalModel} from "../../../models/bioUniversal.model";

@Component({
  selector: 'app-bio-pid',
  templateUrl: './bio-pid.component.html',
  styleUrls: ['./bio-pid.component.css']
})
export class BioPidComponent implements OnInit {

  @Input() device?: BioUniversalModel;

  constructor() { }

  ngOnInit(): void {
  }



}
