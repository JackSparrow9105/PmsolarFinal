import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface FormData {
  fname: string;
  lname: string;
  fathername: string;
  category: string;
  gender: string;
  dob: string;
  aadhar: string;
  pan:string;
  hp: string;
  Address:string;
  email: string;
  phone: string;
  bank: string;
  accountholder: string;
  Accounnumber: string;
  ifsc:string;

}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private router:Router) {

  }
  // Use your NEW deployment URL here
  @ViewChild('fullNameInput') fullNameInput!: ElementRef;
  @ViewChild('Email') Email!: ElementRef;
  @ViewChild('city') city!: ElementRef;
  @ViewChild('phone') phone!: ElementRef;
  @ViewChild('hp') hp!: ElementRef;

  googleSheetUrl = 'https://script.google.com/macros/s/AKfycbxdjS0NhaHSl9mZHqLhiVFDCraMK6wBbeHRVONt3KnJI9RwQzJtekz50UGEFuIwXVq-/exec';

  formData: FormData =
   {
    fname: '',
    lname: '',
    fathername: '',
    category: '',
    gender: '',
    dob: '',
    aadhar: '' ,
    pan:'',
    hp: '',
    Address:'',
    email: '',
    phone: '',
    bank: '',
    accountholder: '',
    Accounnumber: '',
    ifsc:'',
  };

   onSubmit() {
    // Your validation code remains the same...

    try {
      const response =  fetch(this.googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors', // Only if you can't modify the server
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(this.formData as any).toString()
      });

      //alert('Data saved successfully!');
      //this.resetForm();
    } catch (error) {
      console.error('Error:', error);
      alert('Data may have been saved - please check');
     // this.resetForm();
    }
    this.router.navigate(['/fundingDepartment']);
  }}
