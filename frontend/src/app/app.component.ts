import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  members = [
    {
      nome: 'Member 01',
      id: 1,
      surname: 'Ciclano',
      photo: 'https://www.google.com',
    },
    {
      nome: 'Member 02',
      id: 2,
      surname: 'Reciclano',
      photo: 'https://www.google.com',
    },
    {
      nome: 'Member 03',
      id: 3,
      surname: 'Tagashira',
      photo: 'https://www.google.com',
    },
    {
      nome: 'Member 04',
      id: 4,
      surname: 'Suncin',
      photo: 'https://www.google.com',
    },
  ];

  constructor(private api: ApiService) {
    this.getMembers();
  }
  getMembers = () => {
    this.api.getAllMembers().subscribe(
      (data) => {
        this.members = data;
      },
      (error) => {
        console.log('Houve um erro: \n', error.message);
      }
    );
  };
  memberClicked = (member) => {
    this.api.getMember(member.id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('Houve um erro: \n', error.message);
      }
    );
  };
}
