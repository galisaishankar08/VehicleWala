"use server"
import { db } from "@/lib/db";

interface UserFormData {
  email: string;
  username: string;
}

export const createUser = async (formData: UserFormData) => {
  // console.log('Creating user:', formData)
  try {
    // Check if the user exists
    let user = await db.users.findUnique({
      where: {
        email: formData.email,
      },
      include: {
        messages: true,
      },
    });

    if (!user) {
      // User doesn't exist, create user
      user = await db.users.create({
        data: {
          email: formData.email,
          username: formData.username,
        },
        include: {
          messages: true,
        },
      });
    }

    // console.log('User:', user);
    return user;
  } catch (error) {
    console.error('Error creating/getting user:', error);
    throw error;
  }
};
