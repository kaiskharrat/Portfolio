import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/scroll.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    // S'abonner pour écouter les événements de défilement
    this.scrollService.scrollToContact$.subscribe(() => {
      this.scrollToContact();
    });
  }

  scrollToContact() {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  sendEmail(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    emailjs.sendForm('service_wheej1i', 'template_9ur2y19', e.target as HTMLFormElement, 'SWsBoUPKDDpmZdbWb')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.reset();
      }, (error) => {
        console.error(error.text);
        alert('Failed to send message, please try again later.');
      });
  }
}