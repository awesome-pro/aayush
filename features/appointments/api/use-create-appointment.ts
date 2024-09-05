"use server";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MongoClient } from "mongodb";
import AppointmentModel, { Appointment } from "@/backend/models/appointment";
import { dbConnect } from "@/lib/db";

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async(appointmentData: Appointment) => {
      try {

        const { client, db: database } = await dbConnect("appointments");
        const db = mongoClient.db();
        const appointmentsCollection = db.collection("appointments");

        const result = await appointmentsCollection.insertOne(appointmentData);

        console.log("Appointment created successfully: ", result);
        //toast.success("Appointment created successfully");
        return result;
      } catch (error) {
        console.log("Error creating appointment: ", error);
        //toast.error("Failed to create appointment");
        throw error;
      }
    },
    onSuccess: () => {
      //toast.success("Appointment created successfully");
      console.log("Appointment created successfully");
      queryClient.invalidateQueries({ queryKey: ["Appointments"] });
    },
    onError: (error) => {
      //toast.error(error.message + " Failed to create appointment");
      console.log("Failed to create appointment");
      console.error(error);
    }
  });

  return mutation;
};