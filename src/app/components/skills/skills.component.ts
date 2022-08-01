import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/models/Person';
import { Skills } from 'src/app/models/Skills';
import { SkillsService } from 'src/app/services/skills.service';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  
  public person: Person | undefined;
  public skills: Skills[] = [];
  public editSkill: Skills | undefined;
  public deleteSkill: Skills | undefined;
  public modeSkills: String | undefined;


  constructor(private skillsService: SkillsService, private loggedService:AuthenticationService) { }

  loggedIn(){
    return this.loggedService.isUserLoggedIn();
  }

  ngOnInit(): void {
    this.getPerson();
    this.getSkills();
  }

  public getPerson(): void {
    this.skillsService.getPerson().subscribe({
      next: (Response: Person) => {
        this.person = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public getSkills(): void {
    this.skillsService.getSkills().subscribe({
      next: (Response: Skills[]) => {
        this.skills = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onOpenSkillModal(mode: String, skills?: Skills) {
    if (mode === 'edit') {
      this.editSkill = skills;
      this.modeSkills = mode;
    }
    else if (mode === 'delete') {
      this.deleteSkill = skills;
    }
    else{
      this.modeSkills ='add';
    }
  }
  
  public onAddSkill(skillForm: NgForm) {
    skillForm.value.person = this.person;
    console.log(skillForm.value);
    document.getElementById('add-skill-form')?.click();
    if (this.modeSkills === 'add') {
      this.skillsService.addSkills(skillForm.value).subscribe({
        next: (Response: Skills) => {
          console.log(Response);
          this.getSkills();
          skillForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          skillForm.reset();
        }
      })
    } else if (this.modeSkills === 'edit') {
      skillForm.value.idSkill = this.editSkill?.idSkill;
      this.skillsService.updateSkills(skillForm.value).subscribe({
        next: (Response: Skills) => {
          console.log(Response);
          this.getSkills();
          skillForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          skillForm.reset();
        }
      })
    }
    this.modeSkills = 'add';
  }

  public onDeleteSkill(skillsId: number): void {
    this.skillsService.deleteSkills(skillsId).subscribe({
      next: (Response: void) => {
        console.log(Response)
        this.getSkills();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
