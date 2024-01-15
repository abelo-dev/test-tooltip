import { Component, ViewEncapsulation } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-tooltip-customclass',
  standalone: true,
  imports: [NgbTooltipModule],
  templateUrl: './tooltip-customclass.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./tooltip-extra-info.scss"],
  styles: `
		
	`,
})
export class NgbdTooltipCustomclass {}
