import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter((carta) => {
      var cumple_name = true, cumple_c = true, cumple_s = true, cumple_t = true, cumple_r = true;
      if (args.name != '')
       cumple_name = carta.name.toLowerCase().startsWith(args.name.toLowerCase());
      if (args.c )
        cumple_c = (carta.cardClass == args.c);
      if (args.s )
        cumple_s = (carta.set == args.s.name);
      if (args.t )
        cumple_t = (carta.type == args.t);
      if (args.r )
        cumple_r = (carta.rarity == args.r);
        if (cumple_name && cumple_c && cumple_s && cumple_t && cumple_r)
          return true;
        else
        return false;
    });
  }

}
