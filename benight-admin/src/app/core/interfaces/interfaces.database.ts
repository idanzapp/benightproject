export namespace database { 
    //Editar y Crear
    export const ACTION_CREATE = 'crear'
    export const ACTION_EDIT  = 'editar'
    //CONNECTION map
    export const DB_CON_EVENTS = 'events'
    export const DB_CON_ADMIN = 'admin'
    export const DB_CON_TICKET = 'ticket'
    export const DB_CON_LOGIN = 'login'
    export const DB_CON_MARKERS = 'markers'
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
    export const TB_OWNER_EVENT = 'owner_events'
    export const TB_OWNER_PLANS = 'owner_plans'
    export const TB_OWNER_CLUB = 'owner_clubs'
    export const TB_OWNER_TICKET = 'owner_tickets'
    export const TB_OWNER_EMPLOYEE = 'owner_employees'
    export const TB_OWNER_PROMO = 'owner_promos'
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


    //Fields
    export const OWNER_ID_FIELD = 'ownerUid'
    export const ID_FIELD = 'uid'
  }