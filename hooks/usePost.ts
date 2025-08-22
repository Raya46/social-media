import { supabase } from "@/utils/supabase"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useMutation, useQuery } from "@tanstack/react-query"

export const getPost = () => {
    return useQuery({
        queryKey:["posts"],
        queryFn: async() => {
            const {data,error} = await supabase.from("posts").select("*")

            if(error){
                console.error(error)
            }
            return data
        }
    })
}

export const createPost = () => {
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
        }
    })
}

export const deletePost = () => {
    return useMutation({
        mutationFn:async({id}:{id:string}) => {
            const {error} = await supabase.from("posts").delete().eq("id",id)
            if(error){
                console.error(error)
            }    
        }
    })
}

export const updatePost = () =>{
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
        }
    })
}