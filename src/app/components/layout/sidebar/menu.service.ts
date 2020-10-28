import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

declare var $:any;


@Injectable()
export class MenuService {
  public $shadow_film = $('.shadow-film')
  public mobile_menu_handler = $('.mobile-menu-handler')
  public $mobile_menu = $('#mobile-menu')
  public $side_list_handler = $('.dropdown.interactive')
  public $mobile_account_options_handler = $('.mobile-account-options-handler')
  public $account_options_menu = $('#account-options-menu')
  public $db_sidemenu_handler = $('.db-side-menu-handler')
  public $dashboard_options_menu = $('#dashboard-options-menu');

  constructor(private location:Location,
              private router:Router){
  this.mobile_menu_handler.on('click', { id: '#mobile-menu' }, this.showSideMenu );

  this.$mobile_menu.children('.svg-plus').on('click', { id: '#mobile-menu' }, this.showSideMenu );

  this.$mobile_account_options_handler.on('click', { id: '#account-options-menu' }, this.showSideMenu );
  this.$account_options_menu.children('.svg-plus').on('click', { id: '#account-options-menu' }, this.showSideMenu );

  this.$db_sidemenu_handler.on('click', { id: '#dashboard-options-menu' }, this.showSideMenu );
  this.$dashboard_options_menu.children('.svg-plus').on('click', { id: '#dashboard-options-menu' }, this.showSideMenu );

    this.$side_list_handler
    .children('.dropdown-item.interactive')
    .on( 'click', this.toggleInnerMenu )
    .children('a').click(function(e) {
      e.preventDefault();
    });

   } 
    

  showSideMenu(e) {
    var $menu = $(e.data.id);

    this.toggleVisibility( $menu );
    this.toggleVisibility( this.$shadow_film );
  }

  toggleVisibility( togglableItem ) {
    if( togglableItem.hasClass('closed') ) {
      togglableItem
        .removeClass('closed')
        .addClass('open');
    } else {
      togglableItem
        .removeClass('open')
        .addClass('closed');
    }
  }




   toggleInnerMenu(e) {
     var $this = $(this);
    $this
      .toggleClass('active')
      .children('.inner-dropdown')
      .slideToggle(600);
  }




  

}
