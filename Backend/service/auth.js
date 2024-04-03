const sessionIdtoUserMap = new Map();

export function setUser(id,user){
    sessionIdtoUserMap.set(id,user);
}

export function getUser(id){
    return sessionIdtoUserMap.get(id);
}