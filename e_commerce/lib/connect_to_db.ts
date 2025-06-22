import { auth, currentUser } from "@clerk/nextjs/server";
import connectToDatabase from "./mongodb"
import { ProfileModel } from "../schema/schemas";
// import { syncProducts } from "@/app/components/data_source";
const connect_to_db = async function() {
    try {
        await connectToDatabase();
        const clerkUser = await currentUser();
        const { userId } = await auth();
          if (userId && clerkUser) {
    const existing = await ProfileModel.findOne({ clerk_user_id: clerkUser.id });
    if (!existing) {
      await ProfileModel.create({
        clerk_user_id: clerkUser.id,
        username: clerkUser.fullName,
        email: clerkUser.emailAddresses?.[0]?.emailAddress ?? '',
        phonenumber: clerkUser.phoneNumbers?.[0]?.phoneNumber ?? '',
        outh_provider: clerkUser.externalAccounts?.[0]?.provider ?? '',
        outh_provider_id: clerkUser.externalAccounts?.[0]?.id ?? '',
        outh_provider2: clerkUser.externalAccounts?.[1]?.provider ?? '',
        outh_provider2_id: clerkUser.externalAccounts?.[1]?.id ?? '',
        image_url: clerkUser.imageUrl ?? '',
      });
    } else {
      // 4) otherwise patch any missing fields
      let dirty = false;
      const p = existing;
      if (!p.username && clerkUser.fullName)            { p.username = clerkUser.fullName; dirty = true; }
      if (!p.email    && clerkUser.emailAddresses?.[0]) { p.email    = clerkUser.emailAddresses[0].emailAddress; dirty = true; }
      if (!p.phonenumber && clerkUser.phoneNumbers?.[0]) { p.phonenumber = clerkUser.phoneNumbers[0].phoneNumber; dirty = true; }
      if (!p.outh_provider   && clerkUser.externalAccounts?.[0]) { p.outh_provider    = clerkUser.externalAccounts[0].provider; dirty = true; }
      if (!p.outh_provider_id&& clerkUser.externalAccounts?.[0]) { p.outh_provider_id = clerkUser.externalAccounts[0].id;       dirty = true; }
      if (!p.outh_provider2  && clerkUser.externalAccounts?.[1]) { p.outh_provider2   = clerkUser.externalAccounts[1].provider; dirty = true; }
      if (!p.outh_provider2_id&& clerkUser.externalAccounts?.[1]){ p.outh_provider2_id= clerkUser.externalAccounts[1].id;       dirty = true; }
      if (!p.image_url && clerkUser.imageUrl)            { p.image_url = clerkUser.imageUrl; dirty = true; }

      if (dirty) await p.save();
    }
    // try {
    //     await syncProducts();
    // } catch (error) {
    //   console.log('Error syncing products',error)
    // }
  }
    } catch (error) {
        console.log(error)
    }
}

export default connect_to_db