import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterdataService {
  userid!: string;
  fillMoreDetails!: boolean;
  courseid!: string;
  title!: string;
  sectionid!: string;
  sectiontitle!: string;
  // timezones = [
  //   { name: '(GMT -12:00) Eniwetok, Kwajalein', time: '-12:00' },
  //   { name: '(GMT -11:00) Midway Island, Samoa', time: '-11:00' },
  //   { name: '(GMT -10:00) Hawaii', time: '-10:00' },
  // ];

  // countrycodes = [
  //   { countryname: 'Afghanistan', code: 'AF' },
  //   { countryname: 'Aland Islands', code: 'AX' },
  //   { countryname: 'Albania', code: 'AL' },
  // ];
  constructor() {}
}
