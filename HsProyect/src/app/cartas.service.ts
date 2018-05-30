import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class CartasService {
  public listaCartas: any;
  public contador: any;
  private subjectCartas: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) {
    this.contador = 1;
  }
  loadData() {
    this.http.get('https://api.hearthstonejson.com/v1/18336/enUS/cards.collectible.json').subscribe(
      (data: Array<any>) => {
       this.listaCartas = data.filter((carta) => {
          return !carta.id.toLowerCase().startsWith('hero');
        });
       this.subjectCartas.next(this.listaCartas.slice(0, 21));
      });
  }
  refresh(): Observable <any> {
    return this.subjectCartas.asObservable();
  }
  masCartas(){
    return this.listaCartas.slice(this.contador * 21, ++this.contador * 21)
  }
}
