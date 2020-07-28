import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from './../../cargar-scripts.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService) {
    
    _CargaScripts.Carga(["jquery/jquery.min"]);
    _CargaScripts.Carga(["jquery/jquery-migrate.min"]);
    _CargaScripts.Carga(["bootstrap/js/bootstrap.bundle.min"]);
    _CargaScripts.Carga(["easing/easing.min"]);
    _CargaScripts.Carga(["mobile-nav/mobile-nav"]);
    _CargaScripts.Carga(["wow/wow.min"]);
    _CargaScripts.Carga(["waypoints/waypoints.min"]);
    _CargaScripts.Carga(["counterup/counterup.min"]);
    _CargaScripts.Carga(["owlcarousel/owl.carousel.min"]);
    _CargaScripts.Carga(["isotope/isotope.pkgd.min"]);
    _CargaScripts.Carga(["lightbox/js/lightbox.min"]);
    
    _CargaScripts.Carga(["contactform"]);
    _CargaScripts.Carga(["main"]);
    
   }

  ngOnInit() {
  }

}
