import { BaseUrl } from "./FetchData";

class PostMessage{
  Message(data) {
    let endPoint = 'contact';
    let response =  fetch(`${BaseUrl}/${endPoint}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(ress => {
        console.log(ress);
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

export default new PostMessage();
