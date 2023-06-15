import { BaseUrl } from "./FetchData";

class PostCourse{
  Course(data) {
    let endPoint = 'enrollcourse';
    let response =  fetch(`${BaseUrl}/${endPoint}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(ress => {
        return ress.json() && ress.status;
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

export default new PostCourse();
