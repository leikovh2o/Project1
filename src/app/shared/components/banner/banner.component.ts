import { AfterViewChecked, ChangeDetectorRef, Component, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { IBannerContents } from './models/banner.model';


@Component({
  selector: 'starnet-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements AfterViewChecked{
  mdqMobile: MediaQueryList;
  @Input() bannerContent: IBannerContents;

  constructor(private readonly _cdr: ChangeDetectorRef, private readonly _media: MediaMatcher) { 
    this.mdqMobile = this._media.matchMedia('(max-width: 600px)');

    if (this.mdqMobile?.addEventListener) {
      this.mdqMobile.addEventListener('change', () => this._cdr.detectChanges());
    }
  } 

  ngAfterViewChecked(): void {
    this._cdr.detectChanges();
  }
}
