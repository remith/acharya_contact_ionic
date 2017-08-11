import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AcharyaDetailsPage } from '../acharya-details/acharya-details';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { AcharyaService } from '../../services/acharya-service';



@Component({
  selector: 'list-page',
  templateUrl: 'list.html'
})


export class ListPage {

  errorMessage:any;
  acharya: any;
  currentPageClass = this;
  alphaScrollItemTemplate: string = `<ion-list><ion-item (click)="currentPageClass.ItemTapped($event, item)"><ion-avatar item-left><img src="http://www.chinmayamission.com/wp-content/themes/GCMW/images/{{item.image}}"></ion-avatar><h2>{{item.name}}</h2><p>{{item.city}}</p></ion-item></ion-list>`;
  triggerAlphaScrollChange: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private acharyaService: AcharyaService) {
        this.getAcharyas();

  }

/*this.acharya = [
      { "title": 'Advaitananda', "city":'San Jose', "id": 1000, "contact1": '+1-408-2548392', "email":'swamiadvaita@gmail.com', 'img':'assets/img/sw1.jpg', "add1":'Chinmaya Mission',"add2":'Chinmaya Sandeepany',"add3":'10160 Clayton Road',"state":'California',"zip":'95127',"country":'USA',"about1":'Swami Advaitananda, is presently the resident Acharya of Chinmaya Vibhooti, Kolwan. He has served Mission centres like Indore, Allahabad, Kolkata, Durban and Mumbai. Being an outstanding teacher with a depth beneath his simplicity and humility, Swamiji has taught two batches of students in Vedanta Course in Hindi at Sidhabari and one batch in English at Sandeepany Sadhanalaya, Mumbai as the Acharya -in-charge.',"about2":'Endowed with a saintly heart overflowing with love and compassion for all and a pleasing personality, he is open to all those who seek his advice. He lives the philosophy he preaches, ever devoted to His Master and the knowledge of the ancient scriptures.' },

    { "title": 'Atmadevananda', "city":'Kolhapur', "id": 1001, "contact1": '+91-9623074457', "email":'atmadeva@rediffmail.com', 'img':'assets/img/sw2.jpg', "add1":'Chinmaya Seva Trust',"add2":'Chinmaya Sandeepany Ashram',"add3":'Top Sambhapur',"state":'Maharashtra',"zip":'416122',"country":'India'},

    { "title": 'Atmeshananda', "city":'Aurangabad', "id": 1002, "contact1": '+91-240-3201107', "contact2":'9960511415', "email":'br.shravan10@gmail.com', 'img':'assets/img/sw3.jpg', "add1":'Chinmaya Mission',"add2":'Chinmaya Siddhanjali',"add3":'10, Devgiri Colony',"state":'Maharashtra',"zip":'431001',"country":'India'},

    { "title": 'Bhaskarananda', "city":'Mumbai', "id": 1003, "contact1": '+91-22-25872367', "contact2":'32900471', "email":'ccmt@chinmayamission.com', 'img':'assets/img/sw4.jpg', "add1":'Tara Cultural Trust',"add2":'Saki Vihar Road',"add3":'Powai Park Drive',"state":'Maharashtra',"zip":'400072',"country":'India'},

    { "title": 'Bodhatmananda', "city":'Mumbai', "id": 1004, "contact1": '+91-022-28570368', "email":'soham.brahma@gmail.com', 'img':'assets/img/sw5.jpg', "add1":'Tara Cultural Trust',"add2":'Sandeepany Sadhanalaya',"add3":'Saki Vihar Road, Powai',"state":'Maharashtra',"zip":'400072',"country":'India',"about1":'Swamiji was introduced to various saints and sages in his early childhood. His spiritual call came when he read Pujya Gurudev Swami Chinmayananda’s commentary on the Bhagavad Gita. Not long thereafter, he decided to dedicate his life to the study of scriptures and to the service of humanity. He served for five years at Chinmaya Mission Orlando (1996-2000) in various capacities and subsequently participated in Chinmaya Mission’s 50th anniversary celebrations. In 2002 he joined Sandeepany Sadhanalaya Mumbai where he studied Vedanta under the grace and guidance of Pujya Guruji Swami Tejomayanandaji and the tutelage of Swami Ishwaranandaji. In 2004, he was appointed as Acharya of Sandeepany San Jose, Chinmaya Mission San Jose (CMSJ) where he had been conducting discourses on Vedanta in and around the San Francisco Bay Area. During his tenure at CMSJ, he has conducted numerous Satsangs, Vedanta Classes, Jnana Yagnas, camps, and retreats all over the United States, Canada and India.',"about2":'He has a loving personality, sense of humor, and intense passion for the study of Vedanta as well as mastery over scriptures. His unique style of teaching and imparting the knowledge of the scriptures through a systematic approach has provided practical instructions for seekers in daily life and has brought transformation to many.',"about3":'Swami Bodhatmananda was the resident Acharya of the 16th Residential Vedanta Course at Sandeepany Sadhanalaya, Mumbai, India and will be continuing as the resident Acharya of the 17th Residential Vedanta Course in 2017.'},

    { "title": 'Medhajananda', "city":'Raigad Dist.', "id": 1005, "contact1": '+91-2192-264167', "email":'brprayagchaitanya@gmail.com', 'img':'assets/img/sw6.jpg', "add1":'Chinmaya Mission Khopoli',"add2":'Chinmaya Jeevan',"add3":'Mogalwadi, TAL.Khalapur',"state":'Maharashtra',"zip":'410203',"country":'India'},

    { "title": 'Nirbhayananda Saraswati', "city":'Mumbai', "id": 1006, "contact1": '+91-9321285154', "contact2":'+91-250-2345513',"email":'sw.nirbhayananda@gmail.com', 'img':'assets/img/sw7.jpg', "add1":'Chinmaya Mission Vasai',"add2":'D-101, Apeksha Apts',"add3":'Sai Nagar, Palghar (Dist.)',"state":'Maharashtra',"zip":'401202',"country":'India',"about1":'Brahmachari Pavan Chaitanya hailing from South India received his formal education overseas. A Software professional in his purvashram was involved with Chinmaya Mission and it’s activities from his childhood. Served the Chinmaya Mission Mumbai as it”s General Secretary for the Youth Wing in late 90’s took up to learning of Vedanta as a full time student in 2002-2004 under the tutelage of Sw. Ishwaranandaji and received the name Br. Pavan Chaitanya in 2004 by Pujya Guruji Sw. Tejomayanandaji.',"about2":'Ever since his posting in Chinmaya Mission Mumbai as the resident acharya at Chinmaya Bhakti, Borivali, the Area has seen a steady grow in it’s activities. He is proficient in English, Hindi and Malayalam alike and has been conducting workshops in B’ Schools, Educational Institutions, Corporate Offices',"about3":'He is known for his sessions on parenting, Stress buster modules and talks on Human Values based on Bhagavat Geeta and Upanishads. He has addressed seminars on Indian approach to Management and also uses movie workshops and Outdoor-Experiential-Learning (OEL) through adventurous treks, etc. effectively. He has been an inspiration to the Chinmaya Yuva Kendra (CHYK), the youth wing of Chinmaya Mission.',"about4":'Br. Pavan Chaitanya wins hearts with his simplicity and affection to one and all around him. He is a Tech Savvy and passionate about painting and loves playing Badminton. He is known for his focus and clarity in the spiritual Path.' },

    { "title": 'Pratyayananda', "city":'Nanded', "id": 1007, "contact1": '+91-2462-25630', "email":'swami_pratyayananda@rediffmail.com', 'img':'assets/img/sw8.jpg', "add1":'Chinmaya Mission Nanded',"add2":'Chimaya Sevashram',"add3":'93, Vivek Nagar',"state":'Maharashtra',"zip":'431605',"country":'India'},

    { "title": 'Sacchidananda', "city":'Mumbai', "id": 1008, "contact1": '+91-22-28573068', "contact2":'9945288271',"email":'sacchidananda@hotmail.com', 'img':'assets/img/sw9.jpg', "add1":'Tara Cultural Trust',"add2":'Sandeepany Sadhanalaya',"add3":'Saki Vihar Road, Powai',"state":'Maharashtra',"zip":'400072',"country":'India',"about1":'In his purvashrama, Swami Sacchidananda, was known as Shri Jagadish Acharya. After completing his academic studies in his hometown Mangalore, he left for Mumbai in 1977 and worked as an interior decorator with Bhabha Atomic Research Centre. As an atheist, Shri Jagadish Acharya was not aware of the spiritual way of life. According to him, religion was nothing but bundle of superstition and escapism from dynamic life. However, after attending one of Swami Chinmayananda’s talks, his way of thinking was transformed and he decided to join Chinmaya Mission for deeper study of Hindu Religion and Indian Culture.',"about2":'He joined Sandeepany Sadhanalaya, Mumbai for Brahmacharins course in 1986 and after three years study of Vedanta and Sadhana, Shri Jagadish Acharya was initiated into Brahamcharya Deeksha and became Br. Sarwatma Chaitanya. Initially he was the Acharya-In-Charge of Chinmaya Mission, Mulund, Mumbai and served there for six years. He also served as the Director of Hong Kong Chinmaya Foundation for six years.At present he is the Acharya-In-Charge of Chinmaya Vidyalaya, Koramangala, Bangalore and looking after various activities of Chinmaya Mission.',"about3":'He is a versatile speaker and his uniqueness is that he can relate well with people of all the age groups. His talks are very humorous and in his unique style he explains subtle Vedanta in a simple manner. Swamiji has visited UK, Singapore, China, Indonesia and many Far East countries and spread Vedanta to the modern world. He conducts jnana yajnas for spiritual seekers, camps for children, workshops for youth and business executives. He is very popular with youth. His talks on “Live-In-Style” have transformed the lives of many people, especially youth in India and abroad.'},

    { "title": 'Shivatatvananda', "city":'Dahanu', "id": 1009, "contact1": '+91-261-2668263', "contact2":'9427120793',"email":'dinesh_92@hotmail.com', 'img':'assets/img/sw10.jpg', "add1":'6-Jalaram Darshan',"add2":'Gopipura,Dahanu Road',"add3":'Thane Dist.',"state":'Maharashtra',"zip":'401602',"country":'India',"about1":'Previously known as Br. Ashutosh Chaitanya is the current Acharya of Surat Chinmaya Mission. He also takes classes in Dahanu near Mumbai. He gives talks in both Hindi and Gujarati languages.',"about2":'He was initiated into sanyasa by Swami Tejomayananda on 12th February, 2010, the Mahashivratri day.'},

    { "title": 'Siddheshananda', "city":'Pune', "id": 1010, "contact1": '+91-9890939562', "email":'siddheshananda@gmail.com', 'img':'assets/img/sw11.jpg', "add1":'Chinmaya Mission Pune Chinmaya Maauli Ashram',"add2":'Chinmaya Nagar, Survey Number 16',"add3":'Wadgaon Shinde Road, Lohagaon',"state":'Maharashtra',"zip":'411047',"country":'India',"about1":'“The book Self-Unfoldment transformed my life”, says Brahmachari Shailesh Chaitanya, who was inspired by Swami Chinmayananda’s work, when he started attending study classes while at school in Aurangabad. He graduated in Electronics & Telecommunication Engineering, and was absorbed into his college as a lecturer. He later served in the telephone industry and also as a system administrator for the computer centre of Indian Institute of Technology (I.I.T.) Powai, Mumbai. Though he secured admission for his post graduation in M.Tech., the urge to attain the knowledge of Vedanta was so strong that he opted to join the Vedanta Training Course at Sandeepany Sadhanalaya, Powai in the year 1998.',"about2":'After completion of two years of rigorous training under the guidance of Swami Tejomayananda and the tutelage of Swami Chidananda, he received the Brahmachari Deeksha in year 2000. Thereafter he has been serving as the resident Acharya, at Chinmaya Mission Pune.',"about3":'He is also the Chief Coordinator of the All India Chinmaya Yuva Kendra, for the youth activities in Maharashtra. He is a true inspiration to the youth and interacts with them, educating them with values and Vedanta through talks and workshops at colleges, regular study classes, camps and treks around Maharashtra.',"about4":'He is a good orator and conducts regular talks, study classes and life-management workshops for senior citizens in English, Hindi and Marathi. He also conducts training sessions for sevaks (volunteers), to conduct value-education Balavihar classes for children. Chinmaya Jagruti, the monthly newsletter of Pune centre, is compiled and published under his able guidance.', "about5":'He is a tech-savvy person, likes travelling and being one with nature. His core interest though is the study and application of Vedanta in our lives and he strives to propagate the same.' }

    ];*/

/*    let country = navParams.get('country');
    let salutation = navParams.get('salutation');
    
    if(country){

      this.getAcharyabyCountry(country);
    }
    else if(salutation){

      this.getAcharyabySalutation(salutation);
    }else{

      this.getAcharyas();
    }*/

  getAcharyabySalutation(salutation: String) {
       console.log("InsidegetAcharyabySalutation "+ salutation);
       this.acharyaService.getAcharyabySalutation(salutation)
        .subscribe(
            posts => this.acharya = posts,
            error => this.errorMessage = <any>error);
     }
  getAcharyabyCountry(country: String) {
       console.log("InsidegetAcharyabyCountry "+ country);
       this.acharyaService.getAcharyabyCountry(country)
        .subscribe(
            posts => this.acharya = posts,
            error => this.errorMessage = <any>error);
     }

  getAcharyas() {
     console.log("InsidegetAcharya " );
    this.acharyaService.getAcharyas();
        /*.subscribe(
            posts => this.acharya = posts,
            error => this.errorMessage = <any>error);*/
  }


 

  ItemTapped(event, item) {
    this.navCtrl.push(AcharyaDetailsPage, {
      item: item
    });
  }
  BackHome(){
    this.navCtrl.setRoot(HelloIonicPage);
  }

}
