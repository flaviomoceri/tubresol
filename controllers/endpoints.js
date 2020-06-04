import { 
    DOMAIN, API, 
    response, 
    authorization, middleware 
} from "./middleware";

const fetch = require("node-fetch");

/**
 * Registra un nuovo utente con un nuovo profilo.
 * 
 * ```
 * {
 *    username: string,
 *    email: string,
 *    password: string,
 *    first_name: string,
 *    last_name: string
 * }
 * ```
 * 
 * @remarks POST /api/profiles
 */
export async function registration(body) {
  const res = await fetch(`${API}/profiles`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  });

  return await response(res);
}

/**
 * Esegue il login per un utente e in caso di successo ritorna l'access-token e il refresh-token da memorizzare nel window.localStorage.
 * 
 * ```
 * {
 *    username: string,
 *    password: string
 * }
 * ```
 * 
 * @remarks POST /api/token
 */
export async function login(body) {
  const res = await fetch(`${API}/token`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  });

  return await response(res);
}

/**
 * Verifica un utente appena registrato rendendolo attivo.
 * 
 * @remarks HEAD /api/profiles/verification?id=&token=
 */
export async function verification(id, token) {
  const res = await fetch(`${API}/profiles/verification?id=${id}&token=${token}`, {
    method: "HEAD",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
  });

  return await response(res);
}

/**
 * Invia una richiesta di cambio password utilizzando l'email del profilo a cui cambiarla.
 * 
 * @remarks HEAD /api/profiles/password?email=
 */
export async function password(email) {
  const res = await fetch(`${API}/profiles/password?email=${email}`, {
    method: "HEAD",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
  });

  return await response(res);
}

/**
 * Cambia la password per un profilo che ne ha richiesto il reset.
 * 
 * ```
 * {
 *    password: string -> 'La nuova password'
 * }
 * ```
 * 
 * @remarks PATCH /api/profiles/password?id=&token=
 */
export async function reset(id, token, body) {
  const res = await fetch(`${API}/profiles/password?id=${id}&token=${token}`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  });

  return await response(res);
}

/**
 * Ottiene i dati relativi a un utente utilizzando il suo username.
 * 
 * @remarks GET /api/profiles/<str:username>
 */
export async function profile(username) {
  const res = await fetch(`${API}/profiles/${username}`);

  return await response(res);
}

/**
 * Ottiene i dati completi di un post utilizzando il suo slug.
 * 
 * @remarks GET /api/posts/<str:slug>
 */
export async function post(slug) {
  const res = await fetch(`${API}/posts/${slug}`);

  return await response(res);
}

/**
 * Ottiene tutti i posts della home utilizzando diversi filtri possibili.
 * 
 * @remarks GET /api/posts?category=&tags=&filter=
 */
export async function posts({ filter = new String(), category = new String(), tags = new Array() } = {}) {
  tags = tags.join(",");

  const res = await fetch(`${API}/posts?category=${category}&tags=${tags}&filter=${filter}`);

  return await response(res);
}

/**
 * Ottiene tutti le categories esistenti e presenti nel DataDOMAIN.
 * 
 * @remarks GET /api/categories
 */
export async function categories() {
  const res = await fetch(`${API}/categories`);

  return await response(res);
}

/**
 * Ottiene tutti i tags utilizzati e presenti nel DataDOMAIN.
 * 
 * @remarks GET /api/tags
 */
export async function tags() {
  const res = await fetch(`${API}/tags`);

  return await response(res);
}

/**
 * Ottiene diversi dati riguardanti le analytics dell'API.
 * 
 * @remarks GET /api/analytics
 */
export async function analytics() {
  const res = await fetch(`${API}/analytics`);

  return await response(res);
}

/**
 * Ottiene l'ultimo Log per l'URL utilizzato.
 * 
 * @remarks GET /api/logs?url=
 */
export async function logs(url) {
  const res = await fetch(`${API}/logs?url=${url}`);

  return await response(res);
}

/**
 * Ottiene i dati relativi all'utente loggato.
 * 
 * @remarks GET /api/profiles
 */
export async function user() {
  const res = await middleware(`${API}/profiles`);

  return await response(res);
}

/**
 * Modifica diversi campi dell'utente loggato.
 * 
 * ```
 * {
 *    title: string -> 'Developer'
 *    description: string -> 'Una descrizione su di me...'
 *    linkedin: string -> 'https://www.linkedin.com/in/davide-casale-2898b7174'
 *    github: string -> 'https://www.github.com/Davi0k'
 *    telephone: string -> '+393402598159'
 * }
 * ```
 * 
 * @remarks PATCH /api/profiles
 */
export async function patch(body) {
  const res = await middleware(
    `${API}/profiles`, 
    "PATCH", 
    body
  );

  return await response(res);
}

