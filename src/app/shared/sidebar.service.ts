import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class SidebarService {

  public isMenuOpened = new BehaviorSubject(false);

  constructor(
  ) {}



}
