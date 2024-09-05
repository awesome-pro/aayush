import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MongoClient, ObjectId } from "mongodb";

const mongoClient = new MongoClient("mongodb://localhost:27017/");

export const useBulkDeleteAppointments = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async(appointmentIds: string[]) => {
      try {
        const db = mongoClient.db();
        const appointmentsCollection = db.collection("appointments");

        const result = await appointmentsCollection.deleteMany({
          _id: { $in: appointmentIds.map(id => new ObjectId(id)) }
        });

        console.log("Appointments deleted successfully: ", result);
        //toast.success("Appointments deleted successfully");
        return result;
      } catch (error) {
        console.log("Error deleting appointments: ", error);
        //toast.error("Failed to delete appointments");
        throw error;
      }
    },
    onSuccess: () => {
      //toast.success("Appointments deleted successfully");
      console.log("Appointments deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["Appointments"] });
    },
    onError: (error) => {
      //toast.error(error.message + " Failed to delete appointments");
      console.log("Failed to delete appointments");
      console.error(error);
    }
  });

  return mutation;
};