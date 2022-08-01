import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/models/Person';
import { Projects } from 'src/app/models/Projects';
import { ProjectService } from 'src/app/services/project.service';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public person: Person | undefined;
  public project: Projects[] = [];
  public editProject: Projects | undefined;
  public deleteProject: Projects | undefined;
  public projectMethod: String | undefined;

  constructor(private projectService:ProjectService, private loggedService:AuthenticationService) { }

  loggedIn(){
    return this.loggedService.isUserLoggedIn();
  }

  ngOnInit(): void {
    this.getPerson();
    this.getProjects();
  }

  public getPerson(): void {
    this.projectService.getPerson().subscribe({
      next: (Response: Person) => {
        this.person = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public getProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (Response: Projects[]) => {
        this.project = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onOpenProjectModal(mode: String, project?: Projects) {
    if (mode === 'edit') {
      this.editProject = project;
      this.projectMethod = mode;
    }
    else if (mode === 'delete') {
      this.deleteProject = project;
    }
    else{
      this.projectMethod = 'add';
    }
  }
  
  public onAddProjects(projectForm: NgForm) {
    projectForm.value.person = this.person;
    console.log(projectForm.value);
    document.getElementById('add-project-form')?.click();
    if (this.projectMethod === 'add') {
      this.projectService.addProjects(projectForm.value).subscribe({
        next: (Response: Projects) => {
          console.log(Response);
          this.getProjects();
          projectForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          projectForm.reset();
        }
      })
    } else if (this.projectMethod === 'edit') {
      projectForm.value.idProjects = this.editProject?.idProject;
      this.projectService.updateProjects(projectForm.value).subscribe({
        next: (Response: Projects) => {
          console.log(Response);
          this.getProjects();
          projectForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          projectForm.reset();
        }
      })
    }
    this.projectMethod = 'add';
  }

  public onDeleteProjects(projectId: number): void {
    this.projectService.deleteProjects(projectId).subscribe({
      next: (Response: void) => {
        console.log(Response)
        this.getProjects();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
