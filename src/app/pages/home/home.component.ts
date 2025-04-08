import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { BenefitsComponent } from "../../components/benefits/benefits.component";
import { BonusComponent } from "../../components/bonus/bonus.component";
import { TargetAudienceComponent } from "../../components/target-audience/target-audience.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PriceComponent } from "../../components/price/price.component";
import { ProductGuideComponent } from "../../components/product-guide/product-guide.component";
import { WhatsButtonComponent } from "../../components/whats-button/whats-button.component";
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, BenefitsComponent, BonusComponent, TargetAudienceComponent, FaqComponent, FooterComponent, PriceComponent, ProductGuideComponent, WhatsButtonComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
