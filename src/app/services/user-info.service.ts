import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  public firstName = "Christian";
  public lastName = "Aromin";
  public email = "caromin19@gmail.com";

  public introPara1 = "I am a forward-thinking IT professional with team based leadership experience with a background in software development.";
  public introPara2 = "Thank you for visiting my online resume, if you have any questions, please don't hesitate to reach out!";
  
  public aboutmePara1 = `Hello, my name is ${this.firstName}, and thank you for visiting my online resume/portfolio.`;
  public aboutmePara2 = "I have created and updated enterprise level applications for use by government organizations."
  public aboutmePara3 = "I am originally from San Francisco, CA and currently reside in Jacksonville, FL. I have been involved in Web Development since 2018."
  public aboutmePara4 = `If you have any questions, please do not hesitate to get in touch via `

  public resumeArr: any[] = [
    { dateRange: 'Dec 2022 - Present', title: "Consultant, Full Stack Developer", company: 'Accenture Federal Services (AFS)', 
      summary: `Lead developer in a multi-year complete redesign and upgrade of an existing application into a new Azure based platform. Using Java, Angular 16, Azure SQL. 
      Participated in discussions with different Product Owners on new functionality integration. Writing and reviewing official documentation for applications. Examples are Database Dictionary, Release build documents, and repository readmes. 
      Expanded a shared API application to allow other application to have access to additional endpoint datasets.`
    },
    { dateRange: 'Mar 2021 - Nov 2022', title: "Senior Analyst, Full Stack Developer", company: 'Accenture Federal Services (AFS)', 
    summary: `Involved in multiple different application development and release cycles. Writing Jasmine and Junit tests to meet a minimum of 80% test coverage for Front and Backend testing. 
    Was the primary developer for most development work. Tasked as one of a few developers to review incoming code pull requests for application code changes. 
    Assisted other developers in troubleshooting, debugging, and mentorship.`
    }, 
    { dateRange: 'Nov 2019 - Mar 2021', title: "Junior Software Engineer",  company: 'Revature', 
    summary: `Developer on multiple different applications that used different languages: Used Java, C# with frameworks: Angular JS/5, and Webforms. 
    Participated in different application releases to address bugs and implement features. Worked in both Kanban and Scrum development to address bugs and implement new features.`
    }
  ];

  public educationArr: any[] = [
    { date: 'Dec 2017', degree: 'Web Development Boot Camp', school: "University of Central Florida"},
    { date: 'Dec 2014', degree: 'Dual Bachelor of Arts: Criminal Justice, Psychology', school: "University of North Florida"}
  ];
}