/**
 * Crea un nuovo post e lo pubblica sul servizio.
 * 
 * ```
 * {
 *    title: string -> 'Come diventare uno sviluppatore'
 *    content: string -> 'Il contenuto del post...'
 *    category: string -> 'Gaming'
 *    tags: string[] -> ['test', 'question']
 * }
 * ```
 * 
 * @remarks POST /api/posts
 */
export async function create_post(body) {
  const res = await middleware(
    `${API}/posts`, 
    "POST", 
    body
  );

  return await response(res);
}

/**
 * Permette la modifica del contenuto, del titolo (e di conseguenza dello slug) e/o della visibilità di un post
 * esistente utilizzando il suo ID.
 * 
 * Possono essere inclusi uno o più campi nel body.
 * 
 * ```
 * {
 *    title: string -> 'Il titolo aggiornato'
 *    content: string -> 'Il contenuto del post aggiornato...'
 *    visible: boolean -> true | false
 * }
 * ```
 * 
 * @remarks PATCH /api/posts/<int:id>
 */
export async function update_post(id, body) {
  const res = await middleware(
    `${API}/posts/${id}`, 
    "PATCH", 
    body
  );

  return await response(res);
}

/**
 * Elimina un post dell'utente corrente dal servizio.
 * 
 * @remarks DELETE /api/posts/<int:id>
 */
export async function remove_post(id) {
  const res = await middleware(
    `${API}/posts/${id}`, 
    "DELETE"
  );

  return await response(res);
}

/**
 * Crea un nuovo commento sotto un determinato post utilizzando il suo ID.
 * 
 * ```
 * {
 *    content: string -> 'Il contenuto del commento...'
 * }
 * ```
 * 
 * @remarks POST /api/posts/<int:id>/comments
 */
export async function create_comment(id, body) {
  const res = await middleware(
    `${API}/posts/${id}/comments`, 
    "POST", 
    body
  );

  return await response(res);
}

/**
 * Permette la modifica del contenuto di un commento esistente utilizzando il suo ID.
 * 
 * ```
 * {
 *    content: string -> 'Il contenuto del post aggiornato...'
 * }
 * ```
 * 
 * @remarks PATCH /api/comments/<int:id>
 */
export async function update_comment(id, body) {
  const res = await middleware(
    `${API}/comments/${id}`, 
    "PATCH", 
    body
  );

  return await response(res);
}

/**
 * Elimina un commento dell'utente corrente dal servizio.
 * 
 * @remarks DELETE /api/comments/<int:id>
 */
export async function remove_comment(id) {
  const res = await middleware(
    `${API}/comments/${id}`, 
    "DELETE"
  );

  return await response(res);
}

/**
 * Crea un nuovo log associato all'utente corrente.
 * 
 * ```
 * {
 *    url: string -> '/Gaming/nuovo-titolo'
 * }
 * ```
 * 
 * @remarks POST /api/logs
 */
export async function log(body) {
  const res = await middleware(
    `${API}/logs`, 
    "POST",
    body
  );

  return await response(res);
}

/**
 * Mette "Mi piace" a un post o a un commento utilizzando il suo ID.
 * Solo uno dei due query-parameters 'post' e 'comment' può essere utilizzato.
 * 
 * @remarks GET /api/likes?post=&comment=
 */
export async function like(post = null, comment = null) {
  const res = await middleware(
    `${API}/likes?post=${post || new String()}&comment=${comment || new String()}`, 
    "GET"
  );

  return await response(res);
}

/**
 * Mette "Non mi piace" a un post o a un commento utilizzando il suo ID.
 * Solo uno dei due query-parameters 'post' e 'comment' può essere utilizzato.
 * 
 * @remarks GET /api/dislikes?post=&comment=
 */
export async function dislike(post = null, comment = null) {
  const res = await middleware(
    `${API}/dislikes?post=${post || new String()}&comment=${comment || new String()}`, 
    "GET"
  );

  return await response(res);
}

/**
 * Manda un report di segnalazione agli administrator utilizzando l'ID del post o del commento mirato.
 * Solo uno dei due query-parameters 'post' e 'comment' può essere utilizzato.
 * 
 * ```
 * {
 *    subject: string -> 'L'oggetto del report e della segnalazione'
 *    description: string -> 'La descrizione opzionale corta o lunga su di esso'
 * }
 * ```
 * 
 * @remarks POST /api/reports?post=&comment=
 */
export async function report(post = null, comment = null, body) {
  const res = await middleware(
    `${API}/reports?post=${post || new String()}&comment=${comment || new String()}`, 
    "POST",
    body
  );

  return await response(res);
}

/**
 * Invia una nuova idea agli amministratori del servizio.
 *
 * ```
 * {
 *    description: string -> 'La mia nuova idea è...'
 * }
 * ```
 *
 * @remarks POST /api/idea
 */
export async function idea(body) {
  const res = await middleware(
    `${API}/idea`, 
    "POST",
    body
  );

  return await response(res);
}