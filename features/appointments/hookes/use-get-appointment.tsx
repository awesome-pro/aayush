import { useQuery } from "@tanstack/react-query";
import { MongoClient } from "mongodb";
import { useSearchParams } from "next/navigation";

const mongoClient = new MongoClient(process.env.MONGODB_URI as string);

export const useGetAppointments = () => {
  const params = useSearchParams();

  const from = params.get("from") || "";
  const to = params.get("to") || "";
  const accountId = params.get("accountId") || "";

  const query = useQuery({
    queryKey: ["Appointments", { from, to }],
    queryFn: async () => {
      try {
        const db = mongoClient.db();
        const appointmentsCollection = db.collection("appointments");

        const filter = {
          $and: [
            { startDate: { $gte: from } },
            { startDate: { $lte: to } },
          ],
        };

        const appointments = await appointmentsCollection.find(filter).toArray();

        console.log(appointments);
        //toast.success("Appointments fetched successfully");
        return appointments;
      } catch (error) {
        console.log("Error in getting appointments: ", error);
       // toast.error("Error in getting appointments");
        throw error;
      }
    },
  });

  return query;
};