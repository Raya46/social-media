import { supabase } from "@/utils/supabase"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useMutation } from "@tanstack/react-query"
import { router } from "expo-router"

export const useLogin = () => {
    return useMutation({
        mutationFn: async({email,password} : {email:string, password:string}) => {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password:password
            })
            if(error){
                console.log(error);
            }
            await AsyncStorage.setItem("token",data.session?.access_token as string)
            
            const {data: userData, error: userError} = await supabase
            .from("users")
            .select("*")
            .eq("id",data.user?.id)
            .single()

            if(userError || !userData){
                console.log(error);
            }

            await AsyncStorage.setItem("user_id",userData.id)
            
            return userData 
        },
        onSuccess: () => {
            router.replace("/home")
        }
    })
}

export const useRegister = () => {
    return useMutation({
        mutationFn: async({email, username, password, profile_url}: 
            {email:string, username:string, password:string, profile_url:string}) => {
            const {data,error} = await supabase.auth.signUp({
                email:email,
                password:password
            })
            if(error){
                console.log(error)
            }
            const {data:userData, error:userError} = await supabase.from("users").insert({
                email: data.user?.email,
                username:username,
                profile_url:profile_url
            })
            if(userError){
                console.log(userError)
            }
        },
        onError:(error) => {
            console.log(error);
        },
        onSuccess:() => {
            router.replace("/home")
        }
    })
}

export const useLogout = () => {
    return useMutation({
        mutationFn:async() => {
            const {error} = await supabase.auth.signOut()
            if(error){
                console.log(error);
            }
            await AsyncStorage.removeItem("token")
            await AsyncStorage.removeItem("user_id")
        },
        onSuccess: () => {
            router.replace("/")
        },
        onError:async() => {
            router.replace("/")
            await AsyncStorage.removeItem("token")
            await AsyncStorage.removeItem("user_id")
        }
    })
}