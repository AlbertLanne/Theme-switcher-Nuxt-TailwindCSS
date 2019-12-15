export class theme {


  constructor(theme) {
    if (typeof window !== 'undefined') {
      this.theme = localStorage.getItem('theme') || 'theme-light'
    }
  }

  getTheme() {
    return `${this.theme}`;
  }

  toggleTheme(theme) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', this.theme)
    }
  }


}


/* to import the class
*  import {theme} from "ThemeSwitcher.js";
*/
