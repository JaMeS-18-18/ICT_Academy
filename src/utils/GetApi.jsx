import { BaseUrl } from "./FetchData";

class GetCourse{
  CourseCategory() {
    let endPoint = 'courses-category';
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
  
  CourseCategoryChild(id) {
    let endPoint = 'courses';
    let response =  fetch(`${BaseUrl}/${endPoint}/?category=${id}`, {
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
  OneCourse(id) {
    let endPoint = 'courses';
    let response =  fetch(`${BaseUrl}/${endPoint}/${id}`, {
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

export default new GetCourse();
