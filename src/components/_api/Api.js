const baseUrl =
  process.env.REACT_APP_STAGE === "dev"
    ? process.env.REACT_APP_API_ENDPOINT + ":4500"
    : process.env.REACT_APP_API_ENDPOINT;

export function ResponseHandler(res) {
  if (res.ok) return res;
  else throw res.json();
}

export function sendContact(comments) {
  return fetch(baseUrl + "/email/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify(comments),
  }).then(ResponseHandler);
}

export function sendOrder(basketItem, customerInfo) {
  return fetch(baseUrl + "/email/sendOrder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify({
      orders: JSON.stringify(basketItem),
      customerInfo: customerInfo,
    }),
  }).then(ResponseHandler);
}
