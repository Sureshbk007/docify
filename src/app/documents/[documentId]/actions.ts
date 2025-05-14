"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

type SessionClaimsWithOrg = {
  o?: {
    id?: string;
  };
};

export async function getUsers() {
  const { sessionClaims } = await auth();
  const clerk = await clerkClient();

  const claims = sessionClaims as SessionClaimsWithOrg;
  const orgId = claims.o?.id;

  const response = await clerk.users.getUserList({
    organizationId: [orgId as string],
  });

  const users = response.data.map((user) => ({
    id: user.id,
    name:
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
    avatar: user.imageUrl,
  }));

  return users;
}
