import { Component } from '@angular/core';
import { IBannerContents } from './shared/components/banner/models/banner.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starnet-project';

  bannerContent: IBannerContents = {
    title: '<span class="highlighted"> Comunitatea StarNet</span> în premieră',
    description: "Devino membru al comunității StarNet și bucură-te de un mix de recompense, avantaje și experiențe unice absolut gratuit.",
    imageUrl: "assets/img/landing-image.svg",
    imageMobileUrl: "assets/img/mobile-landing-image.svg"
  }
}
