export async function fetchNewtonAPI(url) {
  let response = await fetch(url, {
    method: 'GET'
  });
  let payload = await response.json();
  return payload;
}
