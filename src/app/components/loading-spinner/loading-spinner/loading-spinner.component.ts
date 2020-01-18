import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  @Input() id: string;
  @Input() size: number;
  @Input() bgcolor: string;
  @Input() color: string;

  @Input() ngStyle: { [key: string]: string; }

  @ViewChild('spinner') el: ElementRef;

  loading = {
    "border-radius": "50%",
    "webkit-animation": "spin 2s linear infinite",
    "animation": "spin 2s linear infinite"
  };

  places = {
    "position": "absolute",
    "top": "50%",
    "left": "50%"
  };

  distance = {
    "padding-top": "10px",
    "text-align": "center",
    "margin-left": "-5px"
  };

  constructor() { }

  ngOnInit() {

    var style = document.createElement('style');
    style.type = 'text/css';

    let keyframes =
      `
      @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      `

    style.innerHTML = keyframes;
    document.getElementsByTagName('head')[0].appendChild(style);

    this.el.nativeElement.style.marginTop = (-1 * (this.size / 2)) + "px";
    this.el.nativeElement.style.marginLeft =  (-1 * (this.size / 2)) + "px";

    this.el.nativeElement.children[0].style.width = this.size + "px";
    this.el.nativeElement.children[0].style.height = this.size + "px";
    this.el.nativeElement.children[0].style.border = "5px solid " + this.bgcolor;
    this.el.nativeElement.children[0].style.borderTop = "5px solid " + this.color;
    
  }

}
