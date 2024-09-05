// Code to edit an appointment
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MongoClient, ObjectId } from "mongodb";
import { Appointment } from "@/backend/models/appointment";

const mongoClient = new MongoClient("mongodb://localhost:27017/");

export const useEditAppointment = (id: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (updateData: Partial<Appointment>) => {
      try {
        const db = mongoClient.db();
        const appointmentsCollection = db.collection("appointments");

        const result = await appointmentsCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: updateData }
        );

        console.log("Appointment edited successfully: ", result);
        //toast.success("Appointment edited successfully");
        return result;
      } catch (error) {
        console.log("Error editing appointment: ", error);
        //toast.error("Failed to edit appointment");
        throw error;
      }
    },
    onSuccess: () => {
      //toast.success("Appointment edited successfully");
      console.log("Appointment edited successfully");
      queryClient.invalidateQueries({ queryKey: ["Appointments"] });
      queryClient.invalidateQueries({ queryKey: ["Appointment", { id }] });
    },
    onError: (error) => {
      //toast.error(error.message + " Failed to edit appointment");
      console.log("Failed to edit appointment");
      console.error(error);
    }
  });

  return mutation;
};