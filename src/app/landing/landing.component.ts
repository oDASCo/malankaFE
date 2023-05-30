import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as AOS from 'aos';
// import {NgxSpinnerService} from "ngx-spinner";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  currentLang = 'PL';
  isLnagListOpened = false;
  langs = [
    {
      name: 'PL',
      selected: true
    },
    {
      name: 'RU',
      selected: false
    },
    {
      name: 'EN',
      selected: false
    },
    {
      name: 'UA',
      selected: false
    },
    {
      name: 'BY',
      selected: false
    },
  ];

  isMobileMenuOpened = false;

  menuItems = [
    {
      name: 'main',
      link: '#main',
      opened: true
    },
    {
      name: 'classes',
      link: '#classes',
      opened: false
    },
    {
      name: 'instructors',
      link: '#instructors',
      opened: false
    },
    {
      name: 'prices',
      link: '#prices',
      opened: false
    },
    {
      name: 'FAQ',
      link: '#faq',
      opened: false
    },
    {
      name: 'schedule',
      link: 'https://app.fitssey.com/malanka/frontoffice',
      opened: false
    }
  ];

  pricesMonth = [
    {
      name: '4classes',
      desc1: 'validFor1month',
      desc2: 'anyTypesOfGroup',
      price: '155'
    },
    {
      name: '8classes',
      desc1: 'validFor1month',
      desc2: 'anyTypesOfGroup',
      price: '280'
    },
    {
      name: '12classes',
      desc1: 'validFor1month',
      desc2: 'anyTypesOfGroup',
      price: '380'
    }
  ];

  pricesOne = [
    {
      name: 'PDEDance',
      desc1: 'oneClass',
      desc2: 'groupClassesPD',
      price: '45'
    },
    {
      name: 'stretching',
      desc1: 'oneClass',
      desc2: 'groupClassesStretching',
      price: '35'
    },
    {
      name: 'fitnessStrengthClass',
      desc1: 'oneClass',
      desc2: 'groupClassesFitness',
      price: '30'
    }
  ];

  pricesNoLimit = [
    {
      name: 'weekNoLimit',
      desc1: 'valid1Week',
      desc2: 'anyTypesOfGroup',
      price: '170'
    },
    {
      name: 'monthNoLimit',
      desc1: 'validFor1month',
      desc2: 'anyTypesOfGroup',
      price: '420'
    }
  ];

  pricesOpen = [
    {
      name: 'openStudio1Class',
      desc1: 'oneClassWithoutInstr',
      desc2: '',
      price: '20'
    },
    {
      name: 'openStudio1Month',
      desc1: 'allowOpenStudio',
      desc2: '',
      price: '180'
    }
  ];

  pricesIndiv = [
    {
      name: 'indiv1Hour',
      desc1: 'oneClass',
      desc2: 'indivWithInstructor',
      price: '130'
    },
    {
      name: 'indiv4Hour',
      desc1: 'indivWithInstructor',
      desc2: '',
      price: '410'
    }
  ];

  pricesMulti = [
    {
      name: 'multisport',
      desc1: 'validFor1visit',
      desc2: 'anyTypesOfGroup',
      price: '0'
    },
    {
      name: 'sale20',
      desc1: 'for4812Cards',
      desc2: 'anyTypesOfGroup',
      price: ''
    }
  ];

  classes = [
    {
      name: 'Pole Dance',
      img: "/assets/images/poledance-min.jpeg",
      desc: 'poleDanceDesc'
    },
    {
      name: 'Exotic',
      img: "/assets/images/exotic-min.jpeg",
      desc: 'exoticDesc'
    },
    {
      name: 'stretching',
      img: "/assets/images/stretch-min.jpeg",
      desc: 'stretchingDesc'
    },
    {
      name: 'Heels',
      img: "/assets/images/heels-min.jpeg",
      desc: 'heelsDesc'
    },
    {
      name: 'workouts',
      img: "/assets/images/wzmoc-min.jpeg",
      desc: 'workoutsDesc'
    },
    {
      name: 'Open Studio',
      img: "/assets/images/open-min.jpeg",
      desc: 'openStudioDesc'
    },
    {
      name: 'Jazz-funk',
      img: "/assets/images/jazzfunk-min.jpeg",
      desc: 'jazzFunkDesc'
    }
  ];
  classesTranslate = 0;

  currentInstr = 0;

  instructors = [
    {
      id: 0,
      name: 'Kinga Stańdo',
      title: 'instructorPDS',
      img: '/assets/images/1-min.jpeg',
      desc: 'descKinga'
    },
    {
      id: 1,
      name: 'Klaudia Leksztoń',
      title: 'instructorPD',
      img: '/assets/images/2-min.jpeg',
      desc: 'descKlaudia'
    },
    {
      id: 2,
      name: 'Natalia Chaplia',
      title: 'instructorPDES',
      img: '/assets/images/4-min.jpeg',
      desc: 'descNatalia'
    },
    {
      id: 3,
      name: 'Alina Bondur',
      title: 'instructorES',
      img: '/assets/images/5-min.jpeg',
      desc: 'descAlina'
    },
    {
      id: 4,
      name: 'Darya Lazouskaya',
      title: 'instructorS',
      img: '/assets/images/8-min.jpeg',
      desc: 'descDarya'
    },
    {
      id: 5,
      name: 'Tatiana Batler',
      title: 'instructorPDES',
      img: '/assets/images/7-min.JPG',
      desc: 'descTatiana'
    },
    {
      id: 6,
      name: 'Nastya Harchenko',
      title: 'instructorS',
      img: '/assets/images/3-min.jpeg',
      desc: 'descNastya'
    },
    {
      id: 7,
      name: 'Daria Ciesielska',
      title: 'instructorPD',
      img: '/assets/images/10.jpeg',
      desc: 'descDaria'
    },
    {
      id: 8,
      name: 'Viktoriia Osipovych',
      title: 'instructorJH',
      img: '/assets/images/6-min.JPG',
      desc: 'descViktoria'
    },
    {
      id: 9,
      name: 'Tatsiana Kazanouskaya',
      title: 'instructorW',
      img: '/assets/images/9-min.jpeg',
      desc: 'descTanya'
    }
  ];

  faqList = [
    {
      question: "whatClassesChoose",
      answer: 'Pole Dance Intro',
      opened: false
    },
    {
      question: 'canIGoWithMulti',
      answer: 'canIGoWithMultiAnsw',
      opened: false
    },
    {
      question: 'howMuchPeopleOnOne',
      answer: 'howMuchPeopleOnOneAnsw',
      opened: false
    },
    {
      question: 'howToReserve',
      answer: 'howToReserveAnsw',
      opened: false
    },
    {
      question: 'howCanICancelClass',
      answer: 'howCanICancelClassAnsw',
      opened: false
    },
    {
      question: 'doYouHaveAirCond',
      answer: 'doYouHaveAirCondAnsw',
      opened: false
    }
  ];

  loading = true;

  constructor( private translate: TranslateService) {
    //spinner.show()
  }

  ngOnInit(): void {
    AOS.init();
    Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
      this.loading = false;
      //this.spinner.hide();
    });
  }

  nextClass() {
    console.log(window.innerWidth);
    if (window.innerWidth > 1024) {
      if (this.classesTranslate <= 730) {
        this.classesTranslate += 290;
      }
    } else if (window.innerWidth > 500) {
      if (this.classesTranslate <= 700) {
        this.classesTranslate += 230;
      }
    } else if (window.innerWidth > 370) {
      if (this.classesTranslate <= 1750) {
        this.classesTranslate += 335;
      }
    }
    else {
      if (this.classesTranslate <= 1750) {
        this.classesTranslate += 320;
      }
    }

  }
  prevClass() {
    if (window.innerWidth > 1024) {
      if (this.classesTranslate !== 0) {
        this.classesTranslate -= 290;
      }
    } else if (window.innerWidth > 500) {
      if (this.classesTranslate !== 0) {
        this.classesTranslate -= 230;
      }
    } else {
      if (this.classesTranslate !== 0) {
        this.classesTranslate -= 335;
      }
    }

  }

  showInstructorInfo(id: number) {
    if (this.currentInstr !== id) {
      this.currentInstr = id;
      //this.spinner.show();
    }
  }

  openFAQ(id: number) {
    this.faqList[id].opened = !this.faqList[id].opened;
  }

  goToBlock(id: number) {
    this.menuItems.map((item) => {
      return item.opened = false
    });
    this.menuItems[id].opened = !this.menuItems[id].opened;
    this.closeMobileMenu();
  }

  openMobileMenu() {
    this.isMobileMenuOpened = true;
  }

  closeMobileMenu() {
    this.isMobileMenuOpened = false;
  }

  openLangList() {
    this.isLnagListOpened = !this.isLnagListOpened;
  }

  setCurrentLang(lang: string, index: number) {
    this.currentLang = lang;
    this.openLangList();
    this.langs.map((item) => {
      return item.selected = false
    });
    this.langs[index].selected = true;
    this.translate.use(lang.toLocaleLowerCase());
  }

  onImageLoaded() {
    //this.spinner.hide();
  }

}
