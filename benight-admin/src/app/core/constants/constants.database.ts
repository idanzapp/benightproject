/*export namespace database { 
    //Editar y Crear
    export const ACTION_CREATE = 'crear'
    export const ACTION_EDIT  = 'editar'
    //CONNECTION map
    export const DB_CON_EVENTS = 'events'
    export const DB_CON_ADMIN = 'admin'
    export const DB_CON_TICKET = 'ticket'
    export const DB_CON_LOGIN = 'login'
    export const DB_CON_MARKERS = 'markers'
    export const DB_CON_CHAT = 'chat'
    export const DB_CON_GEOMARKERS = 'geomarkers'
    
    //VARIABLES map
    export const VAR_CHAT  = 0
    export const VAR_CLUBS  = 1
    export const VAR_DATE  = 2
    export const VAR_EMPLOYEE  = 3
    export const VAR_EVENTS  = 4
    export const VAR_FILE  = 5
    export const VAR_LISTS  = 6
    export const VAR_NOTIFICATIONS  = 7
    export const VAR_OWNERS  = 8
    export const VAR_PLANS  = 9
    export const VAR_PROMOS  = 10
    export const VAR_PUBLIC_RULES  = 11
    export const VAR_REQUIREMENTS  = 12
    export const VAR_STATISTICS  = 13
    export const VAR_TAGS  = 14
    export const VAR_TICKET  = 15
    export const VAR_TABS = 17
    export const VAR_BACK_URL = 19
    export const VAR_OBSERVER_LONG  = 16
  }

  export namespace tables {    
    //Main tables
    export const TB_EVENT = 'events'
    export const TB_PLANS = 'plans'
    export const TB_CLUB = 'clubs'
    export const TB_TICKET = 'tickets'
    export const TB_EMPLOYEE = 'employees'
    export const TB_PROMO = 'promos'
    //Cross tables
    //OWNER
    export const TB_OWNER_EVENT = 'owner_events'
    export const TB_OWNER_PLANS = 'owner_plans'
    export const TB_OWNER_CLUB = 'owner_clubs'
    export const TB_OWNER_TICKET = 'owner_tickets'
    export const TB_OWNER_EMPLOYEE = 'owner_employees'
    export const TB_OWNER_PROMO = 'owner_promos'
    //DATE
    export const TB_DATE_EVENT = 'date_events'
    export const TB_DATE_PLANS = 'date_plans'
    export const TB_DATE_TICKET = 'date_tickets'
    //CHAT
    export const TB_USER_CHAT = 'user_chat'
    export const TB_CHAT_USER = 'chat_user'
    export const TB_CHATROOM = 'chatroom'
    export const TB_USER_ALIAS = 'user_alias'
    export const TB_USER_SPAM = 'user_chat_spam'
    export const USER_CHAT_FIELD = 'id'
    export const CHAT_USER_FIELD = 'id'
    export const SPAM_FIELD = 'uid'
    export const CHATROOM_FIELD = 'uid'
    export const CHATROOM_ISOPEN_FIELD = 'open'
    export const CHATROOM_OPENON_FIELD = 'openDate'
    export const CHATROOM_NUM_MESSAGES_FIELD = 'numMessages'

    //List Tables
    //EVENTS    
    export const TB_LIST_EVENT_CLUB = 'event_clubs'
    export const TB_LIST_EVENT_TICKET = 'event_tickets'
    export const TB_LIST_EVENT_EMPLOYEE = 'event_employees'
    export const TB_LIST_EVENT_PROMO = 'event_promos'
    export const TB_LIST_EVENT_DATE = 'event_date'
    export const TB_LIST_EVENT_STATISTICS = 'event_statistics'
    export const TB_LIST_EVENT_LISTS = 'event_lists'
    export const TB_LIST_EVENT_PUBLIC = 'event_public'
    export const TB_LIST_EVENT_REQUIREMENTS = 'event_requirements'
    export const TB_LIST_EVENT_TAGS = 'event_tags'
    export const TB_LIST_EVENT_PHOTOS = 'event_photos'
    //PLANS    
    export const TB_LIST_PLAN_CLUB = 'plan_clubs'
    export const TB_LIST_PLAN_TICKET = 'plan_tickets'
    export const TB_LIST_PLAN_EMPLOYEE = 'plan_employees'
    export const TB_LIST_PLAN_PROMO = 'plan_promos'
    export const TB_LIST_PLAN_DATE = 'plan_date'
    export const TB_LIST_PLAN_STATISTICS = 'plan_statistics'
    export const TB_LIST_PLAN_LISTS = 'plan_lists'
    export const TB_LIST_PLAN_PUBLIC = 'plan_public'
    export const TB_LIST_PLAN_REQUIREMENTS = 'plan_requirements'
    export const TB_LIST_PLAN_TAGS = 'plan_tags'
    export const TB_LIST_PLAN_PHOTOS = 'plan_photos'
    //CLUBS
    //ENTRADAS
    //EMPLEADOS

    //Operations
    export const OP_EQUAL = '=='
    export const OP_GREATER = '>'
    export const OP_GREATEROREQ = '>='
    export const OP_LOWEROREQ = '<='
    export const OP_LOWER = '<'
    //Fields
    export const OWNER_ID_FIELD = 'ownerUid'
    export const DATE_ID_FIELD = 'id'
    export const ID_FIELD = 'uid'
  }*/
