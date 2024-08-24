import { baseApi } from "../pai/baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "@/types/common";
// import { IDoctor } from "@/types/doctor";

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url:"/user/create-doctor",
        method:"POST",
        contentType:"multipart/form-data",
        data,
      }), 
      invalidatesTags: [tagTypes.doctor],  
    }),

    getAllDoctors: build.query({
        query: (arg: Record<string, any>) => {
            return {
          url:"/doctor",
          method:"GET",
          params: arg,
        }; 
    },
        providesTags: [tagTypes.specialties],  
      }),

      deleteSpecialty: build.mutation({
        query: (id) => ({
          url:`/specialties/${id}`,
          method:"DELETE",
        }), 
        invalidatesTags: [tagTypes.specialties],  
      }),
  }),
});

export const { 
    useCreateDoctorMutation, 
    useGetAllDoctorsQuery, 
    useDeleteDoctorMutation, 
} = doctorApi;