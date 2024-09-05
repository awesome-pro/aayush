import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MongoClient, ObjectId } from "mongodb";

const mongoClient = new MongoClient("mongodb://localhost:27017/");

export const useDeleteAppointment = (id: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async() => {
      try {
        const db = mongoClient.db();
        const appointmentsCollection = db.collection("appointments");

        const result = await appointmentsCollection.deleteOne({ _id: new ObjectId(id) });

        console.log("Appointment deleted successfully: ", result);
        //toast.success("Appointment deleted successfully");
        return result;
      } catch (error) {
        console.log("Error deleting appointment: ", error);
        //toast.error("Failed to delete appointment");
        throw error;
      }
    },
    onSuccess: () => {
      //toast.success("Appointment deleted successfully");
      console.log("Appointment deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["Appointments"] });
    },
    onError: (error) => {
      ///toast.error(error.message + " Failed to delete appointment");
      console.log("Failed to delete appointment");
      console.error(error);
    }
  });

  return mutation;
};