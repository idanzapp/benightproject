/* eventChat & chatEvent its the same and its handle on chat relations*/
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

const defaultConf = {
  eventConfiguration: 'eventConfiguration',
  listConfiguration: 'listConfiguration',
  locationConfiguration: 'locationConfiguration',
  planConfiguration: 'planConfiguration',
  rulesConfiguration: 'rulesConfiguration',
  ticketConfiguration: 'ticketConfiguration',
  moderatorConfiguration: 'moderatorConfiguration'
}

const actions = {
  create: 'create',
  edit: 'editar'
}
const tableNames = {
  alias: 'alias',
  admins: 'admins',
  adminEvents: 'adminEvents',
  adminLocations: 'adminLocations',
  adminPlans: 'adminPlans' ,
  adminTickets: 'adminTickets' ,
  adminPromotedEvents: 'adminPromotedEvents',
  bans: 'bans',
  chats: 'chats',
  messages: 'messages',
  chatEvent: 'chatEvent',
  employees: 'employees',
  employeeEvents: 'employeeEvents',
  employeePlans: 'employeePlans',
  employeeLocations: 'employeeLocations',
  employeeTickets: 'employeeTickets',
  employeeTransactions: 'employeeTransactions',
  events: 'events',
  eventModifiedDates: 'eventModifiedDates',
  eventMarkers: 'eventMarkers',
  eventTransactions: 'eventTransactions',  
  plans: 'plans',
  planModifiedDates: 'planModifiedDates',
  planMarkers: 'planMarkers',
  planTransactions: 'planTransactions',
  locations: 'locations',
  locationGallery: 'locationGallery',
  locationEvents: 'locationEvents',
  locationEventsDate: 'locationEventsDate',
  locationPlans: 'locationPlans',
  locationPlansDate: 'locationPlansDate',
  locationModifiedDates: 'locationModifiedDates',
  locationMarkers: 'locationMarkers',
  requirements: 'requirements',
  tags: 'tags',
  spam: 'spam',
  tickets: 'tickets',
  ticketTransactions: 'ticketTransactions',
  upgrades: 'upgrades',
  users: 'users',
  userChat: 'userChat',
  userTransactionEvent: 'userTransactionEvent',
  userTransactioPlan: 'userTransactioPlan',
  favLocations: 'favLocations',
  favEvents: 'favEvents',
  favPlans: 'favPlans',
  favAdmins: 'favAdmins',
  favEmployees: 'favEmployees',
  favTags: 'favTags',
  favRequirements: 'favRequirements',
  silLocations: 'silLocations',
  silEvents: 'silEvents',
  silPlans: 'silPlans',
  silAdmins: 'silAdmins',
  silEmployees: 'silEmployees',
  silTags: 'silTags',
  silRequirements: 'silRequirements'
}

const literal = {
  admins: 'admins',
  bans: 'bans',
  chats: 'chats',
  clubs: 'clubs',
  employee: 'employee',
  employees: 'employees',
  events: 'events',
  fileBucket: 'fileBucket',
  plans: 'plans',
  requirements: 'requirements',
  tags: 'tags',
  tickets: 'tickets',
  default: 'default',
  markers: 'markers',
  promos: 'promos',
  info: 'info',
  messages: 'messages'
}

