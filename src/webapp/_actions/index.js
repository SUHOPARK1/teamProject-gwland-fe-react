export const login = (user) => ({
    type: "LOGIN",
    data:{
        currentUser:user,
        currentName: user.username,
        currentNum: user.num,
        currentProviderid: user.providerId,
        authorization: user.role
    }
})

export const logout = () => ({
    type: "LOGOUT",
    data:{
        currentUser:null,
        authorization:"public"
    }
})