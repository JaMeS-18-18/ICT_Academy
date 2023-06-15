import { BaseUrl } from "./FetchData";

class GetAbout{
  About() {
    let endPoint = 'aboutus/1';
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

export default new GetAbout();
