import {Injectable} from "@angular/core";
import {TranslateService} from 'ng2-translate';

export interface LanguageCallback {
    setLanguage(appLang: string): void;
}

@Injectable()
export class LanguageService {

  public language = "en"
  constructor(public translate:TranslateService){


  }
    setLanguage(language){
        // let browserLang = this.translate.getBrowserLang();
        // let language:string ;
        // language  = browserLang.match(/en|ta/) ? browserLang : 'en';
        // language = 'ta';
        this.language = language;
        this.translate.use(language);
        $('body').addClass(language+"-font");
        this.translate.get('TITLE').subscribe((res: string) => {
           $('title').text(res);
        });

    }

    getLanguage(){
      return this.language;
    }


}
