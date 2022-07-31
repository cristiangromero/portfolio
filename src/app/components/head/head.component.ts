import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocialMediaClass } from 'src/app/classes/SocialMediaClass';
import { Person } from 'src/app/models/Person';
import { SocialMedia } from 'src/app/models/SocialMedia';
import { HeadService } from 'src/app/services/head.service';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  public person: Person | undefined;
  public social: SocialMedia[] = [];
  public editPerson: Person | undefined;
  public editSocial: SocialMedia | undefined;
  public deleteSocial: SocialMedia | undefined;
  public modeMethod: String | undefined;
  socialMediaList: SocialMediaClass[] = [];
  ngSelected: SocialMediaClass = new SocialMediaClass;

  constructor(private headService: HeadService, private loggedService: AuthenticationService) { }

  loggedIn() {
    return this.loggedService.isUserLoggedIn();
  }

  ngOnInit(): void {
    this.getPerson();
    this.getSocialMedia();
    this.socialMediaList.push(new SocialMediaClass("linkedin", "bx bxl-linkedin"));
    this.socialMediaList.push(new SocialMediaClass("whatsapp", "bx bxl-whatsapp"));
    this.socialMediaList.push(new SocialMediaClass("skype", "bx bxl-skype"));
    this.socialMediaList.push(new SocialMediaClass("facebook", "bx bxl-facebook"));

  }

  public getPerson(): void {
    this.headService.getPerson().subscribe({
      next: (Response: Person) => {
        this.person = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public getSocialMedia(): void {
    this.headService.getSocialMedia().subscribe({
      next: (Response: SocialMedia[]) => {
        this.social = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onOpenModal(mode: String, socialMedia?: SocialMedia) {
    if (mode === 'edit') {
      this.editSocial = socialMedia;
      this.modeMethod = mode;
    }
    else if (mode === 'delete') {
      this.deleteSocial = socialMedia;
    }
  }
  
  public onAddSocialMedia(addForm: NgForm) {
    addForm.value.icon = "bx bxl-" + addForm.value.description;
    addForm.value.person = this.person;
    console.log(addForm.value);
    document.getElementById('add-socialmedia-form')?.click();
    if (this.modeMethod === 'add') {
      this.headService.addSocialMedia(addForm.value).subscribe({
        next: (Response: SocialMedia) => {
          console.log(Response);
          this.getSocialMedia();
          addForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      })
    } else if (this.modeMethod === 'edit') {
      addForm.value.idSocialMedia = this.editSocial?.idSocialMedia;
      this.headService.updateSocialMedia(addForm.value).subscribe({
        next: (Response: SocialMedia) => {
          console.log(Response);
          this.getSocialMedia();
          addForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      })
    }
    this.modeMethod = 'add';
  }

  public onDeleteSocialMedia(socialMediaId: number): void {
    this.headService.deleteSocialMedia(socialMediaId).subscribe({
      next: (Response: void) => {
        console.log(Response)
        this.getSocialMedia();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
