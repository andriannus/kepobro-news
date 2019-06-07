import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'article',
})

export class ArticlePipe implements PipeTransform {
  transform(article: string) {
    if (!article) {
      return false;
    }

    let formattedArticle = '';

    const tempArr = article.split('');
    const startSub = tempArr.indexOf('[');
    const finishSub = tempArr.indexOf(']');
    const substractSub = Number(finishSub) - Number(startSub) + 1;
    const findString = article.substr(startSub, substractSub);

    formattedArticle = article.replace(findString, '');

    return formattedArticle;
  }
}
