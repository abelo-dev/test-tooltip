import { Component, ViewEncapsulation } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-tooltip-customclass',
  standalone: true,
  imports: [NgbTooltipModule],
  templateUrl: './tooltip-customclass.html',
  encapsulation: ViewEncapsulation.None,
  styles: `
		.ngb-tooltip-window{
			width: 300px;
		}

		.my-custom-class .tooltip-inner {
			background-color: grey;
			width: 300px;
			max-width: 300px;
			font-size: 100%;

		}

		.my-custom-class.bs-tooltip-end .tooltip-arrow::before {
			border-right-color: grey;
		}
		.my-custom-class.bs-tooltip-start .tooltip-arrow::before {
			border-left-color: grey;
		}
		.my-custom-class.bs-tooltip-top .tooltip-arrow::before {
			border-top-color: grey;
		}
		.my-custom-class.bs-tooltip-bottom .tooltip-arrow::before {
			border-bottom-color: grey;
		}
	`,
})
export class NgbdTooltipCustomclass {}