const fields = {
  internalId: 'uid',
  externalId: 'eid',
  creationDate: 'createdAt',
  updateDate: 'updatedAt',
  expireDate: 'expiresAt',
  openDate: 'openAt',
  finalizeDate: 'finalizeAt',
  name: 'name',
  displayName: 'displayName',
  description: 'description',
  code: 'code',
  photoURL: 'photoURL',
  date: 'date',
  price: 'price',
  address: 'address',
  type: 'type',
  nextDate: 'nextDate',
  uses: 'uses',
  general: 'general',
  tax: 'tax',
  fixed: 'fixed',
  device: 'device',
  gender: 'gender',
  from: 'from',
  email: 'email',
  appear: 'appear',
  balance: 'balance',
  banned: 'banned',
  birthday: 'birthday',
  numFriends: 'numFriends',
  numReferrals: 'numReferrals',
  availableTest: 'availableTest',
  interval: 'interval',
  numMessages: 'numMessages',
  numUsers: 'numUsers',
  state: 'state',
  mediaURL: 'mediaURL',
  message: 'message',
  isPrivate: 'isPrivate',
  activateCountdown: 'activateCountdown',
  enableEvent: 'enableEvent',
  enableList: 'enableList',
  eventPhotoURL: 'eventPhotoURL',
  headerPhotoURL: 'headerPhotoURL',
  finalDate: 'finalDate',
  chat: 'chat',
  listGaugin: 'listGaugin',
  listFlow: 'listFlow',
  userFlow: 'userFlow',
  totalUserFlow: 'totalUserFlow',
  maxAge: 'maxAge',
  minAge: 'minAge',
  gaugin: 'gaugin',
  radius: 'radius',
  assistance: 'assistance',
  paymentAccount: 'paymentAccount',
  adminPercentage: 'adminPercentage',
  employeePercentage: 'employeePercentage',
  listPhotoURL: 'listPhotoURL',
  numPhotosGallery: 'numPhotosGallery',
  maxPhotosGallery: 'maxPhotosGallery',
  numTickets: 'numTickets',
  discount: 'discount',
  budget: 'budget',
  percentage: 'percentage',
  totalAmount: 'totalAmount',
  totalTransactions: 'numTransactions',
  bondAmount: 'bondAmount',
  bondTransactions: 'bondTransactions',
  subscriptionsAmount: 'subscriptionsAmount',
  subscriptionsTransactions: 'subscriptionsTransactions',
  ticketsAmount: 'ticketsAmount',
  ticketsTransactions: 'ticketsTransactions'
}

