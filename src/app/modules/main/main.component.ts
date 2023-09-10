import { Component, OnInit,AfterViewInit, Input,ElementRef, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  isDropdownOpen = false;
  selectedOption: string | null = null;
  dropdownStyle: any = {};
  ////
  isDropdownOpenLarge = false;
  selectedOptionLarge: string | null = null;
  dropdownStyleLarge = {};
  
  

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    
    
    if (this.isDropdownOpen) {
      this.dropdownStyle = { 'border-radius': '8px 8px 0px 0px', /* Add other styles for open state */ };
    } else {
      this.dropdownStyle = { 'border-radius': '8px', /* Add other styles for closed state */ };
    }
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = true;

  }
  ////

  toggleDropdownLarge() {
    this.isDropdownOpenLarge = !this.isDropdownOpenLarge;
    this.updateDropdownStyleLarge();
  }

  openDropdownLarge() {
    this.isDropdownOpenLarge = true;
    this.updateDropdownStyleLarge();
  }

  closeDropdownLarge() {
    this.isDropdownOpenLarge = false;
    this.updateDropdownStyleLarge();
  }

  selectOptionLarge(option: string) {
    this.selectedOptionLarge = option;
    this.isDropdownOpenLarge = false;
    this.updateDropdownStyleLarge();
  }

  updateDropdownStyleLarge() {
    // You can add custom styles here based on the open/closed state
    this.dropdownStyleLarge = {
      // Add your styles here
    };
  }

  }

  

 
 