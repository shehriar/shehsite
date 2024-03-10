import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @ViewChild('projectsComponent', { static: false }) projectsComponent!: ElementRef;
  
  dataMedic = {name: "DataMedic", languages: "Angular, ExpressJS, SQL, HTML, CSS", description: "Currently working on a website utilizing Angular for frontend, ExpressJS for backend and SQL for database, to allow healthcare workers and their patients to manage their medical data.<br><br> There exists two portals on the website: one for patients and one for doctors. On the patient portal, they are able to schedule and view appointments, along with viewing their diagnoses and medications prescribed, and managing their billing. While the doctors are able to view their upcoming appointments as well as diagnosing and prescribing medication to patients.", image: "assets/projects_assets/hms_image.png", imageHeight: "300px", githubLink : "https://github.com/shehriar/hospital-management-system", demoLink: "https://www.youtube.com/watch?v=0SGS2M5ZKfc&t=11s&ab_channel=ShehriarBurney"}
  roadRover = {name: "RoadRover Rentals", languages: "Angular, ExpressJS, SQL, HTML, CSS", description: "Developed a website for a mock car rental service called 'RoadRover Rentals'. I used a dataset which contained data of over 500 vehicles, and implemented RESTful API endpoints to connect the backend to the Angular frontend.<br><br> The intuitive UI of the web application guides the user throughout the whole process,from selecting dates and pickup location down to booking the vehicle.", image : "assets/projects_assets/road_rover_image.png", imageHeight : "300px", githubLink : "https://github.com/shehriar/road_rover", demoLink: "https://www.youtube.com/watch?v=AOCD27HebLM&ab_channel=ShehriarBurney"};
  pds = {name: "Pothole Detection System", languages: "Flutter, Firebase, NoSQL, Jira", description: "Created a navigation app which warns users of potholes on their route to allow for a safer journey. The application utilizes the Google Maps API to showcase a view of the streets and a line is drawn for guidance. The app is also community driven as the data is gathered through users reporting potholes as they spot it. <br><br> The service also houses a Goverment Portal which allows government organizations to view the potholes in their communities, allowing them efficient data retrieval and ensuring that potholes are patched. <br><br> I developed this service with a group of 4, implementing the Scrum Agile methodology over a span of 3 months. Overall we completed 12 sprints and had 3 releases.", image : "assets/projects_assets/pds_image.png", imageHeight : "400px", githubLink : "https://github.com/shehriar/PotholeDetectionSystem", demoLink: "https://youtu.be/C7Sl7JuKmVM"}
  findYourRoof = {name: "Find Your Roof", languages: "Technical Documentation and Planning", description: "Find Your Roof is a development project which documents a thorough and strategic planning for an application which assists homeless individuals to find housing and employment opportunities. <br><br> The application would be working with Non-Profit Organizations (NPOs) to set up a healthy environment to assist homeless individuals get back on their feet. This would be done by scheduling workshops, connecting them with mentors, as well as connecting them with potential employers and landlords.", image : "assets/projects_assets/fyr_image.png", imageHeight : "320px", githubLink : "", demoLink: "https://drive.google.com/file/d/13Lg3o5w4yJG1yFI2EGbw0Ajne9A58QCM/view?usp=drive_link"}
  poker = {name: "3-Card Poker", languages: "Java, JavaFX, Apache Maven", description: "Designed a card game similar to Poker but with a unique twist of handling 3 cards. The game utilizes multithreading to allow multiple players to independently run the game via a shared server.", image : "assets/projects_assets/poker_image.png", imageHeight : "300px", githubLink : "https://github.com/shehriar/3-Hand-Poker", demoLink: "https://youtu.be/TRJfWWMRxj4"}
  multiroomComm = {name: "Multi-Room Communication", languages: "C++, Arduino", description: "Architected a system which consists of three Arduinos that are equipped with sensors and are able to communicate with each other wirelessly through radio frequencies, sending data regarding light and heat. This system is developed with farmers in mind as it would assist in monitoring amount of heat and light coming into their crops.", image: "assets/projects_assets/mcs_image.png", imageHeight: "220px", githubLink : "https://github.com/shehriar/Multiroom-Communication-System", demoLink: "https://youtu.be/uLuoLZL35WI"};

  projectArray = [this.dataMedic, this.roadRover, this.pds, this.findYourRoof, this.multiroomComm, this.poker];

  constructor(private scrollService : ScrollService) {}

  ngOnInit() {
    this.scrollService.scrollToProjectsObservable.subscribe(() => {
      this.projectsComponent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}
