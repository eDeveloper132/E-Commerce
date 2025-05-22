// app/page.tsx

// import connectToDatabase from '../../lib/mongodb';
// import { ProfileModel } from '../../schema/profile';
import MainHome from './Main/page';
import { auth } from '@clerk/nextjs/server';

export default async function HomePage() {
  // 1) connect to MongoDB (will return null on failure)
  // const db = await connectToDatabase();

  // 2) get Clerk’s current user & session
  // const clerkUser = await currentUser();
  const { userId } = await auth();

  // 3) if they just logged in and we have no profile, create one
  // if (userId && clerkUser) {
  //   const existing = await ProfileModel.findOne({ clerk_user_id: clerkUser.id });
  //   if (!existing) {
  //     await ProfileModel.create({
  //       clerk_user_id: clerkUser.id,
  //       username: clerkUser.fullName,
  //       email: clerkUser.emailAddresses?.[0]?.emailAddress ?? '',
  //       phonenumber: clerkUser.phoneNumbers?.[0]?.phoneNumber ?? '',
  //       outh_provider: clerkUser.externalAccounts?.[0]?.provider ?? '',
  //       outh_provider_id: clerkUser.externalAccounts?.[0]?.id ?? '',
  //       outh_provider2: clerkUser.externalAccounts?.[1]?.provider ?? '',
  //       outh_provider2_id: clerkUser.externalAccounts?.[1]?.id ?? '',
  //       image_url: clerkUser.imageUrl ?? '',
  //     });
  //   } else {
  //     // 4) otherwise patch any missing fields
  //     let dirty = false;
  //     const p = existing;
  //     if (!p.username && clerkUser.fullName)            { p.username = clerkUser.fullName; dirty = true; }
  //     if (!p.email    && clerkUser.emailAddresses?.[0]) { p.email    = clerkUser.emailAddresses[0].emailAddress; dirty = true; }
  //     if (!p.phonenumber && clerkUser.phoneNumbers?.[0]) { p.phonenumber = clerkUser.phoneNumbers[0].phoneNumber; dirty = true; }
  //     if (!p.outh_provider   && clerkUser.externalAccounts?.[0]) { p.outh_provider    = clerkUser.externalAccounts[0].provider; dirty = true; }
  //     if (!p.outh_provider_id&& clerkUser.externalAccounts?.[0]) { p.outh_provider_id = clerkUser.externalAccounts[0].id;       dirty = true; }
  //     if (!p.outh_provider2  && clerkUser.externalAccounts?.[1]) { p.outh_provider2   = clerkUser.externalAccounts[1].provider; dirty = true; }
  //     if (!p.outh_provider2_id&& clerkUser.externalAccounts?.[1]){ p.outh_provider2_id= clerkUser.externalAccounts[1].id;       dirty = true; }
  //     if (!p.image_url && clerkUser.imageUrl)            { p.image_url = clerkUser.imageUrl; dirty = true; }

  //     if (dirty) await p.save();
  //   }
  // }

  // 5) render either the protected MainHome or a “please log in” prompt
  return userId ? (
    <MainHome />
  ) : (
    <div className="leading-relaxed px-4 sm:px-6">
      <div className="flex flex-col justify-center items-center my-40 sm:my-60 text-center">
        <p className="text-lg sm:text-2xl font-bold text-red-500">
          Please log in first to access.
        </p>
      </div>
    </div>
  );
}
