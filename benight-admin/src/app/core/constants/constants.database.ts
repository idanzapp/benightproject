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
  plans: 'plans',
  promos: 'promos',
  default: 'default',
  dates: 'dates',
  gallery: 'gallery',
  lists: 'list'
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
  dates: 'dates',
  default: 'default',
  employees: 'employees',
  employeeNotifications: 'employeeNotifications',
  events:'events',
  gallery: 'gallery',
  lists: 'lists',
  locations: 'locations',
  locationEvents: 'locationEvents',
  locationGallery: 'locationGallery',
  locationPlans: 'locationPlans',
  messages: 'messages',
  notifications: 'notifications',
  plans: 'plans',
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
  user: 'userList',
  list: 'listList',
  owner: 'ownerList',
  rule: 'ruleList',
  requisite: 'requisiteList',
  tag: 'tagList',
  default: {
    chat: 'chat',
    employee: 'employee',
    event: 'event',
    location: 'location',
    notification: 'notification',
    plan: 'plan',
    promo: 'promo',
    ticket: 'ticket'
  }
}

export const database = {
  connections: connections,
  actions: actions,
  operations: operations,
  tables: tables,
  list: list,
  literal: literal
}