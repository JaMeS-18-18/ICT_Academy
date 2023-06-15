import { BaseUrl } from "./FetchData";

class GetMentors{
  Mentors() {
    let endPoint = 'mentors';
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

export default new GetMentors();
