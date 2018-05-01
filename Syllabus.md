# Syllabus
Parsons School of Design   
Communication Design Department   

**Web Design**
1028 - PSAM - D   
Spring 2018   

Ariel Churi churia@newschool.edu   

Class site: [GitHub](https://github.com/arielchuri/creativecomputing)   
This file: [Syllabus](https://github.com/arielchuri/creativecomputing/blob/master/Syllabus.md)   
ASSIGNMENTS ARE ON CANVAS.   

## Course Description
Creative Computing is designed to introduce students to programming as a creative medium-as a way of making and exploring. The coursework focuses on developing a vocabulary of interaction design principles which can then be applied across a range of platforms. Students are encouraged to experiment with various media, tools, and techniques, ultimately producing a portfolio of interactive and visual projects designed for the screen. An emphasis is placed on typography as it applies to a screen context, research-based problem solving and a "learning through making" approach to technical skill building. Historical and current interaction design precedents will be discussed.

## Learning Outcomes
1. Demonstrate knowledge of fundamental programming concepts
2. Develop several visual & interactive projects
3. Objectively present their design process and workflow
4. Integrate a variety of media elements into their projects
5. Problem solve with other students through reading other students’ code
6. Demonstrate the ability to research and learn unfamiliar technical topics.
7. Concept projects that use code in a creative way
8. Research historic and current design precedents to contextualize their work.
9. Evaluate how typography and its variables are applied to interactive systems to facilitate orientation, support usability and create consistency

## Final Grade Calculation
- In-class and Take-home Assignments    50%
- Final Project                         30%
- In-class Participation                20%

## Course Outline

### Week 01    
Directories and the terminal   
Organizing Files   
Intro to HTML   
Html file structure   

**Assignment:**
Choose your own adventure

**Media:**   
[*What is Code?*, Paul Ford](http://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/)   
[freeCodeCamp](https://www.freecodecamp.org/challenges/say-hello-to-html-elements )   

### Week 02    
Cleaning text files   
Links, anchors, and images   
Intro to CSS

Assignment: Short Story

### Week 03    
CSS and styles
Code editors   
Examening a webpage   
Browser dev tools   
Layout and type   
pixels, em spaces, percentages   

Assignment: StyleGuide Check-in

### Week 04    
Programming basics (Processing)
Variables

Assignment: StyleGuide
Assignment: Processing Experiment (2 weeks)

### Week 05    
If statements
Comments and whitespace   
For loops

### Week 06    
External style sheets   
CSS reset   
Margins and padding   
The box model   
arrays and strings   
File Transfer Protocol   
Assignment: Processing Final Project

### Week 07    
Javascript and the web

### Week 08    
No Class Today

jQuery   

### Week 08    
1on1 Meetings
Appointment link: <pending>
Location: <pending>

### Week 09    
Review of Portfolio Site progress
Web design process and UX   

### Week 10    
Responsive design   
Libraries and frameworks   

### Week 11    
Final Project   

### Week 12    
Final Project   

### Week 13    
Final Project   
Creating VR websites with [A-Frame](https://aframe.io)   

### Week 14    
Final Project   

### Week 15    
Final Project Presentation   

## Required Reading / Media


[How to / Why Make Internet Art](http://netart.rocks)

[*What is Code?*, Paul Ford](http://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/)

[*Paragraphs on Conceptual Art*, Sol Lewitt](https://www.dropbox.com/s/civ8ofgp13opp7v/Paragraphs_on_Conceptual_Art_Sol_LeWitt.pdf?dl=0)

[Guide to Website Navigation]( http://sixrevisions.com/user-interface/navigation-design-patterns/)

[Web Design: The First 100 Years, Maciej Cegłowski](http://idlewords.com/talks/web_design_first_100_years.htm)

*Toward Aesthetic Guidelines for Paintings with the Aid of a Computer*, Vera Molnar

*Hackers and Painters*, Paul Graham

*The Library of Babel*, Jorge Luis Borges

*The Garden of Forking Paths*, Jorge Luis Borges

## Materials and Supplies
-Access to your FTP server.

## Class Resources

[W3 Schools](http://www.w3schools.com/)

[freeCodeCamp]( https://www.freecodecamp.org/challenges/say-hello-to-html-elements )

[Unix for Mac Users](https://www.lynda.com/Mac-OS-X-10-6-tutorials/Unix-for-Mac-OS-X-Users/78546-2.html)

[GitHub desktop client](https://desktop.github.com/)

[Git on Lynda.com](https://www.lynda.com/GitHub-training-tutorials/1384-0.html)


[Special Characters](http://www.w3schools.com/charsets/ref_utf_latin1_supplement.asp)

[CSS Tools: Reset CSS](http://meyerweb.com/eric/tools/css/reset/)

[Javascript Reference]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference )

[Get Started with the Google Fontns API](https://developers.google.com/fonts/docs/getting_started)

[Introduction to jQuery](https://www.edx.org/course/introduction-jquery-microsoft-dev208x-3)

[Interactivity with JavaScript | Coursera](https://www.coursera.org/learn/javascript#%20)

[HTML, CSS, and Javascript for Web Developers | Coursera](https://www.coursera.org/learn/html-css-javascript-for-web-developers)

[Full Stack Web and Multiplatform Mobile App Development | Coursera](https://www.coursera.org/specializations/full-stack-mobile-app-development)

[Intro to JavaScript | Udacity](https://www.udacity.com/course/intro-to-javascript--ud803)

[A-Frame](https://aframe.io)   

### FTP ( File Transfer Protocol )
You should have received access to a folder on the newschool servers from IT services. If not you will need to get that information from them. Inside this folder (also known as a directory) is another folder named *public_html*. This folder is viewable online at the address you have received.

To access this folder and upload your site:
Option 1: Use Cyberduck or other FTP program.
- Download an FTP program like Cyberduck.
- Set the mode to SFTP
- Input the correct name, password, and port number.
You can now upload files and folders.
Option 2: Use the Terminal
- Open the application _Terminal_ on your computer.
- Navigate to the folder containing your site's folder using the *cd* command. example: cd Documents/school/creative\ computing/mySiteFolder
- You can check the contents of this folder with *ls* (list). The folder containg your site should be in this list of files and folders.
- Next you will access the remote folder with _sftp_. Type the following into the terminal and press return.
    sftp -P 222 yourUserName@b.parsons.edu.
- After entering your password you will be in the remote server. *ls* to list the contents of a folder. *cd public_html* to move into that folder.
- Now create a folder to hold your site by typing _mkdir yourSiteFoler_
- Move into the folder you created with _cd yourSiteFoler_
- Now you can use the *put* command. *put -R mySiteFolder. Your site is now online. and available at the http://b.parsons.edu/~yourUserName/yourSiteFolder


### Code Editors:
Textwrangler
[Brackets - A modern, open source code editor that understands web design.](http://brackets.io/)
[Atom](https://atom.io/)
[Bare Bones Software | BBEdit 11](http://www.barebones.com/products/bbedit/)

## New School Resources

The university provides many resources to help students achieve academic and artistic excellence. These resources include:

- The University (and associated) Libraries: http://library.newschool.edu
- The University Learning Center: http://www.newschool.edu/learning-center

For additional help with coursework assigned during the semester, you are encouraged to schedule tutoring sessions at the University Learning Center (ULC). Individual appointments are offered in Writing (all levels), Math, Adobe, Computer Programming, Oral Presentations and Time Management. Sessions are interactive, with both tutor and student participating. Appointments can be scheduled on Starfish or you can stop by for a walk-in session. The ULC is located on the 6th floor of 66 West 12th street. Academic and skill-building workshops are also offered. For a complete list of services, workshops, and general information, visit www.newschool.edu/learning-center.

- [University Disabilities Service](http://www.newschool.edu/student-disability-services/)

In keeping with the university’s policy of providing equal access for students with disabilities, any student with a disability who needs academic accommodations is welcome to meet with me privately. All conversations will be kept confidential. Students requesting any accommodations will also need to contact Student Disability Service (SDS). SDS will conduct an intake and, if appropriate, the Director will provide an academic accommodation notification letter for you to bring to me. At that point, I will review the letter with you and discuss these accommodations in relation to this course.

- Making Center

Faculty who are planning curriculum that makes use of specific resources should contact the Making Center in
advance to coordinate.
The Making Center is a constellation of shops, labs, and open workspaces that are situated across the New
School to help students express their ideas in a variety of materials and methods. We have resources to help
support woodworking, metalworking, ceramics and pottery work, photography and film, textiles, printmaking,
3D printing, manual and CNC machining, and more. A staff of technicians and student workers provide expertise
and maintain the different shops and labs. Safety is a primary concern, so each area has policies for access,
training, and etiquette that students and faculty should be familiar with. Many areas require specific
orientations or trainings before access is granted. Detailed information about the resources available, as well as
schedules, trainings, and policies can be found at [resources.parsons.edu](http://resources.parsons.edu).

## Grading Standards

### Undergraduate
A student’s final grades and GPA are calculated using a 4.0 scale. Please note that while both are listed here, the 4.0 scale does not align mathematically with the numeric scale based on percentages of 100 points.

**A  [4.0; 95 – 100%]**
Work of exceptional quality, which often goes beyond the stated goals of the course

**A- [3.7; 90 – <95%]**
Work of very high quality

**B+ [3.3; 87 – <90%]**
Work of high quality that indicates higher than average abilities

**B  [3.0; 83 – <87%]**
Very good work that satisfies the goals of the course

**B- [2.7; 80 – <83%]**
Good work

**C+ [2.3; 77 – <80%]**
Above-average work

**C  [2.0; 73 – <77%]**
Average work that indicates an understanding of the course material; passable
Satisfactory completion of a course is considered to be a grade of C or higher.

**C- [1.7; 70 – <73%]**
Passing work but below good academic standing

**D  [1.0; 60 – <70%]**
Below-average work that indicates a student does not fully understand the assignments;
Probation level though passing for credit

**F  [0.0; 0 – <60%]**
Failure, no credit

**Grade of W**
The grade of W may be issued by the Office of the Registrar to a student who officially withdraws from a course within the applicable deadline. There is no academic penalty, but the grade will appear on the student transcript. A grade of W may also be issued by an instructor to a graduate student (except at Parsons and Mannes) who has not completed course requirements nor arranged for an Incomplete.

**Grade of Z**
The grade of Z is issued by an instructor to a student who has not attended or not completed all required work in a course but did not officially withdraw before the withdrawal deadline. It differs from an “F,” which would indicate that the student technically completed requirements but that the level of work did not qualify for a passing grade.

**Grades of Incomplete**
The grade of I, or temporary incomplete, may be granted to a student under unusual and extenuating circumstances, such as when the student’s academic life is interrupted by a medical or personal emergency. This mark is not given automatically but only upon the student’s request and at the discretion of the instructor. A Request for Incomplete form must be completed and signed by student and instructor. The time allowed for completion of the work and removal of the “I” mark will be set by the instructor with the following limitations: [You should include one the following standards, depending on the level of your course].

Undergraduate students: Work must be completed no later than the seventh week of the following fall semester for spring or summer term incompletes and no later than the seventh week of the following spring semester for fall term incompletes. Grades of “I” not revised in the prescribed time will be recorded as a final grade of “WF” by the Office of the Registrar.

Graduate students: Work must be completed no later than one year following the end of the class. Grades of “I” not revised in the prescribed time will be recorded as a final grade of “WF” (for Parsons and Mannes graduate students) or “N” (for all other graduate students) by the Office of the Registrar. The grade of “N” does not affect the GPA but does indicate a permanent incomplete.

## Divisional, Program and Class Policies

● Responsibility
Students are responsible for all assignments, even if they are absent.  Late assignments, failure to complete the assignments for class discussion and/or critique, and lack of preparedness for in-class discussions, presentations and/or critiques will jeopardize your successful completion of this course.

● Participation
Class participation is an essential part of class and includes: keeping up with reading, assignments, projects, contributing meaningfully to class discussions, active participation in group work, and coming to class regularly and on time.

● Attendance
Parsons’ attendance guidelines were developed to encourage students’ success in all aspects of their academic programs. Full participation is essential to the successful completion of coursework and enhances the quality of the educational experience for all, particularly in courses where group work is integral; thus, Parsons promotes high levels of attendance. Students are expected to attend classes regularly and promptly and in compliance with the standards stated in this course syllabus.

While attendance is just one aspect of active participation, absence from a significant portion of class time may prevent the successful attainment of course objectives. A significant portion of class time is generally defined as the equivalent of three weeks, or 20%, of class time. Lateness or early departure from class may be recorded as one full absence. Students may be asked to withdraw from a course if habitual absenteeism or tardiness has a negative impact on the class environment.

Whether the course is a lecture, seminar or studio, faculty will assess each student’s performance against all of the assessment criteria in determining the student’s final grade.

● Canvas
Use of Canvas may be an important resource for this class. Students should check it for announcements before coming to class each week.

● Delays
In rare instances, I may be delayed arriving to class.  If I have not arrived by the time class is scheduled to start, you must wait a minimum of thirty minutes for my arrival.  In the event that I will miss class entirely, a sign will be posted at the classroom indicating your assignment for the next class meeting.

● Electronic Devices
The use of electronic devices (phones, tablets, laptops, cameras, etc.) is permitted when the device is being used in relation to the course's work. All other uses are prohibited in the classroom and devices should be turned off before class starts.

● Academic Honesty and Integrity
Compromising your academic integrity may lead to serious consequences, including (but not limited to) one or more of the following: failure of the assignment, failure of the course, academic warning, disciplinary probation, suspension from the university, or dismissal from the university.

Students are responsible for understanding the University’s policy on academic honesty and integrity and must make use of proper citations of sources for writing papers, creating, presenting, and performing their work, taking examinations, and doing research. It is the responsibility of students to learn the procedures specific to their discipline for correctly and appropriately differentiating their own work from that of others. The full text of the policy, including adjudication procedures, is found at
http://www.newschool.edu/policies/# Resources regarding what plagiarism is and how to avoid it can be found on the Learning Center’s website: http://www.newschool.edu/university-learning-center/student-resources/

The New School views “academic honesty and integrity” as the duty of every member of an academic community to claim authorship for his or her own work and only for that work, and to recognize the contributions of others accurately and completely. This obligation is fundamental to the integrity of intellectual debate, and creative and academic pursuits. Academic honesty and integrity includes accurate use of quotations, as well as appropriate and explicit citation of sources in instances of paraphrasing and describing ideas, or reporting on research findings or any aspect of the work of others (including that of faculty members and other students). Academic dishonesty results from infractions of this “accurate use”. The standards of academic honesty and integrity, and citation of sources, apply to all forms of academic work, including submissions of drafts of final papers or projects. All members of the University community are expected to conduct themselves in accord with the standards of academic honesty and integrity. Please see the complete policy in the Parsons Catalog.

● Intellectual Property Rights: http://www.newschool.edu/policies/#
