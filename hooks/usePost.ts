import { supabase } from "@/utils/supabase"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { router } from "expo-router"

export const getPost = () => {
    return useQuery({
        queryKey:["posts"],
        queryFn: async() => {
            const {data,error} = await supabase.from("users").select("id,username,posts(id,caption,image_url)")

            if(error){
                console.error(error)
            }
            return data
        }
    })
}

export const createPost = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:async({caption,imageUrl}:{caption:string, imageUrl:string})=>{
            const userId = await AsyncStorage.getItem("user_id")
            const {error} = await supabase.from("posts").insert({
                caption:caption,
                image_url:imageUrl,
                user_id:userId
            })
            if(error){
                console.error(error)
            }
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["posts"]})
        }
    })
}

export const deletePost = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:async({id}:{id:string}) => {
            const {error} = await supabase.from("posts").delete().eq("id",id)
            if(error){
                console.error(error)
            }    
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["posts"]})
        }
    })
}

export const updatePost = () =>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:async({id,caption,imageUrl}:{id:string,caption:string,imageUrl:string}) => {
            const userId = await AsyncStorage.getItem("user_id")
            const {error} = await supabase.from("posts").update({
                caption:caption,
                image_url:imageUrl,
                user_id:userId
            }).eq("id",id)
            if(error){
                console.error(error)
            }
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["posts"]})
            router.replace('/profile')
        }
    })
}

export const getPostUser = () => {
    return useQuery({
        queryKey:["posts"],
        queryFn: async() => {
            const userId = await AsyncStorage.getItem("user_id")
            const {data,error} = await supabase.from("posts").select("*").eq("user_id",userId)

            if(error){
                console.error(error)
            }
            return data
        }
    }) 
}