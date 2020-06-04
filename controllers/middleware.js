import Router from "next/router";

import FormData from "form-data";

export const DOMAIN = "https://api.buildyourpath.it"; // https://api.buildyourpath.it or http://127.0.0.1:8000

export const API = `${DOMAIN}/api`;

export async function response(response) {
  const status = response.status;

  let data = null;

  try { data = await response.json(); }
  finally { return { status, data }; }
}

export async function authorization(url, method = "GET", body = null) {
    const headers = {
      "Accept": "application/json",
      "Authorization": `Bearer ${window.localStorage.getItem("access-token")}`
    };

    if(body instanceof FormData == false)
      headers["Content-Type"] = "application/json";

    return await fetch(url, {
      method, headers,
      body: body ? (body instanceof FormData ? body : JSON.stringify(body)) : null
    });
  }
  
export async function middleware(url, method = "GET", body = null) {
    let response = await authorization(url, method, body);
  
    if(response.status == 401) {
      const refresh = await fetch(`${API}/token/refresh`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          refresh: window.localStorage.getItem("refresh-token") 
        })
      });
  
      if(refresh.status == 401 || refresh.status == 400)
        Router.push("/logout", undefined, { shallow: true });
        
      const data = await refresh.json();
  
      window.localStorage.setItem("access-token", data.access);
  
      response = await authorization(url, method, body);
    }
  
    return response;
  }