import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { User } from "../users-forms/User";

@Component({
  selector: 'app-users-forms',
  templateUrl: './users-forms.component.html',
  styleUrls: ['./users-forms.component.css']
})
export class UsersFormsComponent implements OnInit {

  blue : string = "blue";

  userProfileForm: FormGroup;
  users: Array<User> = [];
  user: User = new User();
  list : Array<string> = [];


  constructor(private fb: FormBuilder) { 
    this.userProfileForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: [''],
      adresse: this.fb.group({
        num: [''],
        rue: [''],
        ville: ['']
      }),
      listeChats: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.userProfileForm.valid) {
      console.log(this.userProfileForm.value);
      this.users.push(this.userProfileForm.value);
    }
    this.userProfileForm.reset();
  }

getChats() : FormArray {
  return this.userProfileForm.get('listeChats') as FormArray;
}

  addNewCat(): void {
    this.user.listeChats.push(this.fb.control('').value);
}

}
