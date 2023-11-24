import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackageDetails } from "../../../redux/features/packages/packageApis";


function PackageDetails({ packageId }) {
  
  const { packageDetails } = useSelector((state) => state.packages);

  const dispatch = useDispatch();

 

  useEffect(() => {
    const getData = async () => {
    await  dispatch(fetchPackageDetails(packageId));
    }
    getData()
  }, [dispatch, packageId]);

  if (!packageDetails) {
    return <p>Loading package details...</p>;
  }

  return (
    <>
      {packageDetails &&
        packageDetails.packages &&
        packageDetails.packages.map((item, i) => {

          const packImage = item.image;
          return (
            <div key={i}>
              <div className=" row justify-content-center m-0 p-0">
                <div className=" col-10  p-0 m-0">
                  <div className="row">
<div className="col">
 <div className="col-12 mb-4 mt-5 p-0 m-0">
                    <h2
                      style={{
                        fontFamily: "Axiforma",
                        fontWeight: 800,
                        fontStyle: "normal",
                      }}
                    >
                      {item.title}
                    </h2>
                  </div>
                  <div className="col-12 mb-4 p-0 m-0">
                    <h4
                      style={{
                        fontFamily: "Axiforma",
                        fontWeight: 600,
                        fontStyle: "normal",
                      }}
                    >
                      {" "}
                      CAD {item.price}
                    </h4>
                  </div>
</div>
<div className="col d-flex justify-content-end">
<img src={packImage} alt="" style={{width:'215px'}} />
</div>

                  </div>
                 
                  <div className="col-12 mb-4 p-0 m-0">
                    <p
                      className="text-muted"
                      style={{
                        fontFamily: "Axiforma",
                        fontWeight: 400,
                        fontStyle: "normal",
                      }}
                    >
                      {item.details}
                    </p>
                  </div>



                  <div className="col-12 card mb-5 p-0 m-0">
                    <div className="row p-0 m-0">
                      <div className="col border text-center">
                        <p className="p-2"  style={{
                        fontFamily: "Axiforma",
                        fontWeight: 700,
                        fontStyle: "normal",
                      }}>Attributes</p>
                      </div>
                      <div className="col border text-center">
                        <p className="p-2"  style={{
                        fontFamily: "Axiforma",
                        fontWeight: 700,
                        fontStyle: "normal",
                      }}>Values</p>
                      </div>
                    </div>

                    {packageDetails.attributes.map((attribute, i) => {
                      return (
                        <div className="row  p-0 m-0" key={i}>
                          <div className="col border text-center">
                            <p className="p-2 text-muted"  style={{
                        fontFamily: "Axiforma",
                        fontWeight: 400,
                        fontStyle: "normal",
                      }}>{attribute.name}</p>
                          </div>
                          <div className="col border text-center">
                            <p className="p-2 text-muted"  style={{
                        fontFamily: "Axiforma",
                        fontWeight: 400,
                        fontStyle: "normal",
                      }}>{attribute.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default PackageDetails;
