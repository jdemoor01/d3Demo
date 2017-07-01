import {
  Component,
  OnInit
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public numColors: number = 5;

  public colors: any[] = [];

  ngOnInit() {
    this.colors = this.buildColors(this.numColors);
  }
  buildColors(colorLength: number): any[] {
    let colorBuilder: any = d3.scaleLinear()
    .domain([0,colorLength])
    .range(['#00ff00', '#ff0000']);

    let colorArray: any[] = [];
    for (let i=0; i<colorLength; i++) {
      colorArray.push(this.rgb2hex(colorBuilder(i)));
    }
    return colorArray;
  }

  rgb2hex(rgb): string {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

}
