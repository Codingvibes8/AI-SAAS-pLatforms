


import OpenAI from 'openai';
import {NextResponse} from "next/server";
import {auth} from "@clerk/nextjs/server";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
       export async function POST (req:Request) {
    try {
        const {userId} = auth()
        const body= await req.json()
        const {messages} = body

      if (!userId){
          return new NextResponse('unauthorised',{status:401})
      }




        if (!messages){
            return new NextResponse('Messages are required',{status:400})
        }


        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages
        })

        return NextResponse.json(chatCompletion.data.choices[0].message)


    } catch (error) {
console.log("CONVERSATION_ERROR",error)
        return new NextResponse('internal error',{status:500})
    }
}
