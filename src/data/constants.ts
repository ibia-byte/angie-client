export const AUTH_TOKEN_KEY = '__demo__eva__token'
export const AUTH_USER_KEY = '__demo__eva__user'


export const appRoles = {
    roleCrmView: "CRM_VIEW",
    roleCrmEdit: "CRM_EDIT",

    roleAuthUserView: "AUTH_USER_VIEW",
    roleAuthUserEdit: "AUTH_USER_EDIT",

    roleAuthGroupView: "AUTH_GROUP_VIEW",
    roleAuthGroupEdit: "AUTH_GROUP_EDIT",

    roleTagView: "AUTH_TAG_VIEW",
    roleTagEdit: "AUTH_TAG_EDIT",

    roleGroupView: "GROUP_VIEW",
    roleGroupEdit: "GROUP_EDIT",
}


export const redux = {
    doLogin: 'DO_LOGIN',
    doLogout: 'DO_LOGOUT',
    doSearch: 'DO_SEARCH',
};

export const localRoutes = {

    dashboard: '/dashboard',
    contacts: '/people/contacts',
    contactsDetails: '/people/contacts/:contactId',
    groups: '/people/groups',

    users: '/admin/users',
    usersGroups: '/admin/user-groups',
    tags: '/admin/tags',
    settings: '/admin/settings',
    tasks: '/tasks',
    help: '/help'
}

const debug = process.env.NODE_ENV !== 'production'
export const url = debug ? 'http://localhost:4002' :
    'http://hgjyuk.com/server'

export const remoteRoutes = {
    authServer: url,
    login: url + '/api/auth/login',
    profile: url + '/api/auth/profile',
    register: url + '/api/auth/register',
    resetPass: url + '/reset',
    contacts: url + '/api/crm/contacts',
    contactSearch: url + '/api/crm/contact/search',
    contactById: url + '/api/crm/contacts/id',
    contactsPerson: url + '/api/crm/people',
    contactsChc: url + '/api/crm/person/chc',
    contactsEmail: url + '/api/crm/emails',
    tags: url + '/api/tags',
    users: url + '/api/users',
    
    userGroups: url + '/api/user-groups',
    contactsPhone: url + '/api/crm/phones',
    contactsAddress: url + '/api/crm/addresses',
    contactsIdentification: url + '/api/crm/identifications',
    contactsRequests: url + '/api/crm/requests',

    groups: url + '/api/groups/groups',
    groupsCombo: url + '/api/groups/combo',
    groupsCategories: url + '/api/groups/categories',
    tasks: url + '/api/tasks',
    contactsCompany: url + '/api/crm/contact/company',
    contactsAvatar: url + '/api/crm/contact/avatar',
    
}