const listFields = {
  aliasList: 'aliasList',
  usersList: 'usersList',
  chatList: 'chatList',
  banList: 'banList',
  messagesList: 'messagesList',
  eventList: 'eventList',
  employeeList: 'employeeList',
  moderatorList: 'moderatorList',
  locationList: 'locationList',
  planList: 'planList',
  ticketList: 'ticketList',
  gallery: 'gallery',
  dateList: 'dateList',
  docList: 'docList'
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
  admins: {
    connection: connections.login,
    mainFields: {
      uid: fields.internalId,
      availableTest: fields.availableTest,
      code: fields.code,
      displayName: fields.displayName,
      createdAt: fields.creationDate,
      updatedAt: fields.updateDate
    },
    listFields: {
      permissions: {
        uid: fields.internalId,
        name: fields.name,
        createdAt: fields.creationDate,
        updatedAt: fields.updateDate,
        expiresAt: fields.expireDate,
        relativeTo: fields.updateDate
      },
      upgrades: {
        uid: fields.internalId,
        name: fields.name,
        description: fields.description,
        price: fields.price,
        tax: fields.tax,
        fixed: fields.fixed,
        interval: fields.interval,
        createdAt: fields.creationDate,
        updatedAt: fields.updateDate,
        expiresAt: fields.expireDate,
        relativeTo: fields.updateDate
      },
      default: {
        eventConfiguration: defaultConf.eventConfiguration,
        listConfiguration: defaultConf.listConfiguration,
        locationConfiguration: defaultConf.locationConfiguration,
        planConfiguration: defaultConf.planConfiguration,
        rulesConfiguration: defaultConf.rulesConfiguration,
        ticketConfiguration: defaultConf.ticketConfiguration,
        moderatorConfiguration: defaultConf.moderatorConfiguration
      },
      ban: {
        eid: fields.externalId,
        name: fields.name,
        createdAt: fields.creationDate,
        expiresAt: fields.expireDate,
        relativeAt: fields.creationDate
      },
      vip: {
        eid: fields.externalId,
        name: fields.name,
        createdAt: fields.creationDate,
      },
      moderator: {
        eid: fields.externalId,
        displayName: fields.displayName,
        photoURL: fields.photoURL,
        createdAt: fields.creationDate
      }
    },
    relations: {
      event: {
        connection: connections.items,
        name: 'adminEvents',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          event: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL,
            date: fields.date
          }
        }
      },
      location: {
        connection: connections.items,
        name: 'adminLocations',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          location: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL,
            date: fields.date
          }
        }
      },
      plan: {
        connection: connections.items,
        name: 'adminPlans',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          plan: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL,
            date: fields.date
          }
        }
      },
      ticket: {
        connection: connections.items,
        name: 'adminTickets',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          ticket: {
            eid: fields.externalId,
            name: fields.name,
            price: fields.price,
            date: fields.date
          }
        }
      }
    },
    promotedEvents: {
      connection: connections.items,
      name: 'adminPromotedEvents',
      mainFields: {
        uid: fields.internalId
      },
      listFields: {
        promoted: {
          eid: fields.externalId,
          name: fields.name,
          photoURL: fields.photoURL,
          date: fields.date,
          budget: fields.budget
        }
      }
    }
  },
  chats: {
    connection: connections.chat,
    mainFields: {
      uid: fields.internalId,
      createdAt: fields.creationDate,
      updatedAt: fields.updateDate,
      expiresAt: fields.expireDate,
      openAt: fields.openDate,
      relativeTo: fields.openDate,
      numMessages: fields.numMessages,
      numUsers: fields.numUsers
    },
    listFields: {
      users: {
        eid: fields.externalId, //idUser
        name: fields.name,
        photoURL: fields.photoURL,
        appear: fields.appear,
        state: fields.state
      },
      modertors: {
        eid: fields.externalId, //idUser
        name: fields.name,
        photoURL: fields.photoURL,
        appear: fields.appear,
        state: fields.state
      }
    },
    relations: {
      messages: {
        connection: connections.chat,
        name: 'chatMessages',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          messages: {
            eid: fields.externalId,
            date: fields.date,
            mediaURL: fields.mediaURL,
            message: fields.message
          }
        }
      },
      events: {
        connection: connections.chat,
        name: 'chatEvent',
        mainFields: {
          uid: fields.internalId,
          eid: fields.externalId
        }
      }
    }
  },
  employees: {
    connection: connections.login,
    mainFields: {
      uid: fields.internalId,
      createdAt: fields.creationDate,
      updatedAt: fields.updateDate,
      code: fields.code,
      displayName: fields.displayName
    },
    listFields: {
      permissions: {
        uid: fields.internalId,
        name: fields.name,
        createdAt: fields.creationDate,
        updatedAt: fields.updateDate,
        expiresAt: fields.expireDate,
        relativeTo: fields.updateDate
      }
    },
    relations: {
      event: {
        connection: connections.admin,
        name: 'employeeEvents',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          event: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL,
            date: fields.date
          }
        }
      },
      location: {
        connection: connections.admin,
        name: 'employeeLocations',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          location: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL,
            date: fields.date
          }
        }
      },
      plan: {
        connection: connections.admin,
        name: 'employeePlans',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          plan: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL,
            date: fields.date
          }
        }
      },
      ticket: {
        connection: connections.admin,
        name: 'employeeTickets',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          plan: {
            eid: fields.externalId,
            name: fields.name,
            price: fields.price,
            date: fields.date
          }
        }
      },
      transactions: {
        connection: connections.tickets,
        name: 'employeeTransactions',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          date: {  //Sells by Employee & Date
            uid: fields.internalId,
            percentage: fields.percentage,
            totalAmount: fields.totalAmount,
            totalTransactions: fields.totalTransactions,
            bondAmount: fields.bondAmount,
            bondTransactions: fields.bondTransactions,
            subscriptionsAmount: fields.subscriptionsAmount,
            subscriptionsTransactions: fields.subscriptionsTransactions,
            ticketsAmount: fields.ticketsAmount,
            ticketsTransactions: fields.ticketsTransactions,
            listFields: {
              bono: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage
              },
              ticket: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage
              },
              subscription: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage
              },
            }
          },
          user: {  //Sells by Employee & User
            eid: fields.externalId,
            percentage: fields.percentage,
            totalAmount: fields.totalAmount,
            totalTransactions: fields.totalTransactions,
            bondAmount: fields.bondAmount,
            bondTransactions: fields.bondTransactions,
            subscriptionsAmount: fields.subscriptionsAmount,
            subscriptionsTransactions: fields.subscriptionsTransactions,
            ticketsAmount: fields.ticketsAmount,
            ticketsTransactions: fields.ticketsTransactions,
            listFields: {
              bono: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage,
                date: fields.date
              },
              ticket: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage,
                date: fields.date
              },
              subscription: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage,
                date: fields.date
              },
            }
          }
        }
      }
    }
  },
  events: {
    connection: connections.items,
    mainFields: {
      uid: fields.internalId,
      isPrivate: fields.isPrivate,
      createdAt: fields.creationDate,
      updatedAt: fields.updateDate,
      expiresAt: fields.expireDate,
      relatedTo: fields.date,
      activateCountdown: fields.activateCountdown,
      name: fields.name,
      description: fields.description,
      enableEvent: fields.enableEvent,
      enableList: fields.enableList,
      eventPhotoURL: fields.eventPhotoURL,
      headerPhotoURL: fields.headerPhotoURL,
      date: fields.date,
      nextDate: fields.nextDate,
      finalDate: fields.finalDate,
      chat: fields.chat,
      price: fields.price,
      interval: fields.interval,
      listGaugin: fields.listGaugin,
      listFlow: fields.listFlow,
      userFlow: fields.userFlow,
      totalUserFlow: fields.totalUserFlow,
      budget: fields.budget
    },
    listFields: {
      admins: {
        eid: fields.externalId,
        name: fields.name,
        photoURL: fields.photoURL,
        paymentAccount: fields.paymentAccount,
        adminPercentage: fields.adminPercentage,
        employeePercentage: fields.employeePercentage
      },
      sharedEmployees: {
        eid: fields.externalId
      },
      locations: {
        eid: fields.externalId,
        address: fields.address,
        name: fields.name
      },
      vips: {
        eid: fields.externalId
      },
      bannedUsers: {
        eid: fields.externalId
      },
      rules: {
        maxAge: fields.maxAge,
        minAge: fields.minAge,
        gender: fields.gender,
        gaugin: fields.gaugin,
        device: fields.device,
        radius: fields.radius
      },
      tickets: {
        eid: fields.externalId,
        name: fields.name,
        description: fields.description,
        createdAt: fields.creationDate,
        updatedAt: fields.updateDate,
        openAt: fields.openDate,
        expiresAt: fields.expireDate,
        type: fields.type,
        uses: fields.uses,
        rules: {
          maxAge: fields.maxAge,
          minAge: fields.minAge,
          gender: fields.gender,
          gaugin: fields.gaugin,
          device: fields.device,
          radius: fields.radius
        }
      },
      list: {
        eid: fields.externalId,
        assistance: fields.assistance,
        updatedAt: fields.updateDate
      },
      employees: {
        eid: fields.externalId
      },
      tags: {
        eid: fields.externalId,
        name: fields.name
      },
      requirements: {
        eid: fields.externalId,
        name: fields.name
      }
    },
    relations: {
      modifiedDates: {
        connection: connections.items,
        name: 'eventModifiedDates',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          modifiedDates: {
            eid: fields.externalId,
            date: fields.date
          }
        }
      },
      markers: {
        connection: connections.markers,
        name: 'eventMarkers',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          markers: {
            eid: fields.externalId
          }
        }
      },
      transactions: {
        connection: connections.tickets,
        name: 'eventTransactions',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          date: {  //Sells by Event & Date
            uid: fields.internalId,
            percentage: fields.percentage,
            totalAmount: fields.totalAmount,
            totalTransactions: fields.totalTransactions,
            bondAmount: fields.bondAmount,
            bondTransactions: fields.bondTransactions,
            subscriptionsAmount: fields.subscriptionsAmount,
            subscriptionsTransactions: fields.subscriptionsTransactions,
            ticketsAmount: fields.ticketsAmount,
            ticketsTransactions: fields.ticketsTransactions,
            listFields: {
              bono: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage
              },
              ticket: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage
              },
              subscription: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage
              },
            }
          },
          user: {  //Sells by Event & User
            eid: fields.externalId,
            percentage: fields.percentage,
            totalAmount: fields.totalAmount,
            totalTransactions: fields.totalTransactions,
            bondAmount: fields.bondAmount,
            bondTransactions: fields.bondTransactions,
            subscriptionsAmount: fields.subscriptionsAmount,
            subscriptionsTransactions: fields.subscriptionsTransactions,
            ticketsAmount: fields.ticketsAmount,
            ticketsTransactions: fields.ticketsTransactions,
            listFields: {
              bono: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage,
                date: fields.date
              },
              ticket: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage,
                date: fields.date
              },
              subscription: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage,
                date: fields.date
              },
            }
          }
        }
      }
    }
  },
  locations: {
    connection: connections.items,
    mainFields: {
      uid: fields.internalId,
      createdAt: fields.creationDate,
      updatedAt: fields.updateDate,
      name: fields.name,
      description: fields.description,
      nextDate: fields.nextDate,
      headerPhotoURL: fields.headerPhotoURL,
      listPhotoURL: fields.listPhotoURL,
      numPhotosGallery: fields.numPhotosGallery,
      maxPhotosGallery: fields.maxPhotosGallery,
      address: fields.address
    },
    listFields: {
      gallery: {
        uid: fields.internalId,
        photoURL: fields.photoURL
      },
      tags: {
        eid: fields.externalId,
        name: fields.name
      },
      requirements: {
        eid: fields.externalId,
        name: fields.name
      }
    },
    relations: {
      events: {
        connection: connections.items,
        name: 'locationEvents',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          modifiedDates: {
            eid: fields.externalId,
            date: fields.date,
            name: fields.name,
            photoURL: fields.photoURL
          }
        }
      },
      plans: {
        connection: connections.items,
        name: 'locationPlans',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          modifiedDates: {
            eid: fields.externalId,
            date: fields.date,
            name: fields.name,
            photoURL: fields.photoURL
          }
        }
      },
      employee: {
        connection: connections.items,
        name: 'locationEmployees',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          modifiedDates: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL
          }
        }
      },
      modifiedDates: {
        connection: connections.items,
        name: 'locationModifiedDates',
        mainFields: {
          uid: fields.internalId
          /*all location fields*/
        },
        listFields: {
          modifiedDates: {
            eid: fields.externalId,
            date: fields.date,
            listFields: {
              events: {
                connection: connections.items,
                name: 'locationEventsDate',
                mainFields: {
                  uid: fields.internalId
                },
                listFields: {
                  modifiedDates: {
                    eid: fields.externalId,
                    date: fields.date,
                    name: fields.name,
                    photoURL: fields.photoURL
                  }
                }
              },
              plans: {
                connection: connections.items,
                name: 'locationPlansDate',
                mainFields: {
                  uid: fields.internalId
                },
                listFields: {
                  modifiedDates: {
                    eid: fields.externalId,
                    date: fields.date,
                    name: fields.name,
                    photoURL: fields.photoURL
                  }
                }
              },
              markers: {
                connection: connections.markers,
                name: 'locationMarkersDate',
                mainFields: {
                  uid: fields.internalId
                },
                listFields: {
                  markers: {
                    eid: fields.externalId
                  }
                }
              },
              employees: {
                connection: connections.items,
                name: 'locationEmployeesDate',
                mainFields: {
                  uid: fields.internalId
                },
                listFields: {
                  modifiedDates: {
                    eid: fields.externalId,
                    name: fields.name,
                    photoURL: fields.photoURL
                  }
                }
              }
            }
          }
        }
      },
      markers: {
        connection: connections.markers,
        name: 'locationMarkers',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          markers: {
            eid: fields.externalId
          }
        }
      },
      transactions: {
        connection: connections.tickets,
        name: 'locationTransactions',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          date: {  //Sells by Location & Date
            uid: fields.internalId,
            percentage: fields.percentage,
            totalAmount: fields.totalAmount,
            totalTransactions: fields.totalTransactions,
            bondAmount: fields.bondAmount,
            bondTransactions: fields.bondTransactions,
            subscriptionsAmount: fields.subscriptionsAmount,
            subscriptionsTransactions: fields.subscriptionsTransactions,
            ticketsAmount: fields.ticketsAmount,
            ticketsTransactions: fields.ticketsTransactions,
            listFields: {
              bono: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage
              },
              ticket: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage
              },
              subscription: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage
              },
            }
          },
          user: {  //Sells by Location & Date
            eid: fields.externalId,
            percentage: fields.percentage,
            totalAmount: fields.totalAmount,
            totalTransactions: fields.totalTransactions,
            bondAmount: fields.bondAmount,
            bondTransactions: fields.bondTransactions,
            subscriptionsAmount: fields.subscriptionsAmount,
            subscriptionsTransactions: fields.subscriptionsTransactions,
            ticketsAmount: fields.ticketsAmount,
            ticketsTransactions: fields.ticketsTransactions,
            listFields: {
              bono: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage,
                date: fields.date
              },
              ticket: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage,
                date: fields.date
              },
              subscription: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage,
                date: fields.date
              },
            }
          }
        }
      }
    }
  },
  plans: {
    connection: connections.items,
    mainFields: {
      uid: fields.internalId,
      isPrivate: fields.isPrivate,
      createdAt: fields.creationDate,
      updatedAt: fields.updateDate,
      expiresAt: fields.expireDate,
      relatedTo: fields.date,
      activateCountdown: fields.activateCountdown,
      name: fields.name,
      description: fields.description,
      enableEvent: fields.enableEvent,
      enableList: fields.enableList,
      eventPhotoURL: fields.eventPhotoURL,
      headerPhotoURL: fields.headerPhotoURL,
      date: fields.date,
      nextDate: fields.nextDate,
      finalDate: fields.finalDate,
      chat: fields.chat,
      price: fields.price,
      interval: fields.interval,
      listGaugin: fields.listGaugin,
      listFlow: fields.listFlow,
      userFlow: fields.userFlow,
      totalUserFlow: fields.totalUserFlow
    },
    listFields: {
      admin: {
        eid: fields.externalId,
        name: fields.name,
        photoURL: fields.photoURL,
        paymentAccount: fields.paymentAccount,
        adminPercentage: fields.adminPercentage,
        employeePercentage: fields.employeePercentage
      },
      sharedEmployees: {
        eid: fields.externalId
      },
      locations: {
        eid: fields.externalId,
        address: fields.address,
        name: fields.name
      },
      vips: {
        eid: fields.externalId
      },
      bannedUsers: {
        eid: fields.externalId
      },
      rules: {
        maxAge: fields.maxAge,
        minAge: fields.minAge,
        gender: fields.gender,
        gaugin: fields.gaugin,
        device: fields.device,
        radius: fields.radius
      },
      tickets: {
        eid: fields.externalId,
        name: fields.name,
        description: fields.description,
        createdAt: fields.creationDate,
        updatedAt: fields.updateDate,
        openAt: fields.openDate,
        expiresAt: fields.expireDate,
        type: fields.type,
        uses: fields.uses,
        rules: {
          maxAge: fields.maxAge,
          minAge: fields.minAge,
          gender: fields.gender,
          gaugin: fields.gaugin,
          device: fields.device,
          radius: fields.radius
        }
      },
      list: {
        eid: fields.externalId,
        assistance: fields.assistance,
        updatedAt: fields.updateDate
      },
      employees: {
        eid: fields.externalId
      },
      tags: {
        eid: fields.externalId,
        name: fields.name
      },
      requirements: {
        eid: fields.externalId,
        name: fields.name
      }
    },
    relations: {
      modifiedDates: {
        connection: connections.items,
        name: 'planModifiedDates',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          modifiedDates: {
            eid: fields.externalId,
            date: fields.date
          }
        }
      },
      markers: {
        connection: connections.markers,
        name: 'planMarkers',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          markers: {
            eid: fields.externalId
          }
        }
      },
      transactions: {
        connection: connections.tickets,
        name: 'planTransactions',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          date: {  //Sells by Plan & Date
            uid: fields.internalId,
            percentage: fields.percentage,
            totalAmount: fields.totalAmount,
            totalTransactions: fields.totalTransactions,
            bondAmount: fields.bondAmount,
            bondTransactions: fields.bondTransactions,
            subscriptionsAmount: fields.subscriptionsAmount,
            subscriptionsTransactions: fields.subscriptionsTransactions,
            ticketsAmount: fields.ticketsAmount,
            ticketsTransactions: fields.ticketsTransactions,
            listFields: {
              bono: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage
              },
              ticket: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage
              },
              subscription: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage
              },
            }
          },
          user: {  //Sells by Plan & User
            eid: fields.externalId,
            percentage: fields.percentage,
            totalAmount: fields.totalAmount,
            totalTransactions: fields.totalTransactions,
            bondAmount: fields.bondAmount,
            bondTransactions: fields.bondTransactions,
            subscriptionsAmount: fields.subscriptionsAmount,
            subscriptionsTransactions: fields.subscriptionsTransactions,
            ticketsAmount: fields.ticketsAmount,
            ticketsTransactions: fields.ticketsTransactions,
            listFields: {
              bono: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage,
                date: fields.date
              },
              ticket: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage,
                date: fields.date
              },
              subscription: {
                eid: fields.externalId,
                discount: fields.discount,
                price: fields.price,
                code: fields.code,
                percentage: fields.percentage,
                date: fields.date
              },
            }
          }
        }
      }
    }
  },
  requirements: {
    connection: connections.items,
    mainFields: {
      uid: fields.internalId,
      name: fields.name
    }
  },
  spam: {
    connection: connections.chat,
    mainFields: {
      uid: fields.internalId
    }
  },
  tags: {
    connection: connections.items,
    mainFields: {
      uid: fields.internalId,
      name: fields.name
    }
  },
  tickets: {
    connection: connections.items,
    mainFields: {
      uid: fields.internalId,
      createdAt: fields.creationDate,
      updatedAt: fields.updateDate,
      openAt: fields.openDate,
      expiresAt: fields.expireDate,
      type: fields.type,
      nextDate: fields.nextDate,
      uses: fields.uses,
      name: fields.name,
      description: fields.description
    },
    listFields: {
      rules: {
        maxAge: fields.maxAge,
        minAge: fields.minAge,
        gender: fields.gender,
        gaugin: fields.gaugin,
        device: fields.device,
        radius: fields.radius
      }
    }
  },
  upgrades: {
    connection: connections.items,
    mainFields: {
      uid: fields.internalId,
      name: fields.name,
      description: fields.description,
      price: fields.price,
      general: fields.general,
      tax: fields.tax,
      fixed: fields.fixed
    },
    relations: {
      transactions: {
        connection: connections.tickets,
        name: 'ticketTransactions',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          transactions: {
            code: fields.code,
            numTickets: fields.numTickets,
            discount: fields.discount,
            price: fields.price,
            createdAt: fields.creationDate,
            type: fields.type, //bono, ticket, subscription
            from: fields.from, //plan, event
          }
        }
      }
    }
  },
  users: {
    connection: connections.login,
    mainFields: {
      uid: fields.internalId,
      createdAt: fields.creationDate,
      updatedAt: fields.updateDate,
      appear: fields.appear,
      balance: fields.balance,
      banned: fields.banned,
      birthday: fields.birthday,
      displayName: fields.displayName,
      email: fields.email,
      gender: fields.gender,
      photoURL: fields.photoURL,
      numFriends: fields.numFriends,
      numReferrals: fields.numReferrals,
      device: fields.device
    },
    listFields: {
      permissions: {
        uid: fields.internalId,
        name: fields.name,
        createdAt: fields.creationDate,
        updatedAt: fields.updateDate,
        expiresAt: fields.expireDate,
        relativeTo: fields.updateDate
      },
      friends: {
        eid: fields.externalId,
        name: fields.name,
        photoURL: fields.photoURL
      },
      referrals: {
        eid: fields.externalId,
        name: fields.name,
        photoURL: fields.photoURL
      },
      alias: {
        eid: fields.externalId,
        name: fields.name
      },
      ticket: {
        eid: fields.externalId,
        name: fields.name,
        address: fields.address,
        date: fields.date
      }
    },
    relations: {
      chat: {
        connection: connections.chat,
        name: 'userChat',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          chat: {
            eid: fields.externalId,
            name: fields.name,
            message: fields.message, //last message
            updatedAt: fields.updateDate,
            numMessages: fields.numMessages //Messages in Chat - numMessages here = sin leer 
          }
        }
      },
      favLocation: {
        connection: connections.favourites,
        name: 'favLocation',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          location: {
            eid: fields.externalId,
            name: fields.name,
            address: fields.address,
            photoURL: fields.photoURL
          }
        }
      },
      favEvent: {
        connection: connections.favourites,
        name: 'favEvent',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          event: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL
          }
        }
      },
      favPlan: {
        connection: connections.favourites,
        name: 'favPlan',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          plan: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL
          }
        }
      },
      favAdmin: {
        connection: connections.favourites,
        name: 'favAdmin',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          admin: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL
          }
        }
      },
      favEmployee: {
        connection: connections.favourites,
        name: 'favEmployee',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          employee: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL
          }
        }
      },
      favTags: {
        connection: connections.favourites,
        name: 'favTags',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          tag: {
            eid: fields.externalId,
            name: fields.name
          }
        }
      },
      favRequirements: {
        connection: connections.favourites,
        name: 'favRequirements',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          requirement: {
            eid: fields.externalId,
            name: fields.name
          }
        }
      },
      silLocation: {
        connection: connections.favourites,
        name: 'silLocation',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          location: {
            eid: fields.externalId,
            name: fields.name,
            address: fields.address,
            photoURL: fields.photoURL
          }
        }
      },
      silEvent: {
        connection: connections.favourites,
        name: 'silEvent',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          event: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL
          }
        }
      },
      silPlan: {
        connection: connections.favourites,
        name: 'silPlan',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          plan: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL
          }
        }
      },
      silAdmin: {
        connection: connections.favourites,
        name: 'silAdmin',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          admin: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL
          }
        }
      },
      silEmployee: {
        connection: connections.favourites,
        name: 'silEmployee',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          employee: {
            eid: fields.externalId,
            name: fields.name,
            photoURL: fields.photoURL
          }
        }
      },
      silTags: {
        connection: connections.favourites,
        name: 'silTags',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          tag: {
            eid: fields.externalId,
            name: fields.name
          }
        }
      },
      silRequirements: {
        connection: connections.favourites,
        name: 'silRequirements',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          requirement: {
            eid: fields.externalId,
            name: fields.name
          }
        }
      },
      transactionEvent: {
        connection: connections.tickets,
        name: 'userEventTransactions',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          transaction: {
            eid: fields.externalId// Solo esto porque no se dan estadisticas a usuarios
          }
        }
      },
      transactionPlan: {
        connection: connections.tickets,
        name: 'userPlanTransactions',
        mainFields: {
          uid: fields.internalId
        },
        listFields: {
          transaction: {
            eid: fields.externalId// Solo esto porque no se dan estadisticas a usuarios
          }
        }
      }
    }
  }
}

export const database = {
  connections: connections,
  actions: actions,
  tableNames: tableNames,
  operations: operations,
  tables: tables,
  fields: fields,
  listFields: listFields,
  defaultConf: defaultConf,
  literal: literal
}