import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Languages } from 'src/app/models/Languages';
import { Person } from 'src/app/models/Person';
import { LanguageService } from 'src/app/services/language.service';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  public person: Person | undefined;
  public languages: Languages[] = [];
  public editLanguage: Languages | undefined;
  public deleteLanguage: Languages | undefined;
  public modeLanguage: String | undefined;

  constructor(private languagesService: LanguageService, private loggedService:AuthenticationService) { }
  
  loggedIn(){
    return this.loggedService.isUserLoggedIn();
  }

  ngOnInit(): void {
    this.getPerson();
    this.getLanguages();
    this.modeLanguage = 'add';
  }

  public getPerson(): void {
    this.languagesService.getPerson().subscribe({
      next: (Response: Person) => {
        this.person = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public getLanguages(): void {
    this.languagesService.getLanguages().subscribe({
      next: (Response: Languages[]) => {
        this.languages = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onOpenLanguageModal(mode: String, languages?: Languages) {
    if (mode === 'edit') {
      this.editLanguage = languages;
      this.modeLanguage = mode;
    }
    else if (mode === 'delete') {
      this.deleteLanguage = languages;
    }else{
      this.modeLanguage = 'add';
    }
  }
  
  public onAddLanguage(languageForm: NgForm) {
    languageForm.value.person = this.person;
    console.log(languageForm.value);
    document.getElementById('add-language-form')?.click();
    if (this.modeLanguage === 'add') {
      this.languagesService.addLanguages(languageForm.value).subscribe({
        next: (Response: Languages) => {
          console.log(Response);
          this.getLanguages();
          languageForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          languageForm.reset();
        }
      })
    } else if (this.modeLanguage === 'edit') {
      languageForm.value.idLanguage = this.editLanguage?.idLanguage;
      this.languagesService.updateLanguages(languageForm.value).subscribe({
        next: (Response: Languages) => {
          console.log(Response);
          this.getLanguages();
          languageForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          languageForm.reset();
        }
      })
    }
    this.modeLanguage = 'add';
  }

  public onDeleteLanguage(languagesId: number): void {
    this.languagesService.deleteLanguages(languagesId).subscribe({
      next: (Response: void) => {
        console.log(Response)
        this.getLanguages();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
