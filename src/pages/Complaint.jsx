import React, { useEffect } from "react";
import "./Complaint.css";
import axios from "axios";
import CustomTable from "../Components/CustomTable";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useParams } from "react-router";

function Complaint() {
  const { id } = useParams();
  const [complaintData, setComplaintData] = React.useState(null);

  useEffect(() => {
    const fetchComplaintData = async () => {
      try {
        const url = `https://ap-south-1.aws.data.mongodb-api.com/app/gopalganj-userside-bzzzc/endpoint/getMyPost?secret=123456&id=${id}`;
        const res = await axios.post(url);
        console.log("complaint api response", res.data);

        setComplaintData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchComplaintData();
  }, []);
  return (
    <div>
      {complaintData && (
        <div className="row py-5">
          <div className="col-md-6 px-3 d-flex flex-column justify-content-center align-items-center">
            <div style={{ fontSize: "2rem" }}>Before</div>
            {complaintData.imageUrl ? (
              <img
                className="custom-image shadow-lg mx-3"
                src={complaintData.imageUrl}
                alt="Image"
              />
            ) : (
              <div className="text-danger" style={{ fontSize: "2rem" }}>
                Image not found!
              </div>
            )}
          </div>
          <div className="col-md-6 px-3 d-flex flex-column justify-content-center align-items-center">
            <div style={{ fontSize: "2rem" }}>After</div>
            {complaintData.resolvedImageUrl ? (
              <img
                className="custom-image shadow-lg mx-3"
                src={complaintData.resolvedImageUrl}
                alt="Image"
              />
            ) : (
              <div className="text-danger" style={{ fontSize: "2rem" }}>
                Complaint not resolved yet.
              </div>
            )}
          </div>
        </div>
      )}

      {/* <div className="d-flex justify-content-center">
        <button className="btn-lg btn-outline-primary mx-3">Accept</button>
        <button className="btn-lg btn-outline-danger mx-3">Reject</button>
      </div> */}

      <div className="container my-5">
        {complaintData && (
          <CustomTable
            rows={[
              {
                address: complaintData.address,
                attending: complaintData.attending,
                staffContact: complaintData.staffContact,
                date: complaintData.date,
                resolvedDate: complaintData.resolvedDate,
                status: complaintData.status,
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}

export default Complaint;
