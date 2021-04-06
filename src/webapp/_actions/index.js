export const login = (user) => ({
    type: "LOGIN",
    data:{
        currentUser:user,
        currentName: user.username,
        authorization:user.role
    }
})

export const logout = () => ({
    type: "LOGOUT",
    data:{
        currentUser:null,
        authorization:"public"
    }
})