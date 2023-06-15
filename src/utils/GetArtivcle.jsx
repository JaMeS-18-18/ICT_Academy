import { BaseUrl } from "./FetchData";

class GetArticle{
  Article(id) {
    let endPoint = 'article';
    let response =  fetch(`${BaseUrl}/${endPoint}/${id?id:''}`, {
      method: 'GET',
    })
      .then(ress => {
        return ress.json();
      })
      .then(json => {
        return json;
      })
      .catch(err => {
        return err;
      });

    return response;
  }
}

export default new GetArticle();
