import { BaseUrl } from "./FetchData";

class GetComments{
  Commnets() {
    let endPoint = 'feedback';
    let response =  fetch(`${BaseUrl}/${endPoint}/`, {
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

export default new GetComments();
