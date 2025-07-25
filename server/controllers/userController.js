import {Webhook} from 'svix'
import User from '../model/userModel.js'

// api funtion to manage clerk user with database


const clerkWebHooks = async(req,res)=>{
    try {
        //create a svix instance woth webhook secret
        const whook= new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body),{
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"]
        })

        const {data,  type}= req.body
        switch (type){
            case "user.created":{
                    const userData = {
                        clerkId: data.id,
                        email:data.email_addresses[0].email_address,
                        firstName:data.first_name,
                        lastName:data.last_name,
                        photo:data.image_url

                    }

                    await User.create(userData)
                    res.json({})
                break;
            }

            case "user.updated":{
                    const userData = {
                        email:data.email_addresses[0].email_address,
                        firstName:data.first_name,
                        lastName:data.last_name,
                        photo:data.image_url

                    }
                    await User.findOneAndUpdate({clerkId:data.id},userData)
                    res.json({})

                break;
            }

            case "user.deleted":{
                    await User.findOneAndDelete({clerkId:data.id})
                    res.json({})
                break;
            }
        }


    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
    }
}





//api controller function to get user's available credits

const userCredits = async(req,res)=>{
    try {
        const {clerkId} = req
        const userData = await User.findOne({clerkId})
        res.json( {success:true, credits:userData.creditBalance })
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})

    }
}

export {clerkWebHooks,userCredits}