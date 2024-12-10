"use client"
import { useGetSingleDoctorQuery } from "@/redux/features/doctor/doctorApi";



const DoctorEditPage = ({ params }) => {
  const { doctorId } = params;
  const { data, isLoading } = useGetSingleDoctorQuery(doctorId);
  console.log(data)

    return (
        <>
          {
            isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <h1> Doctor Edit Page {doctorId} </h1>
            )
          }
         
        </>
    )
}

export default DoctorEditPage;