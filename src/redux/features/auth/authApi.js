import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl } from '../../../utils/getBaseUrl';
import { logout } from './authSlice';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/auth`,
    credentials: 'include', // 👈 ensures cookies are sent with every request
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    // ===== AUTH =====
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "/register",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),

    // ===== PROFILE =====
    editProfile: builder.mutation({
      query: ({ id, profileData }) => ({
        url: `/edit-profile/${id}`, 
        method: "PATCH",
        body: profileData,
      }),

    }),

    // ===== USERS MANAGEMENT =====
    getUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      refetchOnMount: true,
      providesTags: ["Users"],
    }),
// frontend RTK Query
deleteUser: builder.mutation({
  query: (userId) => ({
    url: `/user/${userId}`, // singular user
    method: "DELETE",
    credentials: "include",
  }),
  invalidatesTags: ["Users"],
}),



    updateUserRole: builder.mutation({
      query: ({ userId, role }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: { role },
      }),
       refetchOnMount: true,
      invalidatesTags: ["Users"],
    }),
  }),
});

// Export hooks for usage in components
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useEditProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserRoleMutation,
} = authApi;

export default authApi;
