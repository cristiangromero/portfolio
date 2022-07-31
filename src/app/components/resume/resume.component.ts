import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GraduationClass } from 'src/app/classes/GraduationClass';
import { Education } from 'src/app/models/Education';
import { Experience } from 'src/app/models/Experience';
import { Person } from 'src/app/models/Person';
import { EducationService } from 'src/app/services/education.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public person: Person | undefined;
  public education: Education[] = [];
  public editEducation: Education | undefined;
  public deleteEducation: Education | undefined;
  public experience: Experience[] = [];
  public editExperience: Experience | undefined;
  public deleteExperience: Experience | undefined;
  public modeMethod: String | undefined;
  graduationList: GraduationClass[] = [];
  graduationSelected: GraduationClass = new GraduationClass;

  constructor(private educationService: EducationService, private experienceService: ExperienceService, private loggedService: AuthenticationService) { }

  loggedIn() {
    return this.loggedService.isUserLoggedIn();
  }

  ngOnInit(): void {
    this.getPerson();
    this.getEducation();
    this.getExperience();
    this.graduationList.push(new GraduationClass("Primario"));
    this.graduationList.push(new GraduationClass("Secundario"));
    this.graduationList.push(new GraduationClass("Terciario"));
    this.graduationList.push(new GraduationClass("Universitario"));

  }

  public getPerson(): void {
    this.educationService.getPerson().subscribe({
      next: (Response: Person) => {
        this.person = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public getEducation(): void {
    this.educationService.getEducation().subscribe({
      next: (Response: Education[]) => {
        this.education = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public getExperience(): void {
    this.experienceService.getExperience().subscribe({
      next: (Response: Experience[]) => {
        this.experience = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onOpenModalEducation(mode: String, education?: Education) {
    if (mode === 'edit') {
      this.editEducation = education;
      this.modeMethod = mode;
    }
    else if (mode === 'delete') {
      this.deleteEducation = education;
    }
  }

  public onOpenModalExperience(mode: String, experience?: Experience) {
    if (mode === 'edit') {
      this.editExperience = experience;
      this.modeMethod = mode;
    }
    else if (mode === 'delete') {
      this.deleteExperience = experience;
    }
  }

  public onAddEducation(educationForm: NgForm) {
    educationForm.value.person = this.person;
    console.log(educationForm.value);
    document.getElementById('add-education-form')?.click();
    if (this.modeMethod === 'add') {
      this.educationService.addEducation(educationForm.value).subscribe({
        next: (Response: Education) => {
          console.log(Response);
          this.getEducation();
          educationForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          educationForm.reset();
        }
      })
    } else if (this.modeMethod === 'edit') {
      educationForm.value.idEducation = this.editEducation?.idEducation;
      this.educationService.updateEducation(educationForm.value).subscribe({
        next: (Response: Education) => {
          console.log(Response);
          this.getEducation();
          educationForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          educationForm.reset();
        }
      })
    }
    this.modeMethod = 'add';
  }

  public onDeleteEducation(educationId: number): void {
    this.educationService.deleteEducation(educationId).subscribe({
      next: (Response: void) => {
        console.log(Response)
        this.getEducation();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  
  public onAddExperience(experienceForm: NgForm) {
    experienceForm.value.person = this.person;
    console.log(experienceForm.value);
    document.getElementById('add-experience-form')?.click();
    if (this.modeMethod === 'add') {
      this.experienceService.addExperience(experienceForm.value).subscribe({
        next: (Response: Experience) => {
          console.log(Response);
          this.getExperience();
          experienceForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          experienceForm.reset();
        }
      })
    } else if (this.modeMethod === 'edit') {
      experienceForm.value.idExperience = this.editExperience?.idExperience;
      this.experienceService.updateExperience(experienceForm.value).subscribe({
        next: (Response: Experience) => {
          console.log(Response);
          this.getExperience();
          experienceForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          experienceForm.reset();
        }
      })
    }
    this.modeMethod = 'add';
  }

  public onDeleteExperience(experienceId: number): void {
    this.experienceService.deleteExperience(experienceId).subscribe({
      next: (Response: void) => {
        console.log(Response)
        this.getExperience();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