export const database = {
  connections: {
    events: 'events',
    admin: 'admin',
    ticket: 'ticket',
    login: 'login',
    markers: 'markers',
    chat: 'chat',
    geomarkers: 'geomarkers'
  },
  actions: {
    create: 'create',
    edit: 'edit'
  },
  variables: {
    chat: 'chat',
    club: 'club',
    date: 'date',
    employee: '',
    events: '4',
    file: '5',
    lists: '6',
    notifications: '7',
    owners: '8',
    plans: '9',
    promos: '10',
    publicRules: 'publicRules',
    requirements: 'requirements',
    statistics: 'statistics',
    tags: 'tags',
    ticket: 'ticket',
    default: 'default'
  },
  operations: {
    equal: '==',
    greater: '>',
    lower: '<',
    greaterOrEqual: '>=',
    lowerOrEqual: '<='
  },
  tables: {
    alias: {
      name: 'alias',
      internalId: 'uid',
      externalId: 'id'
    },
    chats: {
      name: 'chat',
      internalId: 'uid',
      fields: {
        isOpen: 'isOpen',
        openOn: 'openOn'
      },
      relations: {
        user: {
          name: 'chatUser',
          fields: {
            relation: 'id',
            list: 'userList'
          }
        },
        event: {
          name: 'chatEvent',
          fields: {
            //1-by-1, so no need list
            relation: 'id'
          }
        }
      }
    },
    clubs: {
      name: 'clubs',
      internalId: 'uid',
      relations: {
        event: {
          name: 'clubEvent',
          fields: {
            relation: 'id',
            list: 'eventList',
            fields: {
              name: 'nextDate'
            }
          }
        },
        gallery: {
          name: 'clubGallery',
          fields: {
            list: 'photoList'
          }
        }
      }
    },
    events: {
      name: 'events',
      internalId: 'uid',
      relations: {
        modified: {
          name: 'modifiedEventDates',
          fields: {
            relation: 'id',
            list: 'modifiedEventList'
          }
        },
        promoted: {
          name: 'promotedEvent',
          fields: {
            relation: 'id',
            list: 'promotedEventList'
          }
        },
        lists: {
          name: 'eventLists',
          fields: {
            relation: 'id',
            list: 'eventListList'
          }
        },
        ticket: {
          name: 'eventTickets',
          fields: {
            relation: 'id',
            list: 'eventTicketList'
          }
        }
      }
    },
    markers: {
      name: 'markers',
      internalId: 'uid',
      geo: 'coords',
      info: 'info'
    },
    plans: {
      name: 'plans',
      internalId: 'uid',
      relations: {
        modified: {
          name: 'modifiedPlanDates',
          fields: {
            relation: 'id',
            list: 'modifiedPlanList'
          }
        },
        promoted: {
          name: 'promotedPlan',
          fields: {
            relation: 'id',
            list: 'promotedPlanList'
          }
        },
        lists: {
          name: 'planLists',
          fields: {
            relation: 'id',
            list: 'planListList'
          }
        },
        ticket: {
          name: 'planTickets',
          fields: {
            relation: 'id',
            list: 'planTicketList'
          }
        }
      }
    },
    promos: {
      name: 'promos',
      internalId: 'uid',
      relations: {

      }
    },
    publicRules: {
      name: 'publicRules',
      internalId: 'uid',
      relations: {

      }
    },
    requirements: {
      name: 'requirements',
      internalId: 'uid'
    },
    tags: {
      name: 'tags',
      internalId: 'uid'
    },
    tickets: {
      name: 'tickets',
      internalId: 'uid',
      relations: {
        user: {
          name: 'ticketUser',
          fields: {
            relation: 'id',
            list: 'transactionList',
            fields: {
              code: 'code', //If a code is used to buy it
              date: 'date',
              numTicket: 'numTicket',
              discount: 'discount',
              price: 'price',
            }
          }
        }
      }
    },
    users: {
      name: 'users',
      internalId: 'uid',
      relations: {
        info: {
          name: 'userInfo',
          fields: {
            relation: 'id',
            list: 'infoList'
          }
        },
        club: {
          name: 'userClub',
          fields: {
            //1-by-1, only relation
            relation: 'id'
          }
        },
        chat: {
          name: 'userChat',
          fields: {
            relation: 'id',
            list: 'chatList'
          }
        },
        requirements: {
          name: 'userRequirements',
          fields: {
            relation: 'id',
            list: 'requirementsList'
          }
        },
        silencedEvent: {
          name: 'userSilencedEvent',
          fields: {
            relation: 'id',
            list: 'silencedEventList'
          }
        },
        spam: {
          name: 'userSpam',
          fields: {
            relation:'id' //idUser
          }
        },
        tag: {
          name: 'userTag',
          fields: {
            relation: 'id',
            list: 'tagList'
          }
        },
        ticket: {
          name: 'userTicket',
          fields: {
            relation: 'id',
            list: 'ticketList'
          }
        },
        default: {
          name: 'userDefault',
          fields: {
            relation: 'id',
            fields: {
              club: 'club',
              employees: 'employess',
              event: 'event',
              plan: 'plan',
              publicRulesList: 'publicRulesList',
              requirementsLit: 'requirementsList',
              tagsList: 'tagsList',
              ticket: 'ticket',
              ticketList: 'ticketList'             
            }
          }
        }
      }
    }
  }
}