import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { AuthenticationService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/models/Person';
import { AboutService } from 'src/app/services/about.service';
import { GraduationClass } from 'src/app/classes/GraduationClass';
import { CivilClass } from 'src/app/classes/CivilClass';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public person: Person | undefined;
  public editPerson: Person | undefined;
  graduateList: GraduationClass[] = [];
  graduateSelect: GraduationClass = new GraduationClass;
  civilList: CivilClass[] = [];
  civilSelect: CivilClass = new CivilClass;
  
  constructor(private aboutService: AboutService, private loggedService: AuthenticationService) { }

  ngOnInit(): void {
    this.getPerson();
    this.graduateList.push(new GraduationClass("Primario"));
    this.graduateList.push(new GraduationClass("Secundario"));
    this.graduateList.push(new GraduationClass("Terciario"));
    this.graduateList.push(new GraduationClass("Universitario"));

    this.civilList.push(new CivilClass("Soltero"));
    this.civilList.push(new CivilClass("Casado"));
    this.civilList.push(new CivilClass("Viudo"));
    this.civilList.push(new CivilClass("Divorsiado"));
  }

  loggedIn() {
    return this.loggedService.isUserLoggedIn();
  }

  public getPerson(): void {
    this.aboutService.getPerson().subscribe({
      next: (Response: Person) => {
        this.person = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  CalculateAge(): any {
    const today: Date = new Date();
    if (this.person !== undefined) {
      const birthDate: Date = new Date(this.person.birth);
      let age: number = today.getFullYear() - birthDate.getFullYear();
      const month: number = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  }

  public onOpenModal(person: Person) {
    this.editPerson = person;
  }

  public onEditPerson(editForm: NgForm) {
    console.log(editForm.value);
    document.getElementById('edit-person-form')?.click();
    editForm.value.idPerson = this.editPerson?.idPerson;
    this.aboutService.updatePerson(editForm.value).subscribe({
      next: (Response: Person) => {
        console.log(Response);
        this.getPerson();
        editForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        editForm.reset();
      }
    })
  }
}
