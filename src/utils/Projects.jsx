import { BaseUrl } from "./FetchData";

class GetProjects{
  Projects(id) {
    let endPoint = 'projects';
    let response =  fetch(`${BaseUrl}/${endPoint}/${id?id:""}`, {
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

export default new GetProjects();
