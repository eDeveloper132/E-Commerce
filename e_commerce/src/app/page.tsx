// import Products_Card from './components/Products_Card';
// import IProduct from './types/IProduct';
// import { urlFor } from '../sanity/lib/image'; // Assuming you have this utility function to get image URL
// import { getProducts } from './api/products/products';
import connectToDatabase from '../../lib/mongodb';
import { ProfileModel } from '../../schema/profile';
import MainHome from './Main/page';
import { auth, currentUser } from '@clerk/nextjs/server';
export default async function Home() {
  await connectToDatabase();
  const currentperson = await currentUser();
  const { userId } = await auth();
  const currentpersonidinmongoose = await ProfileModel.findOne({
    clerk_user_id: currentperson?.id,
  });
  if (userId && !currentpersonidinmongoose && currentperson) {
    await ProfileModel.create({
      clerk_user_id: currentperson.id,
      username: currentperson.fullName,
      email: currentperson.emailAddresses?.[0]?.emailAddress,
      phonenumber: currentperson.phoneNumbers?.[0]?.phoneNumber ?? "",
      outh_provider: currentperson.externalAccounts?.[0]?.provider ?? "",
      outh_provider_id: currentperson.externalAccounts?.[0]?.id ?? "",
      outh_provider2: currentperson.externalAccounts?.[1]?.provider ?? "",
      outh_provider2_id: currentperson.externalAccounts?.[1]?.id ?? "",
      image_url: currentperson.imageUrl ?? "",
    });
  }
  if (userId && currentpersonidinmongoose && currentperson) {
    // Check and update fields that are missing (empty strings)
    let updated = false;

  if (currentpersonidinmongoose.username === "" && currentperson.fullName) {
      currentpersonidinmongoose.username = currentperson.fullName;
      updated = true;
    }
  if (currentpersonidinmongoose.email === "" && currentperson.emailAddresses?.[0]?.emailAddress) {
      currentpersonidinmongoose.email = currentperson.emailAddresses[0].emailAddress;
      updated = true;
    }
  if (currentpersonidinmongoose.phonenumber === "" && currentperson.phoneNumbers?.[0]?.phoneNumber) {
      currentpersonidinmongoose.phonenumber = currentperson.phoneNumbers[0].phoneNumber;
      updated = true;
    }
  if (currentpersonidinmongoose.outh_provider === "" && currentperson.externalAccounts?.[0]?.provider) {
      currentpersonidinmongoose.outh_provider = currentperson.externalAccounts[0].provider;
      updated = true;
    }
  if (currentpersonidinmongoose.outh_provider_id === "" && currentperson.externalAccounts?.[0]?.id) {
      currentpersonidinmongoose.outh_provider_id = currentperson.externalAccounts[0].id;
      updated = true;
    }
  if (currentpersonidinmongoose.outh_provider2 === "" && currentperson.externalAccounts?.[1]?.provider) {
      currentpersonidinmongoose.outh_provider2 = currentperson.externalAccounts[1].provider;
      updated = true;
    }
  if (currentpersonidinmongoose.outh_provider2_id === "" && currentperson.externalAccounts?.[1]?.id) {
      currentpersonidinmongoose.outh_provider2_id = currentperson.externalAccounts[1].id;
      updated = true;
    }
  if (currentpersonidinmongoose.image_url === "" && currentperson.imageUrl) {
      currentpersonidinmongoose.image_url = currentperson.imageUrl;
      updated = true;
    }

    // Save the document only if updates were made
    if (updated) {
      await currentpersonidinmongoose.save();
    }
  }

  return (
    <>
    {userId ? (
    <MainHome />
    ) : (
      <div className="leading-relaxed px-4 sm:px-6">
        <div className="flex flex-col justify-center items-center my-40 sm:my-60 text-center px-4">
          <p className="text-lg sm:text-2xl font-bold text-red-500">Please login first to access.</p>
        </div>
      </div>
    )
    }
    </>
  );
}
