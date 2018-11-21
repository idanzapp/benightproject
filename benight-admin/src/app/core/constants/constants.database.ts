const connections = {
  admin: 'admin',
  timedOut: 'timedOut',
  chat: 'chat',
  favourites: 'favourites',
  items: 'items',
  login: 'login',
  markers: 'markers',
  tickets: 'tickets'
}

const literal = {
  bans: 'bans', 
  chats: 'chats',
  clubs: 'clubs',
  employee: 'employee',
  events: 'events',
  locations: 'locations',
  requirements: 'requirements',
  tags: 'tags',
  tickets: 'tickets',
  info: 'info',
  messages: 'messages',
  admins: 'admins',
  employees: 'employees',
  notifications: 'notifications',
  promos: 'promos'
}
const actions = {
  edit: 'editar'
}
const operations = {
  equal: '==',
  greater: '>',
  lower: '<',
  greaterOrEqual: '>=',
  lowerOrEqual: '<=',
  arrayContains: 'array_contains'
}

const tables = {
  admins: 'admins',
  adminNotifications: 'adminNotifications',
  adminEmployees: 'adminEmployees',
  alias: 'alias',
  bans: 'bans',
  chats: 'chats',
  employees: 'employees',
  employeeNotifications: 'employeeNotifications',
  events:'events',
  locations: 'locations',
  locationEvents: 'locationEvents',
  locationGallery: 'locationGallery',
  locationPlans: 'locationPlans',
  messages: 'messages',
  notifications: 'notifications',
  promos: 'promos',
  requirements: 'requirements',
  sentNotifications: 'sentNotifications',
  spam: 'spam',
  tags: 'tags',
  tickets: 'tickets',
  userNotifications: 'userNotifications',
  users: 'users'
}

const list = {
  alias: 'aliasList',
  chat: 'chatList',
  date: 'dateList',
  doc: 'docList',
  employee: 'employeeList',
  event: 'eventList',
  gallery: 'photoList',
  location: 'locationList',
  messages: 'messagesList',
  moderators: 'moderatorsList',
  notification: 'notificationList',
  plan: 'planList',
  promo: 'promoList',
  ticket: 'ticketList',
  user: 'userList'
}


export const database = {
  connections: connections,
  actions: actions,
  operations: operations,
  tables: tables,
  list: list,
  literal: literal
}