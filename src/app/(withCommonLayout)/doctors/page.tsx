
const AllDoctorsPage = async () => {
    const res = await fetch('http://localhost:5000/api/v1/doctor/get-all-doctors');
    const { data } = await res.json();
    console.log(data)
    return (
        <>
            Doctors Page
        </>
    );
};

export default AllDoctorsPage;