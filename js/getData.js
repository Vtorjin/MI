export function getData(method, url, property) {
  return new Promise((resolve,reject) => {
    let xhr = null;
    if (window.ActiveXObject) {
      xhr = new ActiveXObject();
    } else {
      xhr = new XMLHttpRequest();
    }

    xhr.open(method, url,true);

    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          const d = JSON.parse(xhr.responseText);
          resolve(d[property]);
        } else {
          reject(xhr.status);
        }
      }
    };
  });
}
