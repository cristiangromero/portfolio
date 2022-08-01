import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Courses } from 'src/app/models/Courses';
import { Person } from 'src/app/models/Person';
import { CoursesService } from 'src/app/services/courses.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthenticationService } from '../../services/auth.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public person: Person | undefined;
  public course: Courses[] = [];
  public editCourse: Courses | undefined;
  public deleteCourse: Courses | undefined;
  public modeCourse: String | undefined;

  constructor(private courseService: CoursesService, private loggedService: AuthenticationService) { }

  loggedIn() {
    return this.loggedService.isUserLoggedIn();
  }

  ngOnInit(): void {
    this.getPerson();
    this.getCourses();
  }

  public getPerson(): void {
    this.courseService.getPerson().subscribe({
      next: (Response: Person) => {
        this.person = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public getCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (Response: Courses[]) => {
        this.course = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onOpenCourseModal(mode: String, course?: Courses) {
    if (mode === 'edit') {
      this.editCourse = course;
      this.modeCourse = mode;
    }
    else if (mode === 'delete') {
      this.deleteCourse = course;
    }
    else{
      this.modeCourse = 'add';
    }
  }
  
  public onAddCourses(courseForm: NgForm) {
    courseForm.value.icon = "bx bxl-" + courseForm.value.description;
    courseForm.value.person = this.person;
    console.log(courseForm.value);
    document.getElementById('add-course-form')?.click();
    if (this.modeCourse === 'add') {
      this.courseService.addCourses(courseForm.value).subscribe({
        next: (Response: Courses) => {
          console.log(Response);
          this.getCourses();
          courseForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          courseForm.reset();
        }
      })
    } else if (this.modeCourse === 'edit') {
      courseForm.value.idCourse = this.editCourse?.idCourse;
      this.courseService.updateCourses(courseForm.value).subscribe({
        next: (Response: Courses) => {
          console.log(Response);
          this.getCourses();
          courseForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          courseForm.reset();
        }
      })
    }
    this.modeCourse = 'add';
  }

  public onDeleteCourses(courseId: number): void {
    this.courseService.deleteCourses(courseId).subscribe({
      next: (Response: void) => {
        console.log(Response)
        this.getCourses();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }


}
