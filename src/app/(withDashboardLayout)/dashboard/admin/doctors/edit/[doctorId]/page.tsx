"use client"
import { useGetSingleDoctorQuery } from "@/redux/features/doctor/doctorApi";
import UpdateDoctor from "@/components/Doctor/UpdateDoctor";




const DoctorEditPage = ({ params }) => {
  const { doctorId } = params;
  const { data, isLoading } = useGetSingleDoctorQuery(doctorId);

    return (
        <>
          {
            isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <> 
                <h1> Update Doctor} </h1>
                 {data && (
                    <UpdateDoctor doctor={data}/>
                  )
                 }
              </>
            )
          }
         
        </>
    )
}

export default DoctorEditPage;